import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ComponentSharedNoodlesCard } from "@/__generated__/graphql.ts";

export const getInformationCardTheme = (data?: ComponentSharedNoodlesCard) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
  ]);
