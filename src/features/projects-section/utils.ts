import { getThemeStyle } from "@/utils/get-theme-style.ts";
import {
  ComponentSharedColor,
  ComponentSharedGridBlock,
} from "@/__generated__/graphql.ts";

const isOdd = (value: number) => value % 2 === 1;

export const getIndexesToStretch = (items: ComponentSharedGridBlock[]) => {
  const { startIndex, indexesToStretch } = items.reduce(
    (accumulator, { image }, index) => {
      if (image?.data) {
        if (isOdd(index - 1 - accumulator.startIndex)) {
          accumulator.indexesToStretch.add(index - 1);
        }
        accumulator.startIndex = index;
      }

      return accumulator;
    },
    {
      indexesToStretch: new Set<number>(),
      startIndex: -1,
    },
  );

  if (isOdd(items.length - 1 - startIndex)) {
    indexesToStretch.add(items.length - 1);
  }

  return indexesToStretch;
};

export const getProjectsSectionTheme = (data?: ComponentSharedColor | null) =>
  getThemeStyle([
    ["--section-background", data?.bgColor],
    ["--section-color", data?.color],
  ]);
