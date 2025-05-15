export default function TermsPage() {
  return (
    <>
      <head>
        <title>Terms & Conditions | Afghan Charity Shop</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for using Afghan Charity Shop's website and services."
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
        <h1 style={{ color: "#1460aa", marginBottom: 24 }}>
          Terms & Conditions
        </h1>
        <p>
          Welcome to Afghan Charity Shop. By accessing or using our website, you
          agree to comply with and be bound by the following terms and
          conditions. Please read them carefully.
        </p>
        <h2 style={{ marginTop: 24 }}>1. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the website.
        </p>
        <h2 style={{ marginTop: 24 }}>2. Intellectual Property</h2>
        <p>
          All content, trademarks, and data on this website, including but not
          limited to text, images, logos, and software, are the property of
          Afghan Charity Shop or its partners. Unauthorized use is prohibited.
        </p>
        <h2 style={{ marginTop: 24 }}>3. Donations & Purchases</h2>
        <p>
          All donations and purchases are final. Please contact us if you have
          any questions about your transaction.
        </p>
        <h2 style={{ marginTop: 24 }}>4. Limitation of Liability</h2>
        <p>
          Afghan Charity Shop is not liable for any damages arising from the use
          of this website or from any information, content, materials, or
          products included on or otherwise made available to you through this
          site.
        </p>
        <h2 style={{ marginTop: 24 }}>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use
          of the website means you accept the changes.
        </p>
        <p style={{ marginTop: 32, color: "#767670", fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </>
  );
}
