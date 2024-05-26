import Carousel from "react-slick";
import { CarouselAction } from "@/features/testimonials-section/carousel-action/carousel-action.tsx";
import { TestimonialCard } from "@/features/testimonials-section/testimonial-card/testimonial-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import {
  getNextDisabled,
  getPrevDisabled,
  getTestimonialsSectionTheme,
} from "@/features/testimonials-section/utils.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./testimonials-section.scss";

export interface TestimonialsSectionProps {
  theme?: ComponentSharedColor | null;
  title?: string | null;
  items?: {
    id: string;
    item?: {
      body?: string;
      author?: string;
      theme?: ComponentSharedColor;
    };
  }[];
}

export const TestimonialsSection = ({
  theme,
  items,
  title,
}: TestimonialsSectionProps) => (
  <SectionBase
    className="testimonials-section"
    style={getTestimonialsSectionTheme(theme)}
  >
    <SectionBaseTitle className="testimonials-section-title">
      {title}
    </SectionBaseTitle>
    <Carousel
      className="testimonials-section-carousel"
      centerMode
      infinite={false}
      centerPadding="0"
      slidesToShow={1}
      speed={500}
      adaptiveHeight
      nextArrow={<CarouselAction getIsDisabled={getNextDisabled} />}
      prevArrow={<CarouselAction getIsDisabled={getPrevDisabled} />}
    >
      {items?.map(({ id, item }) => (
        <TestimonialCard
          key={id}
          data={item}
          className="testimonials-section-item"
        />
      ))}
    </Carousel>
  </SectionBase>
);
