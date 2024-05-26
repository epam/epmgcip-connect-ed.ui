const locales = ["en", "kz", "ru"];

import createMiddleware from "next-intl/middleware";

// eslint-disable-next-line import/no-default-export
export default createMiddleware({
  defaultLocale: "kz",
  locales,
  localeDetection: true,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
