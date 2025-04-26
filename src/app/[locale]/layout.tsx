import { PropsWithChildren } from "react";
import { getClient } from "@/utils/apollo-client";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data";
import { LAYOUT_PAGES_VARIABLES } from "@/constants/query-variables";
import {
  ComponentSharedImage,
  GetLayoutDataQuery,
} from "@/__generated__/graphql";
import { Footer } from "@/components/footer/footer";
import { Palette } from "@/components/palette/palette";
import { HtmlLang } from "@/features/html-lang/html-lang";
import { Navigation } from "@/features/navigation/navigation";
import "./layout.scss";

// eslint-disable-next-line import/no-default-export,react/function-component-definition,complexity
export default async function LocaleLayout({
  params,
  children,
}: PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const client = getClient();

  const { data } = await client.query<GetLayoutDataQuery>({
    query: GET_LAYOUT_DATA,
    variables: { ...LAYOUT_PAGES_VARIABLES, locale },
  });

  const footer = data?.footer;
  const header = data?.header;
  const palette = data?.colorScheme;

  return (
    <>
      <HtmlLang lang={locale} />
      <Palette palette={palette ?? undefined} />
      <div className="page">
        <Navigation
          navigation={header?.navigations}
          action={header?.cta ?? undefined}
          logo={header?.logo as ComponentSharedImage}
          stripe={header?.stripe?.SocialMedia ?? undefined}
        />
        <main className="main-content">{children}</main>
        <Footer
          socialLinks={footer?.socialMedias.filter(isNotNull)}
          navigation={footer?.navigation.filter(isNotNull)}
          heading={footer?.heading ?? ""}
          tradeMark={footer?.tradeMark ?? ""}
          rights={footer?.rights ?? ""}
        />
      </div>
    </>
  );
}
