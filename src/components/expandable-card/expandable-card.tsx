"use client";

import { ElementType, HTMLAttributes, useState } from "react";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import {
  ComponentSharedAccordionItem,
  Link,
  Maybe,
} from "@/__generated__/graphql.ts";
import "./expandable-card.scss";

export interface DescriptionCardProps {
  data?: ComponentSharedAccordionItem;
  collapseLink?: Maybe<Link>;
  expandLink?: Maybe<Link>;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
}

// eslint-disable-next-line complexity
export const ExpandableCard = ({
  as: Tag = "article",
  collapseLink,
  expandLink,
  data,
}: DescriptionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAction = collapseLink?.title && expandLink?.title;
  const buttonLink = data?.Button;

  const handleClick = hasAction
    ? () => {
        setIsExpanded(previous => !previous);
      }
    : undefined;

  return (
    <Tag
      className="expandable-card"
      // style={getExpandableCardTheme(
      //   data?.theme,
      //   collapseLink?.theme,
      //   expandLink?.theme,
      // )}
    >
      <div className="expandable-card-content">
        <Title level="h4" className="expandable-card-title">
          {data?.Title}
        </Title>
        <Typography className="expandable-card-body">
          {data?.ShortDescription}
          {isExpanded && (
            <>
              {data?.LongDescription}
              {buttonLink && (
                <ButtonLink
                  href={buttonLink?.url ?? ""}
                  variant={buttonLink?.type ?? undefined}
                  theme={buttonLink?.buttonTheme}
                >
                  {buttonLink?.label}
                </ButtonLink>
              )}
            </>
          )}
        </Typography>
        {hasAction && (
          <button onClick={handleClick} className="expandable-card-action">
            {isExpanded ? collapseLink?.title : expandLink?.title}
          </button>
        )}
      </div>
    </Tag>
  );
};
