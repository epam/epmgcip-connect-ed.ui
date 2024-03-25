import { ReactNode } from "react";
import { useQuery, type OperationVariables } from "@apollo/client";
import { DocumentNode } from "graphql";
import { Spinner } from "@/components/spinner/spinner.tsx";
import "./query.scss";

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
    return <Spinner className="query-spinner" />;
  }

  if (error) {
    //TODO: Ask designer about component
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return children({ data });
};
