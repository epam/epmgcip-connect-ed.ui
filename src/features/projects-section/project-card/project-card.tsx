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

// eslint-disable-next-line complexity
export const ProjectCard = ({
  className,
  coverClassName,
  as: Tag = "article",
  data,
}: ProjectCardProps) => {
  return (
    <Tag
      className={cc(["project-card", className])}
      style={getProjectCardTheme(data.Theme)}
    >
      <div className="project-card-info">
        {data?.Title && (
          <Title
            level={data?.Title?.HeadingLevel}
            className="project-card-title"
          >
            {data?.Title?.Title}
          </Title>
        )}
        <Typography className="project-card-body">{data?.Text}</Typography>
        {data?.URL && (
          <ActionLink
            className="project-card-action"
            href={`/${data?.URL ?? ""}`}
            target={data?.Open ? "_blank" : undefined}
          >
            {data?.Label}
          </ActionLink>
        )}
      </div>
      {data?.Image && (
        <div className={cc(["project-card-image-wrapper", coverClassName])}>
          <img className="project-card-image" src={data.Image.url} alt="" />
        </div>
      )}
    </Tag>
  );
};
