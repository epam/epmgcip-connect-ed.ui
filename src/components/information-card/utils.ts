import { ComponentSharedNoodlesCard } from "@/__generated__/graphql.ts";
import { getThemeStyle } from "@/utils/get-theme-style.ts";

export const getInformationCardTheme = (data?: ComponentSharedNoodlesCard) =>
  getThemeStyle([
    ["--background-color", data?.bgColor],
    ["--text-color", data?.color],
  ]);
