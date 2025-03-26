import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { getNewsSectionTheme } from "@/features/news-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { NewsSectionFragmentFragment } from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./news-section.scss";

export interface NewsSectionProps {
  data: NewsSectionFragmentFragment;
}

export const NewsSection = ({
  data: {
    Theme: theme,
    Articles: cards,
    Heading: heading,
    CTA: action,
    ShowWave: hasWave,
  },
}: NewsSectionProps) => {
  const cardsData = cards?.data.filter(isNotNull);
  return (
    <SectionBase
      className="news-section"
      contentClassName="news-section-content"
      style={getNewsSectionTheme(theme?.data?.attributes)}
      hasWave={!!hasWave}
    >
      <SectionBaseTitle className="news-section-title">
        {heading?.Title?.data?.attributes?.Title}
      </SectionBaseTitle>
      <ul className="news-section-list">
        {cardsData?.map(card => {
          const news = card.attributes;
          /**
           *   Image?: Maybe<ImageEntityResponse>;
           *   LinkText?: Maybe<Scalars['String']['output']>;
           *   LinkedPage?: Maybe<ArticleEntityResponse>;
           *   Text?: Maybe<Scalars['String']['output']>;
           *   Title?: Maybe<TitleEntityResponse>;
           *   URL?: Maybe<Scalars['String']['output']>;
           *   id: Scalars['ID']['output'];
           */
          return (
            <NewsCard
              as="li"
              key={card.__typename}
              cover={news?.featuredImage?.data?.attributes?.url ?? undefined}
              title={news?.title}
              body={news?.excerpt}
              action={{
                text: news?.title,
                slug: news?.slug,
              }}
              // theme={{
              //   color: card.cardColor,
              //   bgColor: card.cardBgColor,
              // }}
            />
          );
        })}
      </ul>
      {action && (
        <ButtonLink
          className="news-section-action"
          href={`/${action.URL ?? ""}`}
          variant={action.Type ?? undefined}
          theme={action.ButtonTheme?.data?.attributes}
        >
          {action.Label}
        </ButtonLink>
      )}
    </SectionBase>
  );
};
