import { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { LoadingButton } from "@/components/loading-button/loading-button.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TAB_PARAM_NAME } from "@/features/categorized-news/constants.ts";
import {
  getCategorizedNewsTabsTheme,
  getCategorizedNewsTheme,
  getTabsMap,
} from "@/features/categorized-news/utils.ts";
import { client } from "@/utils/apollo-client.ts";
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

export const CategorizedNews = ({ data }: CategorizedNewsProps) => {
  const [page, setPage] = useState(START_PAGE + 1);
  const [params, setParams] = useSearchParams();

  const tabs = data.tabs?.data;
  const firstSlug = tabs?.[0]?.attributes?.slug ?? "";
  const tabsMap = useMemo(() => getTabsMap(tabs), [tabs]);
  const tabValue = params.get(TAB_PARAM_NAME) ?? "";
  const shouldChangeTab = !tabValue || (tabValue && !tabsMap?.has(tabValue));
  const currentTab = shouldChangeTab ? firstSlug : tabValue;
  const currentArticles = tabsMap?.get(currentTab);
  const canLoadMore = (currentArticles?.length ?? -1) % PAGE_SIZE === 0;

  const [getNews, { loading }] = useLazyQuery(GET_NEWS_BY_CATEGORY, {
    onCompleted: lazyData => {
      if (lazyData?.articles?.data?.length) {
        const tabsData: ArticleCategoryEntity[] = tabs ?? [];

        const activeTab = tabsData.find(
          tab => tab.attributes?.slug === currentTab,
        );

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

  useEffect(() => {
    if (shouldChangeTab) {
      setParams(
        previousParams => {
          const newParams = new URLSearchParams(previousParams);
          newParams.set(TAB_PARAM_NAME, currentTab);
          return newParams;
        },
        { replace: true },
      );
    }
  }, [shouldChangeTab, currentTab, setParams]);

  const handleClick = () => {
    getNews({
      variables: {
        category: currentTab,
        page: page,
        pageSize: PAGE_SIZE,
      },
    }).then(() => {
      setPage(prevState => prevState + 1);
    });
  };

  const handleChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    setParams(
      previousParams => {
        const newParams = new URLSearchParams(previousParams);
        newParams.set(TAB_PARAM_NAME, target.value);
        return newParams;
      },
      { replace: true },
    );
  };

  return (
    <SectionBase
      className="categorized-news"
      contentClassName="categorized-news-content"
      style={getCategorizedNewsTheme()}
    >
      <div
        role="tablist"
        className="categorized-news-tabs"
        style={getCategorizedNewsTabsTheme(data?.tabTheme)}
      >
        {data.tabs?.data.map(tab => {
          const tabData = tab.attributes;

          return (
            <button
              key={tabData?.slug}
              role="tab"
              type="button"
              className="categorized-news-tab"
              aria-selected={currentTab === tabData?.slug}
              value={tabData?.slug}
              onClick={handleChange}
            >
              {tabData?.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="categorized-news-tab-panel">
        <ul className="categorized-news-list">
          {currentArticles?.map(tab => {
            const news = tab?.attributes;

            return (
              <NewsCard
                as="li"
                key={tab.id}
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
      </div>
    </SectionBase>
  );
};
