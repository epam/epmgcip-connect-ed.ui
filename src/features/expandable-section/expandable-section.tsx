import { SectionBase } from "@/components/section-base/section-base.tsx";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import {
  ExpandableCard,
  ExpandableCardData,
} from "@/components/expandable-card/expandable-card";
import { getExpandableSectionTheme } from "./utils";
import "./expandable-section.scss";

export interface ExpandableSectionProps {
  heading?: string;
  theme?: ComponentSharedColor;
  cards?: ExpandableCardData[] | null;
}

export const ExpandableSection = ({
  heading,
  theme,
  cards,
}: ExpandableSectionProps) => {
  return (
    <SectionBase
      className="expandable-section"
      contentClassName="expandable-section-content"
      style={getExpandableSectionTheme(theme)}
    >
      <SectionBase.Title className="expandable-section-title">
        {heading}
      </SectionBase.Title>
      <ul className="timeline-section-list">
        {cards?.map(card => (
          // TODO: replace index with id or title

          <ExpandableCard as="li" key={card.id} data={card} />
        ))}
      </ul>
    </SectionBase>
  );
};
