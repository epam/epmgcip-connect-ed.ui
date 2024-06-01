import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./not-found-section.scss";

export interface NotFoundSectionProps {
  title: string;
  description: string;
}

export const NotFoundSection = ({
  title,
  description,
}: NotFoundSectionProps) => (
  <section className="not-found-section">
    <Title as="h1" className="not-found-section-title">
      {title}
    </Title>
    <Typography className="not-found-section-description">
      {description}
    </Typography>
  </section>
);
