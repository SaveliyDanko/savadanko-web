import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink, useNavigate } from "react-router-dom";
import { LoginPage } from "./pages/Login.js";
import { ProjectsPage } from "./pages/ProjectsPage.js";
import { BlogPage } from "./pages/BlogPage.js";
import { api } from "./lib/api.js";

function Layout() {
  const navigate = useNavigate();

  async function handleLogout() {
    await api.auth.logout();
    navigate("/admin/login");
  }

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    padding: "6px 14px",
    borderRadius: "6px",
    background: isActive ? "#8b5cf6" : "transparent",
    color: isActive ? "#fff" : "#a1a1aa",
    fontSize: "14px",
    fontWeight: 500,
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: "#e4e4e7", background: "#09090b" }}>
      <nav style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "12px 24px", borderBottom: "1px solid #27272a",
        background: "#111113",
      }}>
        <span style={{ fontWeight: 700, fontSize: "16px", marginRight: "16px", color: "#e4e4e7" }}>
          SavaDanko Admin
        </span>
        <NavLink to="/admin/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/admin/blog" style={linkStyle}>Blog</NavLink>
        <button
          onClick={handleLogout}
          style={{
            marginLeft: "auto", padding: "6px 14px", borderRadius: "6px",
            background: "transparent", border: "1px solid #3f3f46",
            color: "#a1a1aa", cursor: "pointer", fontSize: "14px",
          }}
        >
          Logout
        </button>
      </nav>
      <main style={{ flex: 1, padding: "32px 24px" }}>
        <Routes>
          <Route path="/admin/projects" element={<ProjectsPage />} />
          <Route path="/admin/blog" element={<BlogPage />} />
          <Route path="/admin" element={<Navigate to="/admin/projects" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    api.auth.me().then(({ authenticated }) => {
      setAuthed(authenticated);
      setChecking(false);
    });
  }, []);

  if (checking) return <div style={{ padding: "32px", color: "#a1a1aa" }}>Loading...</div>;
  if (!authed) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
