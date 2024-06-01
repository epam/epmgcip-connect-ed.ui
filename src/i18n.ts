export const localesConfig = [
  {
    emoji: "🇺🇸",
    label: "english",
    value: "en",
  },
  {
    emoji: "🇰🇿",
    label: "kazakh",
    value: "kz",
  },
  {
    emoji: "🇷🇺",
    label: "russian",
    value: "ru",
  },
];
export const locales = localesConfig.map(item => item.value);
export type Locale = (typeof locales)[number];
