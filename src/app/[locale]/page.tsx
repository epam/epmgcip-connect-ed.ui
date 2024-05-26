import { redirect, RedirectType } from "next/navigation";

// eslint-disable-next-line import/no-default-export
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  redirect(`${locale}/home`, RedirectType.replace);
}
