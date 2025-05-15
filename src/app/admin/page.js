"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    console.log("[AdminPage] useEffect: Checking persisted authentication...");
    const persistedAuth = localStorage.getItem("isAdminAuthenticated");
    if (persistedAuth === "true") {
      console.log(
        "[AdminPage] Found persisted authentication, setting isAuthenticated to true and fetching contacts."
      );
      setIsAuthenticated(true);
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    setIsLoading(true);
    setError(null);
    console.log(
      "[AdminPage] fetchContacts: Fetching contacts from /api/admin/contacts..."
    );
    try {
      const response = await fetch("/api/admin/contacts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if you have a token
          // "Authorization": `Bearer ${token}`
        },
        cache: "no-store", // Disable caching
      });

      if (!response.ok) {
        const data = await response.json();
        console.error("[AdminPage] fetchContacts: Response not ok", data);
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("[AdminPage] fetchContacts: Received data:", data);
      setContacts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("[AdminPage] Error fetching contacts:", err);
      setError(
        err.message || "Failed to load contacts. Please try again later."
      );
      setContacts([]);
    } finally {
      setIsLoading(false);
      console.log("[AdminPage] fetchContacts: Done loading.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    console.log(
      "[AdminPage] handleLogin: Attempting login with username:",
      username
    );
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      console.log("[AdminPage] handleLogin: Login successful.");
      setIsAuthenticated(true);
      localStorage.setItem("isAdminAuthenticated", "true");
      fetchContacts();
    } else {
      console.warn("[AdminPage] handleLogin: Invalid username or password.");
      setError("Invalid username or password.");
      setIsAuthenticated(false);
      localStorage.removeItem("isAdminAuthenticated");
    }
  };

  const handleLogout = () => {
    console.log("[AdminPage] handleLogout: Logging out.");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setError(null);
    setContacts([]);
    localStorage.removeItem("isAdminAuthenticated");
  };

  if (!isAuthenticated) {
    console.log("[AdminPage] Not authenticated, rendering login form.");
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
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(
                  "[AdminPage] Username input changed:",
                  e.target.value
                );
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("[AdminPage] Password input changed.");
              }}
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

  console.log("[AdminPage] Authenticated, rendering contact entries table.");
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
          {console.log("[AdminPage] Loading entries...")}
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
          {console.log("[AdminPage] Error displayed:", error)}
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
          {console.log("[AdminPage] No contact entries found.")}
          No contact entries found.
        </p>
      )}

      {!isLoading && !error && contacts.length > 0 && (
        <div style={{ overflowX: "auto" }}>
          {console.log(
            "[AdminPage] Rendering contacts table with",
            contacts.length,
            "entries."
          )}
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
                <tr
                  key={contact.sys.id}
                  onClick={() =>
                    router.push(`/admin/contacts/${contact.sys.id}`)
                  }
                  style={{
                    cursor: "pointer",
                    background: "#fff",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#f2f6fa")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#fff")
                  }
                >
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
        onClick={() => {
          console.log("[AdminPage] Logout button clicked.");
          handleLogout();
        }}
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
