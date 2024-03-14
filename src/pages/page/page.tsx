import { Fragment } from "react";
import { HeroSection } from "@/features/hero-section/hero-section.tsx";
import { InformationSection } from "@/features/information-section/information-section.tsx";
import { ProjectsSection } from "@/features/projects-section/projects-section.tsx";
import { ImageBanner } from "@/components/image-banner/image-banner.tsx";
import { GET_PAGE_DATA } from "@/queries/get-page.ts";
import {
  GetPageDataQuery,
  PagePageSectionsDynamicZone,
} from "@/__generated__/graphql.ts";
import { Query } from "@/features/query/query";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";

export interface PageProps {
  slug: string;
  id: string;
}

const renderSection = (section?: PagePageSectionsDynamicZone | null) => {
  // eslint-disable-next-line no-underscore-dangle
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
    default: {
      return null;
    }
  }
};

export const Page = ({ id }: PageProps) => (
  <Query<GetPageDataQuery> variables={{ id }} query={GET_PAGE_DATA}>
    {({ data }) =>
      data?.page?.data?.attributes?.pageSections?.map(section => (
        // eslint-disable-next-line no-underscore-dangle
        <Fragment key={`${id}-${section?.__typename}`}>
          {renderSection(section as PagePageSectionsDynamicZone)}
        </Fragment>
      ))
    }
  </Query>
);
