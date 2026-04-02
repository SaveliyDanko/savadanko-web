const FALLBACK_SITE_URL = "https://example.com";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME ?? "Savely Danko",
  title:
    import.meta.env.VITE_SITE_TITLE ??
    "Savely Danko — Full Stack Developer",
  description:
    import.meta.env.VITE_SITE_DESCRIPTION ??
    "Portfolio of Savely Danko, a full stack developer building responsive interfaces, scalable web applications, and modern digital products.",
  siteUrl: normalizeSiteUrl(
    import.meta.env.VITE_SITE_URL ?? FALLBACK_SITE_URL,
  ),
  themeColor: "#010105",
  socialImage: "/Logo.jpg",
} as const;

export function getAbsoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function isProductionSiteUrlConfigured() {
  return siteConfig.siteUrl !== FALLBACK_SITE_URL;
}
