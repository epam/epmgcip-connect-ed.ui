import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./not-found.scss";

export interface NotFoundProps {
  title: string;
  description: string;
}

export const NotFound = ({ title, description }: NotFoundProps) => (
  <section className="not-found">
    <Title as="h1" className="not-found-title">
      {title}
    </Title>
    <Typography className="not-found-description">{description}</Typography>
  </section>
);
