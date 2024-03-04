import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary/error-boundary.tsx";
import { Footer } from "@/components/footer/footer.tsx";
import { Navigation } from "@/components/navigation/navigation.tsx";
import {
  ComponentSharedSocialIcon,
  GetLayoutDataQuery,
} from "@/__generated__/graphql.ts";
import { Query } from "@/feature/query/query.tsx";
import { NotFound } from "@/pages/not-found/not-found.tsx";
import { Page } from "@/pages/page/page.tsx";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data.ts";
import "./app.styles.scss";

export const App = () => (
  <ErrorBoundary>
    <Query<GetLayoutDataQuery> query={GET_LAYOUT_DATA}>
      {({ data }) => (
        <div className="page">
          <Navigation />
          <header style={{ display: "flex", gap: 24 }}>
            {data?.pages?.data.map(({ attributes }) => {
              const slug = attributes?.slug ?? "";
              return (
                <Link key={slug} to={`/${slug}`}>
                  {slug}
                </Link>
              );
            })}
          </header>
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
          </main>
          <Footer
            // TODO: check if shared social icon can be optional
            socialLinks={
              data?.footer?.data?.attributes
                ?.socialMedia as ComponentSharedSocialIcon[]
            }
          />
        </div>
      )}
    </Query>
  </ErrorBoundary>
);
