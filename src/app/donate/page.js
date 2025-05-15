import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="content-section">
      <h1>Donate to Afghan Charity Shop</h1>
      <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
        Your generous contributions help us continue our mission of supporting
        South Asian communities in the UK and abroad. Every donation, no matter
        the size, makes a significant impact.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <section className="card" style={{ flex: "1 1 400px" }}>
          <h2>How to Donate Goods</h2>
          <Image
            src="https://images.unsplash.com/photo-1732800577634-f2e5c4d43995?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Donated clothing and items"
            width={400}
            height={250}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          />
          <p>
            We welcome donations of high-quality, recycled South Asian clothing,
            accessories, books, art, and general household items.
          </p>
          <p>
            Please bring your items to any of our{" "}
            <a href="/contact#locations">shop locations</a> during opening
            hours.
          </p>
        </section>

        <section className="card" style={{ flex: "1 1 400px" }}>
          <h2>Monetary Donations</h2>
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hands holding coins"
            width={400}
            height={250}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          />
          <p>
            Support our work with a financial contribution. Your donations help
            us fund our programs and reach more people in need.
          </p>
          <p>
            <strong>Online donations coming soon!</strong>
          </p>
          <p>
            For now, you can make a monetary donation in person at our shops, or
            contact us for bank transfer details.
          </p>
          <a
            href="#"
            className="donate-button"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            Donate Online (Coming Soon)
          </a>
        </section>
      </div>
    </div>
  );
}
