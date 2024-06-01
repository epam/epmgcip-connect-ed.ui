import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getClient } from "@/utils/apollo-client";
import { isNotNull } from "@/utils/type-guards/is-not-null";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data";
import { GET_PAGE1_DATA } from "@/queries/get-page1-data";
import {
  LAYOUT_PAGES_VARIABLES,
  PAGE_SIZE,
  START_PAGE,
} from "@/constants/query-variables";
import {
  GetLayoutDataQuery,
  PagePageSectionsDynamicZone,
} from "@/__generated__/graphql";
import { CategorizedNews } from "@/features/categorized-news/categorized-news";
import { HeroSection } from "@/features/hero-section/hero-section";
import { ImageBanner } from "@/features/image-banner/image-banner";
import { InformationSection } from "@/features/information-section/information-section";
import { NewsSection } from "@/features/news-section/news-section";
import { ProjectsSection } from "@/features/projects-section/projects-section";
import { TwoColumnsSection } from "@/features/two-columns-section/two-columns-section.tsx";

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

// eslint-disable-next-line import/no-default-export,react/function-component-definition
export default async function Home({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const client = getClient();
  // get cached value
  const { data: page } = await client.query<GetLayoutDataQuery>({
    query: GET_LAYOUT_DATA,
    variables: LAYOUT_PAGES_VARIABLES,
  });

  const { data } = await client.query({
    query: GET_PAGE1_DATA,
    variables: {
      slug: { startsWith: slug },
      page: START_PAGE,
      pageSize: PAGE_SIZE,
      locale,
    },
  });

  if (!page.pages?.data.some(value => value.attributes?.slug === slug)) {
    notFound();
  }

  return (
    <>
      {data.pages?.data?.[0]?.attributes?.pageSections?.map(section => (
        // @ts-expect-error temp fix
        <Fragment key={`${slug}-${section?.__typename}-${section?.id}`}>
          {renderSection(section as PagePageSectionsDynamicZone)}
        </Fragment>
      ))}
      <TwoColumnsSection />
      {/* eslint-disable */}
      <div className="sp-form-outer sp-force-hide">
        <div
          id="sp-form-235327"
          sp-id="235327"
          sp-hash="fd0f7b239e8ffdf19982b91d5c1dd448838b3dc5011e70a3fad1d8740e4347fb"
          sp-lang="en"
          className="sp-form sp-form-regular sp-form-embed"
          sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22Subscription_form_My_emails%22%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"
        >
          <div className="sp-form-fields-wrapper">
            <div className="sp-message">
              <div></div>
            </div>
            <form noValidate className="sp-element-container ">
              <div
                className="sp-field "
                sp-id="sp-5c47ba76-ed95-48e7-a86d-7e2a7860d63b"
              >
                <label className="sp-control-label">
                  <span>Name</span>
                  <strong>*</strong>
                </label>
                <input
                  type="text"
                  sp-type="input"
                  name="sform[TmFtZQ==]"
                  className="sp-form-control "
                  placeholder="Ivan"
                  sp-tips="%7B%22required%22%3A%22Required%20field%22%7D"
                  autoComplete="on"
                  // @ts-ignore
                  required="required"
                />
              </div>
              <div
                className="sp-field "
                sp-id="sp-e726059f-cd34-4f2e-a0c1-afc0e3ea1827"
              >
                <label className="sp-control-label">
                  <span>Email</span>
                  <strong>*</strong>
                </label>
                <input
                  type="email"
                  sp-type="email"
                  name="sform[email]"
                  className="sp-form-control "
                  placeholder="username@gmail.com"
                  sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D"
                  autoComplete="on"
                  // @ts-ignore
                  required="required"
                />
              </div>
              <div
                className="sp-field sp-button-container "
                sp-id="sp-4a76d52d-1c3f-41a0-98a6-857f2a89b579"
              >
                <button
                  id="sp-4a76d52d-1c3f-41a0-98a6-857f2a89b579"
                  className="sp-button"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="sp-link-wrapper sp-brandname__left "></div>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        async
        src="//web.webformscr.com/apps/fc3/build/default-handler.js?1714030486793"
      />
      {/* eslint-enable */}
    </>
  );
}
