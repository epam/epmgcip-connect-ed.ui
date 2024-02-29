import { RefObject } from "react";
import { ScrollDirection } from "@/components/carousel-scroll/constants.ts";

export interface UseCarouselProps {
  itemsCount: number;
  shouldObserve?: boolean;
  itemWidthToScrollMultiplier?: number;
  defaultListItemWidth?: number;
  options?: IntersectionObserverInit;
}

export interface UseCarousel {
  listRef: RefObject<HTMLUListElement>;
  hasLeftButton: boolean;
  hasRightButton: boolean;
  onArrowClick: (direction: ScrollDirection) => void;
}
