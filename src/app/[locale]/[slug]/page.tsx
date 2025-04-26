import { Fragment } from "react";
import { notFound } from "next/navigation";
import { ClientGraph } from "@/features/client-graph/client-graph.tsx";
import { ContactBanner } from "@/features/contact-banner/contact-banner.tsx";
import { ExpandableSection } from "@/features/expandable-section/expandable-section.tsx";
import { GetInTouchSection } from "@/features/get-in-touch-section/get-in-touch-section.tsx";
import { PartnersSection } from "@/features/partners-section/partners-section.tsx";
import { ProfilesSection } from "@/features/profiles-section/profiles-section.tsx";
import { RichTextSection } from "@/features/rich-text-section/rich-text-section.tsx";
import { SecondarySection } from "@/features/secondary-section/secondary-section.tsx";
import { SignUp } from "@/features/sign-up/sign-up.tsx";
import { TestimonialsSection } from "@/features/testimonials-section/testimonials-section.tsx";
import { TimelineSection } from "@/features/timeline-section/timeline-section.tsx";
import { WaveBanner } from "@/features/wave-banner/wave-banner.tsx";
import { WaysToDonate } from "@/features/ways-to-donate/ways-to-donate.tsx";
import { DataGraph } from "@/components/data-graph/data-graph.tsx";
import { getClient } from "@/utils/apollo-client";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data";
import { GET_PAGES_DATA } from "@/queries/get-pages-data.ts";
import {
  LAYOUT_PAGES_VARIABLES,
  PAGE_SIZE,
  START_PAGE,
} from "@/constants/query-variables";
import {
  CategorizedNewsFragmentFragment,
  ContactBannerFragmentFragment,
  GetLayoutDataQuery,
  HeroBannerFragmentFragment,
  ImageBannerFragmentFragment,
  InfoSectionFragmentFragment,
  NewsSectionFragmentFragment,
  PagePageSectionsDynamicZone,
  PartnersSectionFragmentFragment,
  ProjectsSectionFragmentFragment,
  RichTextFragmentFragment,
  SecondaryBannerFragmentFragment,
  WaveBannerFragmentFragment,
  WaysToDonateFragmentFragment,
} from "@/__generated__/graphql";
import { CategorizedNews } from "@/features/categorized-news/categorized-news";
import { HeroSection } from "@/features/hero-section/hero-section";
import { ImageBanner } from "@/features/image-banner/image-banner";
import { InformationSection } from "@/features/information-section/information-section";
import { NewsSection } from "@/features/news-section/news-section";
import { ProjectsSection } from "@/features/projects-section/projects-section";
import { TwoColumnsSection } from "@/features/two-columns-section/two-columns-section";

// eslint-disable-next-line complexity
const renderSection = (section?: PagePageSectionsDynamicZone | null) => {
  switch (section?.__typename) {
    case "ComponentSectionsHeroBanner": {
      return <HeroSection data={section as HeroBannerFragmentFragment} />;
    }
    case "ComponentSectionsImageBanner": {
      return <ImageBanner data={section as ImageBannerFragmentFragment} />;
    }
    case "ComponentSectionsBlocksGrid": {
      return (
        <ProjectsSection data={section as ProjectsSectionFragmentFragment} />
      );
    }
    case "ComponentSectionsInfoCardsTypeA": {
      return (
        <InformationSection data={section as InfoSectionFragmentFragment} />
      );
    }
    case "ComponentSectionsColumns": {
      return <NewsSection data={section as NewsSectionFragmentFragment} />;
    }
    case "ComponentSectionsSecondaryBanner": {
      return (
        <SecondarySection
          data={section as unknown as SecondaryBannerFragmentFragment}
        />
      );
    }
    case "ComponentSectionsWaveBanner": {
      return <WaveBanner data={section as WaveBannerFragmentFragment} />;
    }
    case "ComponentSectionsTimeline": {
      return <TimelineSection data={section} />;
    }
    case "ComponentSectionsCarousel": {
      return (
        <PartnersSection data={section as PartnersSectionFragmentFragment} />
      );
    }
    case "ComponentSectionsRichText": {
      return <RichTextSection data={section as RichTextFragmentFragment} />;
    }
    case "ComponentSectionsChart": {
      return <DataGraph url={section.URL ?? ""} />;
    }
    case "ComponentSectionsContactBanner": {
      return <ContactBanner data={section as ContactBannerFragmentFragment} />;
    }
    case "ComponentSectionsAccordion": {
      return <ExpandableSection data={section} />;
    }
    case "ComponentSectionsPersonellCards": {
      return <ProfilesSection data={section} />;
    }
    case "ComponentSectionsEmailForm": {
      return <SignUp data={section} />;
    }
    case "ComponentSectionsGetInTouchForm": {
      return <GetInTouchSection data={section} />;
    }
    case "ComponentSectionsTwoColumns": {
      return <TwoColumnsSection data={section} />;
    }
    case "ComponentSectionsTestimonials": {
      return <TestimonialsSection data={section} />;
    }
    case "ComponentSectionsColumnsWithTabs": {
      return (
        <CategorizedNews data={section as CategorizedNewsFragmentFragment} />
      );
    }
    case "ComponentSectionsWaysToDonate": {
      return <WaysToDonate data={section as WaysToDonateFragmentFragment} />;
    }
    default: {
      return null;
    }
  }
};

// eslint-disable-next-line import/no-default-export
export default async function Home({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const client = getClient();
  // get cached value
  const { data: page } = await client.query<GetLayoutDataQuery>({
    query: GET_LAYOUT_DATA,
    variables: LAYOUT_PAGES_VARIABLES,
  });

  const { data } = await client.query({
    query: GET_PAGES_DATA,
    variables: {
      Slug: { startsWith: slug },
      page: START_PAGE,
      pageSize: PAGE_SIZE,
      locale,
    },
  });

  if (!page.pages?.some(value => value?.Slug === slug)) {
    notFound();
  }

  const sections = (data.pages?.filter(isNotNull) ??
    []) as PagePageSectionsDynamicZone[];

  // const mockContactBannerFragment: ContactBannerFragmentFragment = {
  //   __typename: "ComponentSectionsContactBanner",
  //   id: "1",
  //   theme: {
  //     data: {
  //       attributes: {
  //         color: "#000000",
  //         bgColor: "#ffffff",
  //       },
  //     },
  //   },
  //   columns: [
  //     {
  //       id: "1",
  //       title: "Contact Us",
  //       text: "Feel free to reach out to us for any inquiries.",
  //       label: "Email us at contact@example.com",
  //       showWave: true,
  //     },
  //     {
  //       id: "2",
  //       title: "Support",
  //       text: "Our support team is here to help you 24/7.",
  //       label: "Call us at +123456789",
  //       showWave: false,
  //     },
  //   ],
  // };
  //
  // return (
  //   <ContactBanner data={mockContactBannerFragment} />
  // )

  // const mockGetInTouchFragment: GetInTouchFragmentFragment = {
  //   __typename: "ComponentSectionsGetInTouchForm",
  //   id: "1",
  //   Title: {
  //     data: {
  //       attributes: {
  //         Title: "Get in Touch",
  //         HeadingLevel: "h3",
  //       },
  //     },
  //   },
  //   Text: "We would love to hear from you. Please fill out the form below to get in touch with us.",
  //   ShowWave: true,
  //   FormId: "contact-form-123",
  // };

  // return <ClientGraph />;

  return sections?.map(section => (
    // @ts-expect-error temp fix
    <Fragment key={`${slug}-${section?.__typename}-${section?.Slug}`}>
      {renderSection(section)}
    </Fragment>
  ));
}
