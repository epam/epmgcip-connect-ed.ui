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
  return page !== null && typeof page.Slug === "string";
};
