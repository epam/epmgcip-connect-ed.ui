import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { getNewsSectionTheme } from "@/features/news-section/utils.ts";
import {
  ComponentSharedButton,
  ComponentSharedColor,
  ComponentSharedColumnCard,
  ComponentSharedHeading,
  Maybe,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./news-section.scss";

export interface NewsSectionProps {
  heading?: Maybe<ComponentSharedHeading>;
  cards?: Maybe<ComponentSharedColumnCard[]>;
  action?: Maybe<ComponentSharedButton>;
  theme?: Maybe<ComponentSharedColor>;
  hasWave?: Maybe<boolean>;
}

export const NewsSection = ({
  heading,
  cards,
  action,
  theme,
  hasWave,
}: NewsSectionProps) => (
  <SectionBase
    className="news-section"
    contentClassName="news-section-content"
    style={getNewsSectionTheme(theme)}
    hasWave={!!hasWave}
  >
    <SectionBaseTitle className="news-section-title">
      {heading?.text}
    </SectionBaseTitle>
    <ul className="news-section-list">
      {cards?.map(card => {
        const news = card.article?.data?.attributes;

        return (
          <NewsCard
            as="li"
            key={card.id}
            cover={news?.featuredImage?.data?.attributes?.url}
            title={news?.title}
            body={news?.excerpt}
            action={{
              text: card?.linkText,
              color: card.linkColor,
              slug: news?.slug,
            }}
            theme={{
              // @ts-expect-error here is the error because in request used aliases and codegen doesn't support them
              color: card.cardColor,
              // @ts-expect-error here is the error because in request used aliases and codegen doesn't support them
              bgColor: card.cardBgColor,
            }}
          />
        );
      })}
    </ul>
    {action?.label && (
      <ButtonLink
        className="news-section-action"
        href={`/${action.url ?? ""}`}
        variant={action.type ?? undefined}
      >
        {action.label}
      </ButtonLink>
    )}
  </SectionBase>
);
