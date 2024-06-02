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
  getCategorizedNewsTheme,
  getCategorizedNewsTabsMap,
} from "@/features/categorized-news/utils.ts";
import { useTabsParams } from "@/hooks/use-tabs-params.ts";
import { ARTICLE_CATEGORY_FRAGMENT } from "@/queries/article-category-fragment.ts";
import { GET_NEWS_BY_CATEGORY } from "@/queries/get-news-by-category.ts";
import { PAGE_SIZE, START_PAGE } from "@/constants/query-variables.ts";
import {
  ArticleCategoryEntity,
  ComponentSectionsColumnsWithTabs,
} from "@/__generated__/graphql.ts";
import "./categorized-news.scss";

export interface CategorizedNewsProps {
  data: ComponentSectionsColumnsWithTabs;
}

const initialTabs: ArticleCategoryEntity[] = [];

export const CategorizedNews = ({ data }: CategorizedNewsProps) => {
  const { locale } = useParams();
  const [page, setPage] = useState(START_PAGE + 1);

  const client = useApolloClient();

  const tabs = data.tabs?.data ?? initialTabs;
  const firstSlug = tabs?.[0]?.attributes?.slug ?? "";
  const { tabsMap, isTabValueInList } = useMemo(() => {
    const map = getCategorizedNewsTabsMap(tabs);

    return {
      tabsMap: map,
      isTabValueInList: (tabValue: string) => !!map?.has(tabValue),
    };
  }, [tabs]);

  const [currentTab, handleChange] = useTabsParams(
    TAB_PARAM_NAME,
    firstSlug,
    isTabValueInList,
  );

  const currentArticles = tabsMap?.get(currentTab);
  const canLoadMore = (currentArticles?.length ?? -1) % PAGE_SIZE === 0;

  const [getNews, { loading }] = useLazyQuery(GET_NEWS_BY_CATEGORY, {
    onCompleted: lazyData => {
      if (lazyData?.articles?.data?.length) {
        const activeTab = tabs.find(tab => tab.attributes?.slug === currentTab);

        if (activeTab) {
          client.writeFragment({
            id: `${activeTab.__typename}:${activeTab.id}`,
            fragment: ARTICLE_CATEGORY_FRAGMENT,
            data: {
              attributes: {
                articles: {
                  data: lazyData?.articles?.data,
                },
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
        category: currentTab,
        page: page,
        pageSize: PAGE_SIZE,
        locale,
      },
    }).then(() => {
      setPage(prevState => prevState + 1);
    });
  };

  const getTabData = (tab: ArticleCategoryEntity) => {
    const tabData = tab?.attributes;

    return {
      value: tabData?.slug,
      label: tabData?.label,
    };
  };

  return (
    <SectionBase
      className="categorized-news"
      contentClassName="categorized-news-content"
      style={getCategorizedNewsTheme()}
    >
      <TabList
        theme={data?.tabTheme}
        tabs={tabs}
        activeTab={currentTab}
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
                  // @ts-expect-error TODO:// add linkText field on BE
                  text: news?.linkText,
                  color: data?.tabCardTheme?.linkColor,
                  slug: news?.slug,
                }}
                theme={{
                  color: data.tabCardTheme?.color,
                  bgColor: data?.tabCardTheme?.bgColor,
                }}
              />
            );
          })}
        </ul>
        {data?.cta && canLoadMore && (
          <LoadingButton
            className="categorized-news-action"
            variant={data?.cta?.type ?? undefined}
            onClick={handleClick}
            isLoading={loading}
          >
            {data?.cta?.label}
          </LoadingButton>
        )}
      </TabList.Panel>
    </SectionBase>
  );
};
