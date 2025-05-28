export const hasSlug = (
  page: {
    __typename?: "Page";
    documentId: string;
    Slug?: string | null;
  } | null,
): page is {
  __typename?: "Page";
  documentId: string;
  Slug: string;
} => {
  return !!page && typeof page.Slug === "string" && page.Slug !== "";
};
