import { NextResponse } from "next/server";
import { createClient } from "contentful-management";

// WARNING: This endpoint needs proper authentication before exposing submission data.
// The Contentful Management Token has write access and should be handled with extreme care.

const CONTENTFUL_MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID =
  process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_CONTENT_TYPE_ID = "charityContact"; // Use your actual content type ID

const client = createClient({
  accessToken: CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function GET(request, { params }) {
  // TODO: Add authentication check for production use
  const { id } = params;

  if (!CONTENTFUL_MANAGEMENT_TOKEN || !CONTENTFUL_SPACE_ID) {
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  if (!id) {
    return NextResponse.json(
      { error: "Contact ID is required." },
      { status: 400 }
    );
  }

  try {
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT_ID);
    const entry = await environment.getEntry(id);

    if (!entry) {
      return NextResponse.json(
        { error: "Contact not found." },
        { status: 404 }
      );
    }

    // Format the response
    const lead = {
      id: entry.sys.id,
      createdAt: entry.sys.createdAt,
      updatedAt: entry.sys.updatedAt,
      name: entry.fields.name ? entry.fields.name["en-US"] : "N/A",
      email: entry.fields.email ? entry.fields.email["en-US"] : "N/A",
      phone: entry.fields.phone ? entry.fields.phone["en-US"] : "N/A",
      message: entry.fields.message ? entry.fields.message["en-US"] : "N/A",
    };

    return NextResponse.json(lead, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact by ID:", error);
    let errorMessage = "Failed to fetch contact.";
    if (error.name === "NotFound") {
      errorMessage = "Contact not found.";
      return NextResponse.json({ error: errorMessage }, { status: 404 });
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
