import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getWaysToDonateTabsMap = (tabs: unknown[]) =>
  tabs?.reduce<Map<string, { title: string; body: string; codeUrl?: string }>>(
    (accumulator, tab) => {
      // @ts-expect-error // TODO: fix after integration
      const slug = tab?.attributes?.slug as string;

      if (slug) {
        // @ts-expect-error // TODO: fix after integration
        accumulator.set(slug, tab?.attributes?.data?.attributes);
      }

      return accumulator;
    },
    new Map(),
  );

export const getWaysToDonateTheme = () =>
  getThemeStyle([
    // TODO: Add theme when it's added from the BE side
  ]);
