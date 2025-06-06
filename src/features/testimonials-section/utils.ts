import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { Theme } from "@/__generated__/graphql.ts";

export const getNextDisabled = (currentSlide?: number, slideCount?: number) =>
  currentSlide === (slideCount ?? 1) - 1;

export const getPrevDisabled = (currentSlide?: number) => currentSlide === 0;

export const getTestimonialsSectionTheme = (data?: Theme | null) =>
  getThemeStyle([
    ["--section-background", data?.bgColor],
    ["--section-color", data?.color],
  ]);
