import { createClient } from "contentful-management";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Basic validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Name, phone, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format (simple regex)
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Optional: Basic phone validation (e.g., at least 7 digits)
    // if (!/^\d{7,}$/.test(phone.replace(/\D/g, ''))) {
    //   return NextResponse.json(
    //     { error: 'Invalid phone number format. Minimum 7 digits required.' },
    //     { status: 400 }
    //   );
    // }

    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master";
    const contentTypeId =
      process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID || "charityContact";

    if (
      !spaceId ||
      !process.env.CONTENTFUL_MANAGEMENT_TOKEN ||
      !contentTypeId
    ) {
      console.error("Contentful environment variables are not properly set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment(environmentId);

    // Prepare the entry payload for Contentful
    // Assumes 'en-US' is your default locale and your Contentful fields are named 'name', 'phone', 'email', 'message'
    // Adjust field IDs if they are different in your Contentful model
    const entryPayload = {
      fields: {
        name: { "en-US": name },
        phone: { "en-US": phone },
        email: { "en-US": email },
        message: { "en-US": message },
      },
    };

    const entry = await environment.createEntry(contentTypeId, entryPayload);

    // Optionally, you might want to publish the entry if your workflow requires it
    // await entry.publish();

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully!",
        entryId: entry.sys.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contentful API error:", error);
    let errorMessage = "Failed to submit contact form.";
    let statusCode = 500;

    if (error.name === "BadRequestError" || error.name === "ValidationFailed") {
      errorMessage = `Contentful validation error: ${error.message}`;
      statusCode = 400;
      if (error.details && error.details.errors) {
        errorMessage += ` Details: ${JSON.stringify(error.details.errors)}`;
      }
    } else if (error.response && error.response.data) {
      // Handle errors from Contentful API response
      errorMessage = `Contentful error: ${
        error.response.data.message || "Unknown error"
      }`;
      if (error.response.data.details) {
        errorMessage += ` Details: ${JSON.stringify(
          error.response.data.details
        )}`;
      }
      statusCode = error.response.status || 500;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
