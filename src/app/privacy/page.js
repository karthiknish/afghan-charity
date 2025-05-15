export default function PrivacyPage() {
  return (
    <>
      <head>
        <title>Privacy Policy | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Afghan Charity Shop to understand how we collect, use, and protect your information."
        />
      </head>
      <div
        style={{
          maxWidth: 800,
          margin: "3rem auto",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          padding: "2rem",
        }}
      >
        <h1 style={{ color: "#1460aa", marginBottom: 24 }}>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This policy explains how Afghan
          Charity Shop collects, uses, and protects your personal information.
        </p>
        <h3 style={{ marginTop: 24 }}>1. Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and donation details when you interact with our website
          or services.
        </p>
        <h3 style={{ marginTop: 24 }}>2. How We Use Your Information</h3>
        <p>
          Your information is used to process donations, respond to inquiries,
          and improve our services. We do not sell or share your personal
          information with third parties except as required by law.
        </p>
        <h3 style={{ marginTop: 24 }}>3. Data Security</h3>
        <p>
          We implement appropriate security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>
        <h3 style={{ marginTop: 24 }}>4. Cookies</h3>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can disable cookies in your browser settings.
        </p>
        <h3 style={{ marginTop: 24 }}>5. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Please review
          this page periodically for any changes.
        </p>
        <p style={{ marginTop: 32, color: "#767670", fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </>
  );
}
