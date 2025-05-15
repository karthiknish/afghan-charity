import { NextResponse } from "next/server";
import { createClient } from "contentful-management";

// WARNING: This endpoint needs proper authentication before exposing submission data.
// The Contentful Management Token has write access and should be handled with extreme care.
// Consider using a read-only Content Delivery API token if possible for fetching data.

const CONTENTFUL_MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID =
  process.env.CONTENTFUL_ENVIRONMENT || "master"; // Usually 'master'
const CONTENTFUL_CONTENT_TYPE_ID = "charityContact"; // Use your actual content type ID

const client = createClient({
  accessToken: CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function GET(request) {
  // TODO: Implement robust authentication check here.
  // Example: Verify a session token if you implement session-based auth.
  // For now, this is open, which is a security risk.

  if (!CONTENTFUL_MANAGEMENT_TOKEN || !CONTENTFUL_SPACE_ID) {
    console.error("Contentful Management Token or Space ID is not configured.");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT_ID);

    const response = await environment.getEntries({
      content_type: CONTENTFUL_CONTENT_TYPE_ID,
      order: "-sys.createdAt", // Order by most recent first
    });

    const submissions = response.items.map((item) => ({
      sys: {
        id: item.sys.id,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
      },
      fields: {
        // These fields are based on the "charityContact" content type
        name: item.fields.name ? item.fields.name["en-US"] : "N/A",
        email: item.fields.email ? item.fields.email["en-US"] : "N/A",
        phone: item.fields.phone ? item.fields.phone["en-US"] : "N/A",
        message: item.fields.message ? item.fields.message["en-US"] : "N/A",
      },
    }));

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions from Contentful:", error);
    // Provide a more specific error message if possible, but avoid leaking sensitive details.
    let errorMessage = "Failed to fetch submissions.";
    if (error.name === "AccessTokenInvalid") {
      errorMessage =
        "Contentful access token is invalid. Please check server configuration.";
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// Check for required environment variables on module load
if (
  !process.env.CONTENTFUL_SPACE_ID ||
  !process.env.CONTENTFUL_MANAGEMENT_TOKEN
) {
  console.warn(
    "Warning: One or more Contentful environment variables (SPACE_ID, MANAGEMENT_TOKEN) are missing. The /api/admin/contacts route may not function correctly."
  );
} else {
  console.log(
    "All required Contentful environment variables are set for /api/admin/contacts."
  );
}
