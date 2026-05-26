import { useState } from "react";
import { api } from "../lib/api.js";

export function PublishButton() {
  const [state, setState] = useState<"idle" | "building" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handlePublish() {
    if (!confirm("Regenerate TypeScript files and run npm build on the server?")) return;
    setState("building");
    setMessage("");
    try {
      const result = await api.publish();
      setState("done");
      setMessage("Published successfully");
      console.log(result.output);
      setTimeout(() => setState("idle"), 4000);
    } catch (e) {
      setState("error");
      setMessage(e instanceof Error ? e.message : String(e));
    }
  }

  const colors: Record<string, string> = {
    idle: "#16a34a",
    building: "#854d0e",
    done: "#166534",
    error: "#991b1b",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
      <button
        onClick={handlePublish}
        disabled={state === "building"}
        style={{
          padding: "10px 20px", borderRadius: "8px",
          background: colors[state], border: "none",
          color: "#fff", fontSize: "14px", fontWeight: 600,
          cursor: state === "building" ? "not-allowed" : "pointer",
          opacity: state === "building" ? 0.7 : 1,
        }}
      >
        {state === "building" ? "Building…" : "Publish"}
      </button>
      {message && (
        <span style={{ fontSize: "12px", color: state === "error" ? "#f87171" : "#86efac" }}>
          {message}
        </span>
      )}
    </div>
  );
}
