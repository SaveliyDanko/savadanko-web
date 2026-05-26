import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api.js";

export function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.auth.login(password);
      navigate("/admin/projects");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#09090b",
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%", maxWidth: "360px", padding: "32px",
          background: "#111113", borderRadius: "12px",
          border: "1px solid #27272a",
        }}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#e4e4e7" }}>
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
          style={inputStyle}
        />
        {error && (
          <p style={{ color: "#f87171", fontSize: "13px", marginTop: "8px" }}>{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            ...buttonStyle,
            marginTop: "16px",
            width: "100%",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", borderRadius: "8px",
  background: "#1c1c1f", border: "1px solid #3f3f46",
  color: "#e4e4e7", fontSize: "14px", outline: "none",
};

export const buttonStyle: React.CSSProperties = {
  padding: "10px 20px", borderRadius: "8px",
  background: "#8b5cf6", border: "none",
  color: "#fff", fontSize: "14px", fontWeight: 600,
  cursor: "pointer",
};

export const dangerButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#7f1d1d",
  color: "#fca5a5",
};
