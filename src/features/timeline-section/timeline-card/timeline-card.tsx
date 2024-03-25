import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getTimelineCardTheme } from "@/features/timeline-section/timeline-card/utils.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import "./timeline-card.scss";

export interface TimelineCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  data?: {
    title?: string;
    description?: string;
    url?: string;
    bgColor?: string;
    color?: string;
  };
}

export const TimelineCard = ({
  as: Tag = "div",
  className,
  data,
}: TimelineCardProps) => (
  <Tag
    className={cc(["timeline-card", className])}
    style={getTimelineCardTheme(data as ComponentSharedColor)}
  >
    <article>
      <Title className="timeline-card-title">{data?.title}</Title>
      <Typography>{data?.description}</Typography>
    </article>
    <div className="timeline-card-image-wrapper">
      <img
        className="timeline-card-image"
        alt=""
        src={data?.url}
        role="presentation"
      />
    </div>
  </Tag>
);
