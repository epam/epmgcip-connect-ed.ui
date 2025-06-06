"use client";

import Carousel from "react-slick";
import { CarouselAction } from "@/features/testimonials-section/carousel-action/carousel-action.tsx";
import { TestimonialCard } from "@/features/testimonials-section/testimonial-card/testimonial-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import {
  getNextDisabled,
  getPrevDisabled,
  getTestimonialsSectionTheme,
} from "@/features/testimonials-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedTestimonialsCard,
  TestimonialsSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./testimonials-section.scss";

export interface TestimonialsSectionProps {
  data?: TestimonialsSectionFragmentFragment;
}

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  const slides = data?.Card?.filter(isNotNull) ?? [];

  return (
    <SectionBase
      className="testimonials-section"
      style={getTestimonialsSectionTheme(data?.Theme)}
      hasWave={data?.ShowWave}
    >
      <SectionBaseTitle className="testimonials-section-title">
        {data?.Title?.Title}
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
        {slides.map(card => (
          <TestimonialCard
            key={card.id}
            data={card as ComponentSharedTestimonialsCard}
            className="testimonials-section-item"
          />
        ))}
      </Carousel>
    </SectionBase>
  );
};
