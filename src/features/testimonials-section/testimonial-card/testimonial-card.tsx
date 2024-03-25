import cc from "classcat";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getTestimonialCardTheme } from "@/features/testimonials-section/testimonial-card/utils.ts";
import Testimonial from "@/assets/icons/testimonial.svg?react";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import "./testimonial-card.scss";

export interface TestimonialCardProps {
  className?: string;
  data?: {
    body?: string;
    author?: string;
    theme?: ComponentSharedColor;
  };
}

export const TestimonialCard = ({ className, data }: TestimonialCardProps) => (
  <article
    className={cc(["testimonial-card", className])}
    style={getTestimonialCardTheme(data?.theme)}
  >
    <Testimonial className="testimonial-card-icon" />
    <Typography className="testimonial-card-body">{data?.body}</Typography>
    <Title as="h3" className="testimonial-card-author">
      {data?.author}
    </Title>
  </article>
);
