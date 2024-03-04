import { ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import type { OperationVariables } from "@apollo/client";

interface QueryProps<T> {
  children: (data: { data?: T | undefined }) => ReactNode;
  query: DocumentNode;
  variables?: OperationVariables;
}

export const Query = <T,>({ children, query, variables }: QueryProps<T>) => {
  const { data, loading, error } = useQuery<T>(query, {
    variables,
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
