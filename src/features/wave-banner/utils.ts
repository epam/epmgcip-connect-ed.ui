import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Enum_Componentsectionswavebanner_Backgroundcolor } from "@/__generated__/graphql.ts";

export const getWaveBannerTheme = (
  bgColor: Enum_Componentsectionswavebanner_Backgroundcolor | undefined,
) => getThemeStyle([["--section-background", bgColor]]);
