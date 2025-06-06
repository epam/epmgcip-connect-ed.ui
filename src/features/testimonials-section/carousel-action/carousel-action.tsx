import { ButtonHTMLAttributes } from "react";
import cc from "classcat";
import { CustomArrowProps } from "react-slick";
import Chevron from "@/assets/icons/chevron-right.svg?react";
import "./carousel-action.scss";

export type CarouselProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CustomArrowProps & {
    getIsDisabled?: (currentSlide?: number, slidesCount?: number) => boolean;
  };

export const CarouselAction = ({
  onClick,
  className,
  getIsDisabled,
  currentSlide,
  slideCount,
  ...delegatedProps
}: CarouselProps) => (
  <button
    {...delegatedProps}
    type="button"
    className={cc(["testimonial-carousel-action", className])}
    onClick={onClick}
    disabled={getIsDisabled?.(currentSlide, slideCount)}
  >
    <Chevron className="testimonial-carousel-arrow" />
  </button>
);
