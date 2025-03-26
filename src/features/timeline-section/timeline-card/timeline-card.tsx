import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getTimelineCardTheme } from "@/features/timeline-section/timeline-card/utils.ts";
import { ComponentSharedTimelineCard } from "@/__generated__/graphql.ts";
import "./timeline-card.scss";

export interface TimelineCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  data?: ComponentSharedTimelineCard;
}

// eslint-disable-next-line complexity
export const TimelineCard = ({
  as: Tag = "div",
  className,
  data,
}: TimelineCardProps) => (
  <Tag
    className={cc(["timeline-card", className])}
    style={getTimelineCardTheme(data?.Theme?.data?.attributes)}
  >
    <article>
      <Title
        level={data?.Title?.data?.attributes?.HeadingLevel}
        className="timeline-card-title"
      >
        {data?.Title?.data?.attributes?.Title}
      </Title>
      <Typography>{data?.Text}</Typography>
    </article>
    <div className="timeline-card-image-wrapper">
      <img
        className="timeline-card-image"
        alt=""
        src={data?.Image?.data?.attributes?.url ?? ""}
        role="presentation"
      />
    </div>
  </Tag>
);
