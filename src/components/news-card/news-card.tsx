import { ElementType, HTMLAttributes } from "react";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./news-card.scss";

export type NewsCardTheme = "primary" | "secondary";

export interface NewsCardProps {
  cover: string;
  title: string;
  body: string;
  action: string;
  theme?: NewsCardTheme;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
}

export const NewsCard = ({
  cover,
  title,
  body,
  action,
  theme = "primary",
  as: Tag = "article",
}: NewsCardProps) => (
  <Tag className="news-card" data-theme={theme}>
    <div className="news-card-image-wrapper">
      <img className="news-card-image" role="presentation" alt="" src={cover} />
    </div>
    <div className="news-card-content">
      <Title as="h4" className="news-card-title">
        {title}
      </Title>
      <Typography className="news-card-body">{body}</Typography>
      <a href="/" className="news-card-action">
        {action}
      </a>
    </div>
  </Tag>
);
