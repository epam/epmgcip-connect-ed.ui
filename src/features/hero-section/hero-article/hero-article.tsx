import { Button } from "@/components/button/button.tsx";
import { Title } from "@/components/title/title";
import { Typography } from "@/components/typography/typography.tsx";
import Wave from "@/assets/icons/wave.svg?react";
import "./hero-article.scss";

export type HeroArticleVariant = "primary" | "secondary";

export interface HeroArticleProps {
  title: string;
  body: string;
  variant?: HeroArticleVariant;
}

export const HeroArticle = ({
  title,
  body,
  variant = "primary",
}: HeroArticleProps) => (
  <article className="hero-article" data-variant={variant}>
    <Title className="hero-article-title">{title}</Title>
    <Typography className="hero-article-body">{body}</Typography>
    <Button variant="inverted">Donate today</Button>
    <Wave className="hero-article-wave" />
  </article>
);
