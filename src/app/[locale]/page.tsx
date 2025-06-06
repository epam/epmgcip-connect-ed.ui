import { redirect, RedirectType } from "next/navigation";

// eslint-disable-next-line import/no-default-export
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`${locale}/home`, RedirectType.replace);
}
