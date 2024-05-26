import cc from "classcat";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { Maybe } from "@/__generated__/graphql.ts";
import "./actionable-article.scss";

export interface ActionableArticleProps {
  title?: Maybe<string>;
  body?: Maybe<string>;
  action?: unknown;
  className?: string;
}

export const ActionableArticle = ({
  title,
  body,
  action,
  className,
}: ActionableArticleProps) => {
  return (
    <article className={cc(["actionable-article", className])}>
      <Title className="actionable-article-title">{title}</Title>
      <Typography className="actionable-article-body">{body}</Typography>
      {!!action && <ButtonLink href="/">Go</ButtonLink>}
    </article>
  );
};
