"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadDetailPage({ params }) {
  const { id } = params;
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/admin/contacts/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch lead.");
        }
        return res.json();
      })
      .then((data) => {
        setLead(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={{ maxWidth: 600, margin: "3rem auto" }}>
      <button
        onClick={() => router.push("/admin")}
        style={{
          marginBottom: 32,
          color: "#1460aa",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        ← Back to all leads
      </button>
      <div
        style={{
          padding: "2rem",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ color: "#1460aa", fontSize: "2rem", marginBottom: 24 }}>
          Lead Details
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "#ce1126" }}>{error}</p>}
        {lead && (
          <div style={{ lineHeight: 1.7 }}>
            <div>
              <strong>Name:</strong> {lead.name}
            </div>
            <div>
              <strong>Email:</strong> {lead.email}
            </div>
            <div>
              <strong>Phone:</strong> {lead.phone}
            </div>
            <div>
              <strong>Message:</strong>
              <br />
              {lead.message}
            </div>
            <div style={{ marginTop: 16, color: "#767670", fontSize: 14 }}>
              <div>
                <strong>Created:</strong>{" "}
                {new Date(lead.createdAt).toLocaleString()}
              </div>
              <div>
                <strong>Updated:</strong>{" "}
                {new Date(lead.updatedAt).toLocaleString()}
              </div>
              <div>
                <strong>ID:</strong> {lead.id}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
