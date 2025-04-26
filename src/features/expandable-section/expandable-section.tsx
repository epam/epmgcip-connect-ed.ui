import { SectionBase } from "@/components/section-base/section-base.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedAccordionItem,
  ExpandableSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { ExpandableCard } from "@/components/expandable-card/expandable-card";
import { SectionBaseTitle } from "@/components/section-base";
import { TitleLevel } from "@/components/title/title";
import { getExpandableSectionTheme } from "./utils";
import "./expandable-section.scss";

export interface ExpandableSectionProps {
  data: ExpandableSectionFragmentFragment;
}

// eslint-disable-next-line complexity
export const ExpandableSection = ({ data }: ExpandableSectionProps) => {
  const cards = data?.Item?.filter(isNotNull) as ComponentSharedAccordionItem[];

  const expandLink = data?.ExpandLink;
  const collapseLink = data?.CollapseLink;

  return (
    <SectionBase
      className="expandable-section"
      contentClassName="expandable-section-content"
      style={getExpandableSectionTheme()}
    >
      <SectionBaseTitle
        className="expandable-section-title"
        level={data?.heading?.Level as TitleLevel}
      >
        {data?.heading?.Title?.Title}
      </SectionBaseTitle>
      <ul className="expandable-section-list">
        {cards?.map(card => (
          <ExpandableCard
            as="li"
            key={card.id}
            data={card}
            expandLink={expandLink}
            collapseLink={collapseLink}
          />
        ))}
      </ul>
    </SectionBase>
  );
};
