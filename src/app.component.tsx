import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "@/pages/not-found/not-found.tsx";
import { Page } from "@/pages/page/page.tsx";
import { Navigation } from "@/features/navigation/navigation.tsx";
import { Query } from "@/features/query/query.tsx";
import { TimelineSection } from "@/features/timeline-section/timeline-section.tsx";
import { ErrorBoundary } from "@/components/error-boundary/error-boundary.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { Palette } from "@/components/palette/palette.tsx";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top.tsx";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data.ts";
import {
  ComponentSharedImage,
  ComponentSharedSocialIcon,
  GetLayoutDataQuery,
  PageEntity,
} from "@/__generated__/graphql.ts";
import "./app.styles.scss";

export const App = () => (
  <ErrorBoundary>
    <ScrollToTop />
    <Query<GetLayoutDataQuery>
      query={GET_LAYOUT_DATA}
      variables={{ limit: 20 }}
    >
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
              <main className="main-content">
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
    <TimelineSection
      title="Timeline"
      cards={[
        {
          title: "2023",
          description:
            "Connect-ed plays a crucial role in leveling the educational playing field by providing underprivileged students with donated electronic equipment, such as laptops. This support enables students to access essential educational resources, facilitating their learning and empowering them for a brighter future.",
        },
        {
          title: "2023",
          description:
            "Connect-ed plays a crucial role in leveling the educational playing field by providing underprivileged students with donated electronic equipment, such as laptops. This support enables students to access essential educational resources, facilitating their learning and empowering them for a brighter future.",
        },
      ]}
    />
  </ErrorBoundary>
);
