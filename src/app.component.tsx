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
import { WaveBanner } from "./features/wave-banner/wave-banner";
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
    <WaveBanner // TODO: Remove if BE will available
      title="Any title"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed volutpat eros, in lobortis leo. Integer aliquet felis magna, vitae viverra mi imperdiet laoreet. Nunc aliquet molestie risus, a ultrices turpis dictum quis. Suspendisse commodo porta nisi, non molestie orci vulputate vitae. Duis feugiat massa nec lacus posuere, vitae cursus est gravida. Proin non feugiat augue, gravida porttitor nisi. Curabitur molestie magna ac urna ultricies, sit amet aliquam nunc malesuada. Quisque tincidunt risus orci, ac condimentum tortor laoreet ut. Sed at odio quam. Ut porta nec massa eget vehicula."
      imageSource="https://storage.googleapis.com/cdkz-admin-staging-storage-bucket/oldman_f542f8cc06/oldman_f542f8cc06.jpg"
      contentMode="ltr"
    />
  </ErrorBoundary>
);
