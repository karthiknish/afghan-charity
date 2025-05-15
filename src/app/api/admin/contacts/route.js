import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET(request) {
  // This is a server-side route, so we use non-NEXT_PUBLIC_ prefixed env vars
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
  const contentTypeId =
    process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID || "charityContact";
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master"; // Contentful SDK uses 'master' by default if not specified for environment with Delivery API

  if (!spaceId || !deliveryToken) {
    console.error(
      "Contentful Space ID or Delivery Token not configured on server."
    );
    return NextResponse.json(
      { error: "Server configuration error: Missing Contentful credentials." },
      { status: 500 }
    );
  }

  try {
    const client = createClient({
      space: spaceId,
      accessToken: deliveryToken,
      environment: environmentId, // Optional, defaults to 'master' but good to be explicit
    });

    const response = await client.getEntries({
      content_type: contentTypeId,
      order: "-sys.createdAt", // Fetch latest entries first
    });

    return NextResponse.json(response.items || [], { status: 200 });
  } catch (error) {
    console.error(
      "Error fetching contacts from Contentful (API Route):",
      error
    );
    let errorMessage = "Failed to load contact entries from Contentful.";
    let statusCode = 500;

    if (error.response && error.response.data) {
      errorMessage = `Contentful API error: ${
        error.response.data.message || "Unknown error"
      }`;
      if (error.response.data.details) {
        errorMessage += ` Details: ${JSON.stringify(
          error.response.data.details
        )}`;
      }
      statusCode = error.response.status || 500;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage, details: error.toString() },
      { status: statusCode }
    );
  }
}
