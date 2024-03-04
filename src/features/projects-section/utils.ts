const isOdd = (value: number) => value % 2 === 1;

export const getIndexesToStretch = (items: { url?: string }[]) => {
  const { startIndex, indexesToStretch } = items.reduce(
    (accumulator, { url }, index) => {
      if (url) {
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
