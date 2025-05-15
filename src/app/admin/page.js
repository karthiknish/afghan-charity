"use client";

import { useState, useEffect } from "react";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Admin1!"; // Reminder: This is not secure for production.

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid var(--afghan-light-grey, #ccc)",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "var(--afghan-blue, #1460aa)",
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "2rem",
};

const thTdStyle = {
  border: "1px solid var(--afghan-light-grey, #ddd)",
  padding: "12px",
  textAlign: "left",
  fontSize: "0.9rem",
};

const thStyle = {
  ...thTdStyle,
  backgroundColor: "var(--afghan-light-grey, #f2f2f2)",
  color: "var(--afghan-black, #333)",
  fontWeight: "600",
};

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const persistedAuth = localStorage.getItem("isAdminAuthenticated");
    if (persistedAuth === "true") {
      setIsAuthenticated(true);
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/contacts");
      const data = await response.json();

      if (!response.ok) {
        let errorMessage =
          data.error || `API request failed with status ${response.status}`;
        if (data.details) {
          errorMessage += ` (Details: ${data.details})`;
        }
        throw new Error(errorMessage);
      }
      setContacts(data || []);
    } catch (err) {
      console.error("Error fetching contacts via API route:", err);
      setError(
        err.message ||
          "Failed to load contact entries. Check browser console and server logs for more details."
      );
      setContacts([]);
    }
    setIsLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminAuthenticated", "true");
      fetchContacts();
    } else {
      setError("Invalid username or password.");
      setIsAuthenticated(false);
      localStorage.removeItem("isAdminAuthenticated");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setError(null);
    setContacts([]);
    localStorage.removeItem("isAdminAuthenticated");
  };

  if (!isAuthenticated) {
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "5rem auto",
          padding: "2rem",
          border: "1px solid var(--afghan-light-grey, #eee)",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "var(--afghan-blue, #1460aa)",
            marginBottom: "1.5rem",
          }}
        >
          Admin Login
        </h1>
        <form onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: "500",
              }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: "500",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          {error && (
            <p
              style={{
                color: "var(--afghan-red, red)",
                marginBottom: "1rem",
                fontSize: "0.9rem",
              }}
            >
              {error}
            </p>
          )}
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "2rem auto" }}>
      <h1
        style={{
          color: "var(--afghan-blue, #1460aa)",
          borderBottom: "2px solid var(--afghan-gold, #d4af37)",
          paddingBottom: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        Contact Form Entries
      </h1>

      {isLoading && (
        <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
          Loading entries...
        </p>
      )}
      {!isLoading && error && (
        <p
          style={{
            color: "var(--afghan-red, red)",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}

      {!isLoading && !error && contacts.length === 0 && (
        <p
          style={{
            fontSize: "1.1rem",
            textAlign: "center",
            color: "var(--afghan-medium-grey, #555)",
          }}
        >
          No contact entries found.
        </p>
      )}

      {!isLoading && !error && contacts.length > 0 && (
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.sys.id}>
                  <td style={thTdStyle}>
                    {new Date(contact.sys.createdAt).toLocaleDateString()}
                  </td>
                  <td style={thTdStyle}>{contact.fields.name || "N/A"}</td>
                  <td style={thTdStyle}>{contact.fields.phone || "N/A"}</td>
                  <td style={thTdStyle}>{contact.fields.email || "N/A"}</td>
                  <td
                    style={{
                      ...thTdStyle,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {contact.fields.message || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={handleLogout}
        style={{
          ...buttonStyle,
          backgroundColor: "var(--afghan-red, #ce1126)",
          marginTop: "2rem",
          width: "auto",
          padding: "0.6rem 1.5rem",
        }}
      >
        Logout
      </button>
    </div>
  );
}
