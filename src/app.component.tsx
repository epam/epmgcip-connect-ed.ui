import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "@/pages/not-found/not-found.tsx";
import { Page } from "@/pages/page/page.tsx";
import { Navigation } from "@/features/navigation/navigation.tsx";
import { Query } from "@/features/query/query.tsx";
import { ErrorBoundary } from "@/components/error-boundary/error-boundary.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { Palette } from "@/components/palette/palette.tsx";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top.tsx";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data.ts";
import { LAYOUT_PAGES_VARIABLES } from "@/constants/query-variables.ts";
import {
  ComponentSharedImage,
  ComponentSharedSocialIcon,
  GetLayoutDataQuery,
  PageEntity,
} from "@/__generated__/graphql.ts";
import { ExpandableSection } from "./features/expandable-section/expandable-section";
import "./app.styles.scss";

export const App = () => (
  <ErrorBoundary>
    <ScrollToTop />
    <Query<GetLayoutDataQuery>
      query={GET_LAYOUT_DATA}
      variables={LAYOUT_PAGES_VARIABLES}
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
                <ExpandableSection
                  heading="Our jobs"
                  cards={[
                    {
                      title: "Job one",
                      teaser: "Line1<br />Line2",
                      content:
                        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, ligula quis cursus consectetur, lacus diam hendrerit augue, vitae laoreet tellus dui fermentum ex. Sed ut facilisis nisi, malesuada sodales neque. Nullam lobortis sapien in sem tempor dapibus feugiat pretium nunc. Pellentesque laoreet ultricies pulvinar. Duis vitae orci rutrum justo ullamcorper pellentesque at eget nisl. Etiam at accumsan urna, quis condimentum mauris. Integer eget urna et massa feugiat tristique.<br />                      Nulla viverra congue justo, vel faucibus leo sagittis interdum. Phasellus non faucibus mi. Nulla vitae orci quam. Sed enim nibh, dapibus in ligula vel, molestie convallis ligula. Aenean non velit est. Etiam et orci malesuada, malesuada lectus sit amet, euismod ante. Aenean ante ante, feugiat ac dui sit amet, aliquet congue neque. Donec non interdum ipsum. Suspendisse at quam vel urna convallis tempus. Integer in tortor a metus egestas consectetur. Nam quis urna vitae nibh mattis bibendum et egestas velit. Nunc faucibus euismod dui in venenatis. Integer erat arcu, pharetra ac sodales quis, rhoncus id mauris.</p>",
                      action: {
                        expand: {
                          text: "Find out more",
                        },
                        collapse: {
                          text: "Collapse",
                        },
                        color: "primary",
                      },
                      theme: {
                        cardColor: "black",
                        cardBgColor: "background",
                      },
                    },
                  ]}
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
