import { GetPageDataQuery } from "@/__generated__/graphql.ts";
import { Query } from "@/feature/query/query";
import { GET_PAGE_DATA } from "@/queries/get-page.ts";

export interface PageProps {
  slug: string;
  id: string;
}

export const Page = ({ slug, id }: PageProps) => (
  <Query<GetPageDataQuery> variables={{ id }} query={GET_PAGE_DATA}>
    {({ data }) => (
      <>
        {slug}
        {JSON.stringify(data)}
      </>
    )}
  </Query>
);
