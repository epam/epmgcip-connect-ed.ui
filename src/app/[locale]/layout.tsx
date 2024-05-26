import { PropsWithChildren } from "react";
import { getClient } from "@/utils/apollo-client";
import { GET_LAYOUT_DATA } from "@/queries/get-layout-data";
import { LAYOUT_PAGES_VARIABLES } from "@/constants/query-variables";
import {
  ComponentSharedImage,
  ComponentSharedSocialIcon,
  GetLayoutDataQuery,
  PageEntity,
} from "@/__generated__/graphql";
import { Footer } from "@/components/footer/footer";
import { Palette } from "@/components/palette/palette";
import { Navigation } from "@/features/navigation/navigation";
import "./layout.scss";

// eslint-disable-next-line import/no-default-export,react/function-component-definition
export default async function LocaleLayout({
  children,
}: PropsWithChildren<{
  params: { locale: string };
}>) {
  const client = getClient();
  const { data } = await client.query<GetLayoutDataQuery>({
    query: GET_LAYOUT_DATA,
    variables: LAYOUT_PAGES_VARIABLES,
  });

  const footer = data?.footer?.data?.attributes;
  const header = data?.header?.data?.attributes;
  const palette = data?.colorScheme?.data?.attributes;

  return (
    <>
      <Palette palette={palette ?? undefined} />
      <div className="page">
        <Navigation
          navigation={header?.navigations?.data}
          action={header?.cta ?? undefined}
          logo={header?.logo as ComponentSharedImage}
          stripe={header?.stripe?.socialMedia as ComponentSharedSocialIcon[]}
        />
        <main className="main-content">{children}</main>
        <Footer
          // TODO: check if shared social icon can be optional
          socialLinks={footer?.socialMedia as ComponentSharedSocialIcon[]}
          navigation={footer?.navigation?.data as PageEntity[]}
          heading={footer?.heading ?? ""}
        />
      </div>
    </>
  );
}
