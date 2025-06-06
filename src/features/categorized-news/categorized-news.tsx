"use client";

import { useMemo, useState } from "react";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { LoadingButton } from "@/components/loading-button/loading-button.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TabList } from "@/components/tab-list/tab-list.tsx";
import { TAB_PARAM_NAME } from "@/features/categorized-news/constants.ts";
import { ComponentSharedTab } from "@/features/categorized-news/types.ts";
import {
  getCategorizedNewsTabsMap,
  getCategorizedNewsTheme,
} from "@/features/categorized-news/utils.ts";
import { useTabsParams } from "@/hooks/use-tabs-params.ts";
import { GET_NEWS_BY_CATEGORY } from "@/queries/get-news-by-category.ts";
import { PAGE_SIZE, START_PAGE } from "@/constants/query-variables.ts";
import {
  CategorizedNewsFragmentFragment,
  ComponentSharedArticleCategory,
  TabTheme,
} from "@/__generated__/graphql.ts";
import { articleCategoryFragment } from "@/fragments/article-category.fragment.ts";
import "./categorized-news.scss";

export interface CategorizedNewsProps {
  data: CategorizedNewsFragmentFragment;
}

const initialTabs: ComponentSharedTab[] = [];

const getTabData = (tab: ComponentSharedTab) => ({
  value: tab?.documentId,
  label:
    tab?.Label ??
    (tab?.content?.[0] as ComponentSharedArticleCategory)?.label ??
    "",
});

// eslint-disable-next-line complexity
export const CategorizedNews = ({ data }: CategorizedNewsProps) => {
  const { locale } = useParams();
  const [page, setPage] = useState(START_PAGE + 1);

  const client = useApolloClient();

  const tabs = (data.Tabs as ComponentSharedTab[]) ?? initialTabs;
  const firstTabId = tabs?.[0]?.documentId ?? "";
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

  const currentTab = tabsMap?.get(activeTab) as ComponentSharedTab;
  const currentArticles = (
    currentTab?.content?.[0] as ComponentSharedArticleCategory
  )?.articles;
  const canLoadMore = (currentArticles?.length ?? -1) % PAGE_SIZE === 0;

  const [getNews, { loading }] = useLazyQuery(GET_NEWS_BY_CATEGORY, {
    onCompleted: lazyData => {
      if (lazyData?.articles?.length) {
        const activeSharedTab = tabs.find(tab => tab?.documentId === activeTab);

        if (activeSharedTab) {
          client.writeFragment({
            id: `${activeSharedTab.__typename}:${activeSharedTab.documentId}`,
            fragment: articleCategoryFragment,
            data: {
              articles: lazyData?.articles,
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
      style={getCategorizedNewsTheme()}
    >
      <TabList
        theme={data?.TabTheme as TabTheme}
        tabs={tabs}
        activeTab={activeTab}
        getTabData={getTabData}
        onChange={handleChange}
      />
      <TabList.Panel className="categorized-news-tab-panel">
        <ul className="categorized-news-list">
          {currentArticles?.map(tab => {
            const news = tab;

            return (
              <NewsCard
                as="li"
                key={`${tab?.slug}${news?.slug}`}
                cover={news?.featuredImage?.url}
                title={news?.title}
                body={news?.excerpt}
                action={{
                  text: news?.title,
                  slug: news?.slug,
                }}
                theme={news?.theme}
              />
            );
          })}
        </ul>
        {data?.CTA && canLoadMore && (
          <LoadingButton
            className="categorized-news-action"
            variant={data?.CTA?.Type ?? undefined}
            onClick={handleClick}
            isLoading={loading}
            theme={data?.CTA?.ButtonTheme}
          >
            {data?.CTA?.Label}
          </LoadingButton>
        )}
      </TabList.Panel>
    </SectionBase>
  );
};
