import { Fragment } from "react";
import { CategorizedNews } from "@/features/categorized-news/categorized-news.tsx";
import { HeroSection } from "@/features/hero-section/hero-section.tsx";
import { ImageBanner } from "@/features/image-banner/image-banner.tsx";
import { InformationSection } from "@/features/information-section/information-section.tsx";
import { NewsSection } from "@/features/news-section/news-section.tsx";
import { ProjectsSection } from "@/features/projects-section/projects-section.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { GET_PAGE_DATA } from "@/queries/get-page.ts";
import { PAGE_SIZE, START_PAGE } from "@/constants/query-variables.ts";
import {
  GetPageDataQuery,
  PagePageSectionsDynamicZone,
} from "@/__generated__/graphql.ts";
import { Query } from "@/features/query/query";

export interface PageProps {
  slug: string;
  id: string;
}

const renderSection = (section?: PagePageSectionsDynamicZone | null) => {
  switch (section?.__typename) {
    case "ComponentSectionsHeroBanner": {
      return (
        <HeroSection
          card={section.overlayBlock}
          action={section.cta}
          bannerSource={section.coverImage?.data?.attributes?.url}
        />
      );
    }
    case "ComponentSectionsImageBanner": {
      return (
        <ImageBanner
          source={section.image?.data?.attributes?.url}
          card={section?.card}
          theme={section?.bgColor}
        />
      );
    }
    case "ComponentSectionsBlocksGrid": {
      return (
        <ProjectsSection
          /* TODO: temporal filtering for type safety.
           Validation should be applied on Strapi side to avoid redundant filtering
           */
          projects={section.block?.filter(isNotNull)}
          title={section.heading}
          theme={section.theme}
        />
      );
    }
    case "ComponentSectionsInfoCardsTypeA": {
      return (
        <InformationSection
          title={section.heading}
          description={section.description}
          action={section.cta}
          theme={section.theme}
          /* TODO: temporal filtering for type safety.
           Validation should be applied on Strapi side to avoid redundant filtering
           */
          cards={section.cards?.filter(isNotNull)}
        />
      );
    }
    case "ComponentSectionsColumns": {
      return (
        <NewsSection
          // @ts-expect-error-next-line Problem is that in interface it's heading, but in request we rename it
          heading={section?.columnsHeading}
          cards={section?.cards?.filter(isNotNull)}
          action={section?.cta}
          theme={section?.theme}
          hasWave={section?.showWave}
        />
      );
    }
    case "ComponentSectionsColumnsWithTabs": {
      return <CategorizedNews data={section} />;
    }
    default: {
      return null;
    }
  }
};

export const Page = ({ id }: PageProps) => (
  <Query<GetPageDataQuery>
    variables={{ id, page: START_PAGE, pageSize: PAGE_SIZE }}
    query={GET_PAGE_DATA}
  >
    {({ data }) =>
      data?.page?.data?.attributes?.pageSections?.map(section => (
        // @ts-expect-error Error section doesn't contain id
        <Fragment key={`${id}-${section?.__typename}-${section?.id}`}>
          {renderSection(section as PagePageSectionsDynamicZone)}
        </Fragment>
      ))
    }
  </Query>
);
