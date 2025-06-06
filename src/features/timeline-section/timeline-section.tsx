import { TimelineCard } from "@/features/timeline-section/timeline-card/timeline-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TitleLevel } from "@/components/title/title.tsx";
import { getTimelineSectionTheme } from "@/features/timeline-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedTimelineCard,
  TimelineSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./timeline-section.scss";

export interface TimelineSectionProps {
  data: TimelineSectionFragmentFragment;
}

export const TimelineSection = ({ data }: TimelineSectionProps) => {
  const timelineCards = data.timelineCard?.filter(isNotNull) ?? [];

  return (
    <SectionBase
      className="timeline-section"
      contentClassName="timeline-section-content"
      style={getTimelineSectionTheme(data.Theme)}
    >
      <SectionBaseTitle
        className="timeline-section-title"
        level={data.Heading?.Level as TitleLevel}
      >
        {data.Heading?.Title?.Title}
      </SectionBaseTitle>
      <ul className="timeline-section-list">
        {timelineCards.map(item => (
          <TimelineCard
            key={item.id}
            as="li"
            data={item as ComponentSharedTimelineCard}
          />
        ))}
      </ul>
    </SectionBase>
  );
};
