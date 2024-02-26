import Wave from "@/assets/icons/wave.svg?react";
import { Button } from "@/components/button/button.tsx";
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
    <h2 className="hero-article-title">{title}</h2>
    <p className="hero-article-body">{body}</p>
    <Button variant="inverted">Donate today</Button>
    <Wave className="hero-article-wave" />
  </article>
);
