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

// eslint-disable-next-line complexity
export const HeroArticle = ({ card, action }: HeroArticleProps) => (
  <article
    className="hero-article"
    style={getHeroArticleTheme(card?.Theme?.data?.attributes)}
  >
    <Title
      level={card?.Title?.data?.attributes?.HeadingLevel}
      className="hero-article-title"
    >
      {card?.Title?.data?.attributes?.Title}
    </Title>
    <Typography className="hero-article-body">{card?.Text}</Typography>
    {action && (
      <ButtonLink
        href={`/${action?.URL ?? ""}`}
        variant={action?.Type ?? undefined}
        theme={action?.ButtonTheme?.data?.attributes}
      >
        {action?.Label}
      </ButtonLink>
    )}
  </article>
);
