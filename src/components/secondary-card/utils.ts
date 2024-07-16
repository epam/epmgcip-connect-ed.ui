import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSectionsSecondaryBanner } from "@/__generated__/graphql.ts";

export const getWavyCardTheme = (data?: ComponentSectionsSecondaryBanner) =>
  getThemeStyle([["--background-color", data?.backgroundColor]]);
