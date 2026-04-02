import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, LanguageProvider } from "@/app/providers";
import "@/styles/globals.css";
import { App } from "@/app/App";

const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect?.startsWith("/")) {
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
