import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { ActionLink } from "@/components/action-link/action-link.tsx";
import projectCover from "@/assets/images/classroom.png";
import "./project-card.scss";

export interface ProjectCardProps {
  className?: string;
  coverClassName?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  theme?: string;
  data: { title: string; url: string };
}

export const ProjectCard = ({
  className,
  coverClassName,
  as: Tag = "article",
  theme = "default",
  data,
}: ProjectCardProps) => {
  return (
    <Tag className={cc(["project-card", className])} data-theme={theme}>
      <div className="project-card-info">
        <span className="project-card-title">{data?.title}</span>
        <p className="project-card-body">
          We will show how to create and edit content, exchange information
          safely, and use computers for learning purposes. We will help parents
          master Office software and understand electronic government programs.
        </p>
        <ActionLink
          className="project-card-action"
          href="/public"
          theme={theme}
        >
          Start course
        </ActionLink>
      </div>
      {data?.url && (
        <div className={cc(["project-card-image-wrapper", coverClassName])}>
          <img className="project-card-image" src={projectCover} alt="" />
        </div>
      )}
    </Tag>
  );
};
