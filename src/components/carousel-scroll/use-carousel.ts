import { useCallback, useEffect, useRef, useState } from "react";
import {
  UseCarousel,
  UseCarouselProps,
} from "@/components/carousel-scroll/carousel.types.ts";
import {
  ROOT_MARGIN,
  ScrollDirection,
  THRESHOLD_VALUE,
} from "@/components/carousel-scroll/constants.ts";

export const useCarousel = ({
  itemsCount,
  shouldObserve = true,
  itemWidthToScrollMultiplier,
  options,
}: UseCarouselProps): UseCarousel => {
  const listRef = useRef<HTMLUListElement>(null);

  const [{ hasLeftButton, hasRightButton }, setState] = useState({
    hasLeftButton: false,
    hasRightButton: false,
  });

  useEffect(() => {
    let observer: IntersectionObserver;

    if (shouldObserve && listRef.current) {
      const items = Array.from(listRef.current.children);
      const [firstItem] = items;
      const lastItem = items[items.length - 1];

      let nextState = {};

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const { isIntersecting, target } = entry;

            if (target === firstItem) {
              nextState = {
                ...nextState,
                hasLeftButton: !isIntersecting,
              };
            }

            if (target === lastItem) {
              nextState = {
                ...nextState,
                hasRightButton: !isIntersecting,
              };
            }
          });

          setState(prevState => ({ ...prevState, ...nextState }));
        },
        {
          ...options,
          root: options?.root ?? listRef.current,
          rootMargin: options?.rootMargin ?? ROOT_MARGIN,
          threshold: options?.threshold ?? THRESHOLD_VALUE,
        },
      );

      observer.observe(firstItem);
      observer.observe(lastItem);
    }

    return () => {
      observer?.disconnect();
    };
  }, [shouldObserve, listRef, options, itemsCount]);

  const handleArrowClick = useCallback(
    (direction: ScrollDirection) => {
      if (listRef.current) {
        const {
          current: { scrollLeft },
        } = listRef;

        let itemWidthMultiplier = itemWidthToScrollMultiplier;

        if (!itemWidthMultiplier) {
          // const listWidth = listRef.current.offsetWidth;
          const documentWidth = document.body.offsetWidth;
          const listItemWidth = listRef.current.firstElementChild?.clientWidth;

          itemWidthMultiplier = Math.floor(
            documentWidth / (listItemWidth ?? 1),
          ); /*Math.floor(
            listWidth /
              (listItemWidth ||
                defaultListItemWidth ||
                DEFAULT_LIST_ITEM_WIDTH),
          );*/
        }

        /*
        * const calculatedWidthToScroll =
        scrollLeft +
        (scrollWidth / itemsCount) * itemWidthMultiplier * direction;
        * */

        const calculatedWidthToScroll =
          scrollLeft + document.body.offsetWidth * direction;

        listRef.current.scroll({
          left: Math.ceil(calculatedWidthToScroll),
          behavior: "smooth",
        });
      }
    },
    [itemWidthToScrollMultiplier],
  );

  return {
    listRef,
    hasLeftButton,
    hasRightButton,
    onArrowClick: handleArrowClick,
  };
};
