export const SITE_NAME = "RIZIQ";
export const SITE_LEGAL_NAME = "RIZIQ Inventions";
export const SITE_TAGLINE = "Beyond Ideas - Into Innovation";
export const SITE_DESCRIPTION =
  "RIZIQ is a research-led technology company offering engineering projects, software, AI, IoT, robotics, embedded systems, research publication support, and technical training including FDP and CRT.";
export const SITE_EMAIL = "info@riziq.in";
export const SITE_PHONE = "+919014314025";
export const SITE_PHONE_DISPLAY = "+91 90143-14025";
export const SITE_LOCALE = "en_IN";
export const SITE_LANGUAGE = "en-IN";

export const SITE_SAME_AS = [
  "https://www.linkedin.com/company/riziq-inventions/",
  "https://www.instagram.com/riziq.in/",
] as const;

export const SITE_URL = "https://riziq.in";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
