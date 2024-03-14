import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getHeroArticleTheme } from "@/features/hero-section/hero-article/utils.ts";
import {
  ComponentSharedButton,
  ComponentSharedOverlayBlock,
} from "@/__generated__/graphql.ts";
import { Title } from "@/components/title/title";
import "./hero-article.scss";

export interface HeroArticleProps {
  card?: ComponentSharedOverlayBlock | null;
  action?: ComponentSharedButton | null;
}

export const HeroArticle = ({ card, action }: HeroArticleProps) => (
  <article className="hero-article" style={getHeroArticleTheme(card)}>
    <Title className="hero-article-title">{card?.title}</Title>
    <Typography className="hero-article-body">{card?.content}</Typography>
    {action && (
      <ButtonLink
        to={`/${action?.url ?? ""}`}
        variant={action?.type ?? undefined}
        /*theme={action?.bgColor ?? undefined}*/
      >
        {action?.label}
      </ButtonLink>
    )}
  </article>
);
