import cc from "classcat";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getTestimonialCardTheme } from "@/features/testimonials-section/testimonial-card/utils.ts";
import Testimonial from "@/assets/icons/testimonial.svg?react";
import { ComponentSharedTestimonialsCard } from "@/__generated__/graphql.ts";
import "./testimonial-card.scss";

export interface TestimonialCardProps {
  className?: string;
  data?: ComponentSharedTestimonialsCard;
}

export const TestimonialCard = ({ className, data }: TestimonialCardProps) => {
  const icon = data?.Icon?.data[0]?.attributes;

  return (
    <article
      className={cc(["testimonial-card", className])}
      style={getTestimonialCardTheme(data?.Theme?.data?.attributes)}
    >
      {icon?.url ? (
        <img
          className="testimonial-card-icon"
          alt={icon.alternativeText ?? ""}
          src={icon?.url}
        />
      ) : (
        <Testimonial className="testimonial-card-icon" />
      )}
      <Typography className="testimonial-card-body">{data?.Text}</Typography>
      <Title level="h3" className="testimonial-card-author">
        {data?.Author}
      </Title>
    </article>
  );
};
