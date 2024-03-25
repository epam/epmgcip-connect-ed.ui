import { Fragment } from "react";
import { HeroSection } from "@/features/hero-section/hero-section.tsx";
import { ImageBanner } from "@/features/image-banner/image-banner.tsx";
import { InformationSection } from "@/features/information-section/information-section.tsx";
import { ProjectsSection } from "@/features/projects-section/projects-section.tsx";
import { TestimonialsSection } from "@/features/testimonials-section/testimonials-section.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { GET_PAGE_DATA } from "@/queries/get-page.ts";
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
    {({ data }) => {
      return (
        <>
          {data?.page?.data?.attributes?.pageSections?.map(section => (
            // eslint-disable-next-line no-underscore-dangle
            <Fragment key={`${id}-${section?.__typename}`}>
              {renderSection(section as PagePageSectionsDynamicZone)}
            </Fragment>
          ))}
          <TestimonialsSection
            items={[
              {
                id: "1",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
              {
                id: "2",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
              {
                id: "3",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
              {
                id: "4",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
              {
                id: "5",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
              {
                id: "6",
                item: {
                  body:
                    "I want to express my sincere gratitude to the organisers of the digital literacy course. 👏👏👏👏 It has been excellently organised, 👍 the instructors are knowledgeable, ✅ and the video lessons are very clear and informative✅. \n" +
                    "\n" +
                    "The assigned homework has always been delivered on time. With great appreciation for providing my child with so much valuable information.💪\n" +
                    "\n" +
                    "Because my child has been able to complete every assignment on time and submit them, 👌it has built self-confidence. 🥰\n" +
                    "\n" +
                    "Thank you very much. May there be more students who excel and achieve high results. 🤲\n",
                  author: "Aigerim's mother",
                },
              },
            ]}
            title="Testimonials"
          />
        </>
      );
    }}
  </Query>
);
