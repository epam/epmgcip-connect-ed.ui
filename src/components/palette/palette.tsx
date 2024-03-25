import { useLayoutEffect } from "react";
import { getApplicationRoot } from "@/utils/get-application-root.ts";
import { ColorScheme } from "@/__generated__/graphql.ts";

interface PaletteProps {
  palette?: ColorScheme;
}

export const Palette = ({ palette }: PaletteProps) => {
  useLayoutEffect(() => {
    if (palette) {
      const root = getApplicationRoot();
      const styles = [
        `--primary: ${palette.primary};`,
        `--secondary: ${palette.secondary};`,
        `--tertiary: ${palette.tertiary};`,
        `--background: ${palette.background};`,
        `--black: ${palette.black};`,
        `--white: ${palette.white};`,
        `--quaternary: ${palette.quaternary};`,
        `--quinary: ${palette.quinary};`,
      ];

      root.setAttribute("style", styles.join(""));
    }
  }, [palette]);

  return null;
};
