import { Query } from "@/feature/query/query";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data.ts";

export interface PageProps {
  slug: string;
}

export const Page = ({ slug }: PageProps) => (
  //TODO: here should be passed query for particular page
  <Query slug={slug} query={GET_LAYOUT_DATA}>
    {({ data }) => (
      <>
        {slug}
        {JSON.stringify(data)}
      </>
    )}
  </Query>
);
