import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, LanguageProvider } from "@/app/providers";
import { getRuntimeBasePath, withBasePath } from "@/config/site";
import "@/styles/globals.css";
import { App } from "@/app/App";

const redirect = new URLSearchParams(window.location.search).get("redirect");
const routerBasePath = getRuntimeBasePath();

if (redirect?.startsWith("/")) {
  window.history.replaceState(null, "", withBasePath(redirect));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={routerBasePath || "/"}>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
