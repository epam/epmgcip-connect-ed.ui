"use client";

import { useMemo, useState } from "react";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { LoadingButton } from "@/components/loading-button/loading-button.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TabList } from "@/components/tab-list/tab-list.tsx";
import { TAB_PARAM_NAME } from "@/features/categorized-news/constants.ts";
import {
  getCategorizedNewsTabsMap,
  getCategorizedNewsTheme,
} from "@/features/categorized-news/utils.ts";
import { useTabsParams } from "@/hooks/use-tabs-params.ts";
import { GET_NEWS_BY_CATEGORY } from "@/queries/get-news-by-category.ts";
import { PAGE_SIZE, START_PAGE } from "@/constants/query-variables.ts";
import {
  CategorizedNewsFragmentFragment,
  ComponentSharedTabs,
} from "@/__generated__/graphql.ts";
import { articleCategoryFragment } from "@/fragments/article-category.fragment.ts";
import "./categorized-news.scss";

export interface CategorizedNewsProps {
  data: CategorizedNewsFragmentFragment;
}

const initialTabs: ComponentSharedTabs[] = [];

const getTabData = (tab: ComponentSharedTabs) => ({
  value: tab?.id,
  label: tab?.Label,
});

// eslint-disable-next-line complexity
export const CategorizedNews = ({ data }: CategorizedNewsProps) => {
  const { locale } = useParams();
  const [page, setPage] = useState(START_PAGE + 1);

  const client = useApolloClient();
  const sectionInfo = data.Tabs?.data?.[0].attributes;

  const tabs = (sectionInfo?.Tabs as ComponentSharedTabs[]) ?? initialTabs;
  const firstTabId = tabs?.[0]?.id ?? "";
  const { tabsMap, isTabValueInList } = useMemo(() => {
    const map = getCategorizedNewsTabsMap(tabs);

    return {
      tabsMap: map,
      isTabValueInList: (tabValue: string) => !!map?.has(tabValue),
    };
  }, [tabs]);

  const [activeTab, handleChange] = useTabsParams(
    TAB_PARAM_NAME,
    firstTabId,
    isTabValueInList,
  );

  const currentTab = tabsMap?.get(activeTab);
  const currentArticles = currentTab?.Articles?.data;
  const canLoadMore = (currentArticles?.length ?? -1) % PAGE_SIZE === 0;

  const [getNews, { loading }] = useLazyQuery(GET_NEWS_BY_CATEGORY, {
    onCompleted: lazyData => {
      if (lazyData?.articles?.data?.length) {
        const activeSharedTab = tabs.find(tab => tab.id === activeTab);

        if (activeSharedTab) {
          client.writeFragment({
            id: `${activeSharedTab.__typename}:${activeSharedTab.id}`,
            fragment: articleCategoryFragment,
            data: {
              articles: {
                data: lazyData?.articles?.data,
              },
            },
          });
        }
      }
    },
  });

  const handleClick = () => {
    getNews({
      variables: {
        category: activeTab,
        page: page,
        pageSize: PAGE_SIZE,
        locale,
      },
    }).then(() => {
      setPage(prevState => prevState + 1);
    });
  };

  return (
    <SectionBase
      className="categorized-news"
      contentClassName="categorized-news-content"
      style={getCategorizedNewsTheme(sectionInfo?.TabCardTheme)}
    >
      <TabList
        theme={sectionInfo?.TabTheme}
        tabs={tabs}
        activeTab={activeTab}
        getTabData={getTabData}
        onChange={handleChange}
      />
      <TabList.Panel className="categorized-news-tab-panel">
        <ul className="categorized-news-list">
          {currentArticles?.map(tab => {
            const news = tab?.attributes;

            return (
              <NewsCard
                as="li"
                key={`${tab.id}${news?.slug}`}
                cover={news?.featuredImage?.data?.attributes?.url}
                title={news?.title}
                body={news?.excerpt}
                action={{
                  text: news?.title,
                  slug: news?.slug,
                }}
                theme={news?.theme?.data?.attributes}
              />
            );
          })}
        </ul>
        {sectionInfo?.CTA && canLoadMore && (
          <LoadingButton
            className="categorized-news-action"
            variant={sectionInfo?.CTA?.data?.attributes?.type ?? undefined}
            onClick={handleClick}
            isLoading={loading}
            theme={
              sectionInfo?.CTA?.data?.attributes?.buttonTheme?.data?.attributes
            }
          >
            {sectionInfo?.CTA?.data?.attributes?.label}
          </LoadingButton>
        )}
      </TabList.Panel>
    </SectionBase>
  );
};
