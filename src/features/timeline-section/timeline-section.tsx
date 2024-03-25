import { TimelineCard } from "@/features/timeline-section/timeline-card/timeline-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { getTimelineSectionTheme } from "@/features/timeline-section/utils.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import "./timeline-section.scss";

export interface TimelineSectionProps {
  title?: string;
  theme?: ComponentSharedColor;
  cards?: object[] | null;
}

export const TimelineSection = ({
  title,
  theme,
  cards,
}: TimelineSectionProps) => {
  return (
    <SectionBase
      className="timeline-section"
      contentClassName="timeline-section-content"
      style={getTimelineSectionTheme(theme)}
    >
      <SectionBase.Title className="timeline-section-title">
        {title}
      </SectionBase.Title>
      <ul className="timeline-section-list">
        {cards?.map((item, index) => (
          // TODO: replace index with id or title
          // eslint-disable-next-line react/no-array-index-key
          <TimelineCard key={index} as="li" data={item} />
        ))}
      </ul>
    </SectionBase>
  );
};
