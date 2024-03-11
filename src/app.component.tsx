import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary/error-boundary.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { ImageBanner } from "@/components/image-banner/image-banner.tsx";
import { Palette } from "@/components/palette/palette.tsx";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top.tsx";
import { WaveBanner } from "@/components/wave-banner/wave-banner.tsx";
import {
  ComponentSharedImage,
  ComponentSharedSocialIcon,
  GetLayoutDataQuery,
  PageEntity,
} from "@/__generated__/graphql.ts";
import banner from "@/assets/images/banner.png";
import ceoImage from "@/assets/images/ceo.png";
import { InformationSection } from "@/features/information-section/information-section.tsx";
import { Navigation } from "@/features/navigation/navigation.tsx";
import { NewsSection } from "@/features/news-section/news-section.tsx";
import { ProjectsSection } from "@/features/projects-section/projects-section.tsx";
import { Query } from "@/features/query/query.tsx";
import { NotFound } from "@/pages/not-found/not-found.tsx";
import { Page } from "@/pages/page/page.tsx";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data.ts";
import "./app.styles.scss";

export const App = () => (
  <ErrorBoundary>
    <ScrollToTop />
    <Query<GetLayoutDataQuery> query={GET_LAYOUT_DATA}>
      {({ data }) => {
        const footer = data?.footer?.data?.attributes;
        const header = data?.header?.data?.attributes;
        const palette = data?.colorScheme?.data?.attributes;

        return (
          <>
            <Palette palette={palette ?? undefined} />
            <div className="page">
              <Navigation
                navigation={header?.navigations?.data}
                action={header?.cta ?? undefined}
                logo={header?.logo as ComponentSharedImage}
                stripe={
                  header?.stripe?.socialMedia as ComponentSharedSocialIcon[]
                }
              />
              <main className="main">
                <Routes>
                  {data?.pages?.data.map(({ id, attributes }) => {
                    const slug = attributes?.slug ?? "";
                    return (
                      <Route
                        key={slug}
                        path={slug}
                        element={<Page slug={slug} id={id ?? ""} />}
                      />
                    );
                  })}
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                    path="*"
                    element={<NotFound title="404" description="Not found" />}
                  />
                </Routes>
                <ProjectsSection
                  projects={[
                    { title: "1", url: "img" },
                    { title: "2", url: "" },
                    { title: "3", url: "" },
                    { title: "4", url: "img" },
                    { title: "5", url: "" },
                    { title: "6", url: "" },
                    { title: "7", url: "" },
                    { title: "8", url: "" },
                    { title: "9", url: "" },
                    { title: "10", url: "" },
                  ]}
                />
                <InformationSection
                  title="What we do"
                  description="To become a Connect-ed Ambassador and empower your community through digital literacy, individuals should meet a few essential requirements:"
                  action="Apply today"
                  cards={[{}, {}, {}]}
                />
                <NewsSection title="Latest news" cards={[{}, {}, {}, {}]} />
                <ImageBanner
                  source={banner}
                  action="Start course"
                  title="Digital literacy for kids and youth."
                  body="Our partners have played a pivotal role in our mission to bridge the
            digital divide and empower underserved communities. Their support,
            whether through technology donations, funding, or expertise, has
            been instrumental in providing students with access to essential
            resources. Partnerships have expanded our reach, enabling us to
            bring digital literacy to more individuals, especially those in
            remote areas or with special educational needs."
                />
                <WaveBanner
                  imageSource={ceoImage}
                  title="What is the digital divide?"
                  body="The digital divide represents the stark disparity in access to technology and the internet. This inequality hinders their educational opportunities, limiting their ability to learn, explore, and succeed in an increasingly digital world, perpetuating social and economic disparities."
                  action="Find out more"
                />
              </main>
              <Footer
                // TODO: check if shared social icon can be optional
                socialLinks={footer?.socialMedia as ComponentSharedSocialIcon[]}
                navigation={footer?.navigation?.data as PageEntity[]}
                heading={footer?.heading ?? ""}
              />
            </div>
          </>
        );
      }}
    </Query>
  </ErrorBoundary>
);
