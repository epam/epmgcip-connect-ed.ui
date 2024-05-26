export const locales = ["en", "kz", "ru"] as const;
export type Locale = (typeof locales)[number];
