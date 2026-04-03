const FALLBACK_SITE_URL = "https://example.com";
const REPOSITORY_BASE_PATH = "/savadanko-web";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function getRuntimeBasePath(pathname?: string) {
  const currentPathname =
    pathname ??
    (typeof window !== "undefined" ? window.location.pathname : "/");

  if (
    currentPathname === REPOSITORY_BASE_PATH ||
    currentPathname.startsWith(`${REPOSITORY_BASE_PATH}/`)
  ) {
    return REPOSITORY_BASE_PATH;
  }

  return "";
}

export function withBasePath(pathname = "") {
  if (/^(?:[a-z]+:)?\/\//i.test(pathname)) {
    return pathname;
  }

  const basePath = getRuntimeBasePath();

  if (!pathname || pathname === "/") {
    return basePath || "/";
  }

  const normalizedPath = pathname.replace(/^\/+/, "");
  return `${basePath}/${normalizedPath}`.replace(/\/+/g, "/");
}

export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME ?? "Savely Danko",
  title:
    import.meta.env.VITE_SITE_TITLE ??
    "Savely Danko",
  description:
    import.meta.env.VITE_SITE_DESCRIPTION ??
    "Portfolio of Savely Danko, a full stack developer building responsive interfaces, scalable web applications, and modern digital products.",
  siteUrl: normalizeSiteUrl(
    import.meta.env.VITE_SITE_URL ?? FALLBACK_SITE_URL,
  ),
  themeColor: "#010105",
  socialImage: "Logo.webp",
} as const;

export function getAbsoluteUrl(pathname = "/") {
  if (/^(?:[a-z]+:)?\/\//i.test(pathname)) {
    return pathname;
  }

  const normalizedPath =
    pathname === "/"
      ? ""
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;

  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function isProductionSiteUrlConfigured() {
  return siteConfig.siteUrl !== FALLBACK_SITE_URL;
}
