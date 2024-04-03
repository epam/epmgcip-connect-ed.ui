import { ElementType, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getNewsCardTheme } from "@/components/news-card/utils.ts";
import { Maybe } from "@/__generated__/graphql.ts";
import "./news-card.scss";

export interface NewsCardProps {
  cover?: Maybe<string>;
  title?: Maybe<string>;
  body?: Maybe<string>;
  action: {
    text?: Maybe<string>;
    slug?: Maybe<string>;
    color?: Maybe<string>;
  };
  theme?: {
    color?: Maybe<string>;
    bgColor?: Maybe<string>;
  };
  as?: ElementType<HTMLAttributes<HTMLElement>>;
}

export const NewsCard = ({
  cover,
  title,
  body,
  action,
  theme,
  as: Tag = "article",
}: NewsCardProps) => (
  <Tag className="news-card" style={getNewsCardTheme(theme, action)}>
    <div className="news-card-image-wrapper">
      <img
        className="news-card-image"
        role="presentation"
        alt=""
        src={cover ?? undefined}
      />
    </div>
    <div className="news-card-content">
      <Title as="h4" className="news-card-title">
        {title}
      </Title>
      <Typography className="news-card-body">{body}</Typography>
      {action.text && (
        <Link to={`/${action.slug ?? ""}`} className="news-card-action">
          {action.text}
        </Link>
      )}
    </div>
  </Tag>
);
