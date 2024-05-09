import { ElementType, HTMLAttributes, useState } from "react";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getExpandableCardTheme } from "@/components/expandable-card/utils.ts";
import { Maybe } from "@/__generated__/graphql.ts";
import "./expandable-card.scss";

export type ExpandableCardData = {
  id?: Maybe<string>;
  title?: Maybe<string>;
  teaser?: Maybe<string>;
  content?: Maybe<string>;
  theme?: {
    cardColor?: Maybe<string>;
    cardBgColor?: Maybe<string>;
  };
  action: {
    expand?: {
      text?: Maybe<string>;
    };
    collapse: {
      text?: Maybe<string>;
    };
    color?: Maybe<string>;
  };
};

export interface DescriptionCardProps {
  data?: ExpandableCardData;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
}

export const ExpandableCard = ({
  as: Tag = "article",
  data,
}: DescriptionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAction = data?.action?.expand?.text && data?.action?.collapse?.text;

  const handleClick = hasAction
    ? () => {
        setIsExpanded(previous => !previous);
      }
    : undefined;

  return (
    <Tag
      className="expandable-card"
      style={getExpandableCardTheme(data?.theme, data?.action)}
    >
      <div className="expandable-card-content">
        <Title as="h4" className="expandable-card-title">
          {data?.title}
        </Title>
        <Typography className="expandable-card-body">
          {data?.teaser}
          {isExpanded && data?.content}
        </Typography>
        {hasAction && (
          <button onClick={handleClick} className="expandable-card-action">
            {isExpanded
              ? data?.action?.collapse?.text
              : data?.action?.expand?.text}
          </button>
        )}
      </div>
    </Tag>
  );
};
