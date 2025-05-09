import { useMemo } from "react";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TabList } from "@/components/tab-list/tab-list.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { DONATE_TAB_PARAM } from "@/features/ways-to-donate/constants.ts";
import {
  getWaysToDonateTabsMap,
  getWaysToDonateTheme,
} from "@/features/ways-to-donate/utils.ts";
import { useTabsParams } from "@/hooks/use-tabs-params.ts";
import {
  WaysToDonateFragmentFragment,
  ComponentSharedCard,
  TabTheme,
  Theme,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./ways-to-donate.scss";

export interface WaysToDonateProps {
  data?: WaysToDonateFragmentFragment;
}

// @ts-expect-error // TODO: add type during integration
const getTabData = tab => {
  const tabData = tab?.attributes;

  return {
    value: tabData.slug,
    label: tabData.label,
  };
};

const initialTabs: WaysToDonateFragmentFragment["Tabs"] = [];

// eslint-disable-next-line complexity
export const WaysToDonate = ({ data }: WaysToDonateProps) => {
  const tabs = data?.Tabs ?? initialTabs;

  const { tabsMap, isTabValueInList } = useMemo(() => {
    const map = getWaysToDonateTabsMap(tabs);

    return {
      tabsMap: map,
      isTabValueInList: (tabValue: string) => !!map?.has(tabValue),
    };
  }, [tabs]);

  const firstSlug = tabs?.[0]?.documentId ?? "";

  const [currentTab, handleChange] = useTabsParams(
    DONATE_TAB_PARAM,
    firstSlug,
    isTabValueInList,
  );
  const currentDonateMechanism = tabsMap?.get(currentTab);

  const content = currentDonateMechanism?.content?.[0] as ComponentSharedCard;

  return (
    <SectionBase
      className="ways-to-donate"
      contentClassName="ways-to-donate-content"
      style={getWaysToDonateTheme(data?.Theme as Theme)}
    >
      <SectionBaseTitle
        level={data?.Title?.Level}
        align={data?.Title?.Alignment}
      >
        {data?.Title?.Title?.Title}
      </SectionBaseTitle>
      <TabList
        tabs={tabs}
        theme={data?.TabTheme as TabTheme}
        activeTab={currentTab}
        className="ways-to-donate-tabs"
        getTabData={getTabData}
        onChange={handleChange}
      />
      <TabList.Panel className="ways-to-donate-panel">
        <div className="ways-to-donate-info">
          <Title>{content?.Title}</Title>
          <Typography>{content?.Text}</Typography>
        </div>
        <div className="ways-to-donate-links">
          {content?.qrCodeLink && (
            <div className="ways-to-donate-image-wrapper">
              <img
                src={content.qrCodeLink ?? ""}
                width="200"
                height="200"
                alt=""
              />
            </div>
          )}
          {content?.Link && (
            <ButtonLink
              href={content.Link?.url ?? ""}
              target="_blank"
              theme={content.Link.buttonTheme}
              className="ways-to-donate-link"
            >
              {content?.Link.label}
            </ButtonLink>
          )}
        </div>
      </TabList.Panel>
    </SectionBase>
  );
};
