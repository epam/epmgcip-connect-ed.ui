import { ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";

interface QueryProps<T> {
  children: (data: { data?: T | undefined }) => ReactNode;
  query: DocumentNode;
  slug: string;
}

export const Query = <T,>({ children, query, slug }: QueryProps<T>) => {
  const { data, loading, error } = useQuery<T>(query, {
    variables: { slug },
  });

  if (loading) {
    //TODO: Ask designer about component
    return <p>Loading...</p>;
  }

  if (error) {
    //TODO: Ask designer about component
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return children({ data });
};
