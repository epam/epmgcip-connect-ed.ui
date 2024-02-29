import { ElementType, HTMLAttributes } from "react";
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
      <span className="news-card-title">{title}</span>
      <p className="news-card-body">{body}</p>
      <a href="/" className="news-card-action">
        {action}
      </a>
    </div>
  </Tag>
);
