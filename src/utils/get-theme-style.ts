import { CSSProperties } from "react";
import { paletteMap } from "@/constants/palette.ts";

export function getThemeStyle(
  entries: [styleProperty: string, value?: string | null][],
) {
  return Object.fromEntries(
    entries.reduce<[string, string][]>((accumulator, [propertyName, value]) => {
      const colorVariableName = paletteMap.get(value ?? "");
      if (colorVariableName) {
        accumulator.push([propertyName, `var(${colorVariableName})`]);
      }

      return accumulator;
    }, []),
  ) as CSSProperties;
}
