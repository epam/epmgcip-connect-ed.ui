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
import qrCode from "@/assets/images/qr-code.png";
import { SectionBaseTitle } from "@/components/section-base";
import "./ways-to-donate.scss";

const tabsMock = [
  {
    attributes: {
      label: "For Kazakhstanis",
      slug: "kazakh",
      data: {
        attributes: {
          title: "How your donation helps",
          body:
            "At the moment, we need funds to purchase equipment and administrative costs.\n" +
            "\n" +
            "You can make a one-time or monthly donation, the collected funds through crowdfunding will be used exceptionally to buy equipment for children. \n" +
            "\n" +
            "Together we can provide the children who need help the most with the gadgets and knowledge to be successful now and in the future!\n" +
            "\n" +
            "If you want to support us in a different format, please contact the Founder of the Organisation – Gulnaz (Ms.) by email: kordanova.gulnaz@gmail.com",
          codeUrl: qrCode,
        },
      },
    },
  },
  {
    attributes: {
      label: "Kaspi and Halyk",
      slug: "kapsi-and-halyk",
      data: {
        attributes: {
          title: "How your donation helps",
          body:
            "At the moment, we need funds to purchase equipment and administrative costs.\n" +
            "\n" +
            "You can make a one-time or monthly donation, the collected funds through crowdfunding will be used exceptionally to buy equipment for children. \n" +
            "\n" +
            "Together we can provide the children who need help the most with the gadgets and knowledge to be successful now and in the future!\n" +
            "\n" +
            "If you want to support us in a different format, please contact the Founder of the Organisation – Gulnaz (Ms.) by email: kordanova.gulnaz@gmail.com",
        },
      },
    },
  },
  {
    attributes: {
      label: "Everyone else",
      slug: "everyone-else",
    },
  },
];

export interface WaysToDonateProps {
  tabs?: typeof tabsMock; // TODO: change type after integration
}

export const WaysToDonate = ({ tabs = tabsMock }: WaysToDonateProps) => {
  const { tabsMap, isTabValueInList } = useMemo(() => {
    const map = getWaysToDonateTabsMap(tabs);

    return {
      tabsMap: map,
      isTabValueInList: (tabValue: string) => !!map?.has(tabValue),
    };
  }, [tabs]);
  const firstSlug = tabs?.[0]?.attributes.slug ?? "";

  const [currentTab, handleChange] = useTabsParams(
    DONATE_TAB_PARAM,
    firstSlug,
    isTabValueInList,
  );
  const currentDonateMechanism = tabsMap?.get(currentTab);

  // @ts-expect-error // TODO: add type during integration
  const getTabData = tab => {
    const tabData = tab?.attributes;

    return {
      value: tabData.slug,
      label: tabData.label,
    };
  };

  return (
    <SectionBase
      className="ways-to-donate"
      contentClassName="ways-to-donate-content"
      style={getWaysToDonateTheme()}
    >
      <SectionBaseTitle>Ways to donate</SectionBaseTitle>
      <TabList
        tabs={tabs}
        theme={{}} // TODO: add when integration is ready
        activeTab={currentTab}
        className="ways-to-donate-tabs"
        getTabData={getTabData}
        onChange={handleChange}
      />
      <TabList.Panel className="ways-to-donate-panel">
        <div className="ways-to-donate-info">
          <Title>{currentDonateMechanism?.title}</Title>
          <Typography>{currentDonateMechanism?.body}</Typography>
        </div>
        <div className="ways-to-donate-links">
          {currentDonateMechanism?.codeUrl && (
            <div className="ways-to-donate-image-wrapper">
              {/* @ts-expect-error will be fixed after the integration */}
              <img src={qrCode} width="200" height="200" alt="" />
            </div>
          )}
          <ButtonLink href="/" target="_blank">
            Donate now
          </ButtonLink>
        </div>
      </TabList.Panel>
    </SectionBase>
  );
};
