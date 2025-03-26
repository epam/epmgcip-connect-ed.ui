"use client";

import cc from "classcat";
import { DataGraph } from "@/components/data-graph/data-graph.tsx";
import { RichTextMarkdown } from "@/components/rich-text-markdown/rich-text-markdown.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ColumnColumnDynamicZone,
  TwoColumnsFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBase } from "@/components/section-base";
import "./two-columns-section.scss";

// eslint-disable-next-line complexity
const renderColumn = (item: ColumnColumnDynamicZone) => {
  switch (item.__typename) {
    // case "article": {
    //   return <ActionableArticle body={item?.body} title={item?.title} />;
    // }
    case "ComponentSectionsRichText": {
      return <RichTextMarkdown>{item?.Content}</RichTextMarkdown>;
    }
    // case "rich-text": {
    //   return <RichTextBlocks content={item?.body ?? []} />;
    // }
    case "ComponentSharedImage": {
      return (
        <img
          className="two-columns-section-image"
          src={item.Image?.data?.attributes?.url ?? ""}
          alt={
            item.AltText ?? item.Image?.data?.attributes?.alternativeText ?? ""
          }
        />
      );
    }
    case "ComponentSharedVideo": {
      return (
        <video
          controls
          className="two-columns-section-video"
          aria-label="video"
        >
          <source src={item.video?.data?.attributes?.url} />
        </video>
      );
    }
    case "ComponentSectionsChart": {
      return <DataGraph url={item.URL ?? ""} />;
    }
    default: {
      return null;
    }
  }
};

export interface TwoColumnsSectionProps {
  data: TwoColumnsFragmentFragment;
}

export const TwoColumnsSection = ({ data }: TwoColumnsSectionProps) => {
  const columns =
    data?.Column?.data?.attributes?.column?.filter(isNotNull) ?? [];
  const ratio = data?.Ratio ?? "one_one";

  return (
    <SectionBase className="two-columns-section">
      <div className="two-columns-section-content">
        <div
          className={cc([
            "two-columns-section-row",
            // ratio === "one_one" ? "two-columns-section-row-large-right" : undefined, // 1:2
            ratio === "two_one"
              ? "two-columns-section-row-large-left"
              : undefined, //2:1
          ])}
        >
          {columns.map((column, index) => {
            return (
              <div
                className="two-columns-section-column"
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${index}-${column?.__typename}`}
              >
                {renderColumn(column as ColumnColumnDynamicZone)}
              </div>
            );
          })}
        </div>
      </div>
    </SectionBase>
  );
};
