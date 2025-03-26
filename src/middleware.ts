import createMiddleware from "next-intl/middleware";
import { locales } from "../i18n/request.ts";

// eslint-disable-next-line import/no-default-export
export default createMiddleware({
  defaultLocale: locales[0],
  locales,
  localeDetection: true,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
