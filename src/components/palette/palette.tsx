import { useLayoutEffect } from "react";
import { ColorScheme } from "@/__generated__/graphql.ts";
import { getApplicationRoot } from "@/utils/get-application-root.ts";

interface PaletteProps {
  palette?: ColorScheme;
}

export const Palette = ({ palette }: PaletteProps) => {
  useLayoutEffect(() => {
    if (palette) {
      const root = getApplicationRoot();
      const styles = [
        `--primary: ${palette.primary!};`,
        `--secondary: ${palette.secondary!};`,
        `--tertiary: ${palette.tertiary};`,
        `--background: ${palette.background!};`,
        `--black: ${palette.black!};`,
        `--white: ${palette.white!};`,
      ];

      root.setAttribute("style", styles.join(""));
    }
  }, [palette]);

  return null;
};
