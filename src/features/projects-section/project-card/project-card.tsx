import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { ActionLink } from "@/components/action-link/action-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getProjectCardTheme } from "@/features/projects-section/project-card/utils.ts";
import { ComponentSharedGridBlock } from "@/__generated__/graphql.ts";
import "./project-card.scss";

export interface ProjectCardProps {
  className?: string;
  coverClassName?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  data: ComponentSharedGridBlock;
}

export const ProjectCard = ({
  className,
  coverClassName,
  as: Tag = "article",
  data,
}: ProjectCardProps) => {
  return (
    <Tag
      className={cc(["project-card", className])}
      style={getProjectCardTheme(data)}
    >
      <div className="project-card-info">
        <Title as="h4" className="project-card-title">
          {data?.heading}
        </Title>
        <Typography className="project-card-body">
          {data?.description}
        </Typography>
        <ActionLink
          className="project-card-action"
          to={`/${data?.linkUrl ?? ""}`}
          target={data?.linkNewTab ? "_blank" : undefined}
        >
          {data?.linkText}
        </ActionLink>
      </div>
      {data?.image?.data && (
        <div className={cc(["project-card-image-wrapper", coverClassName])}>
          <img
            className="project-card-image"
            src={data.image.data.attributes?.url}
            alt=""
          />
        </div>
      )}
    </Tag>
  );
};
