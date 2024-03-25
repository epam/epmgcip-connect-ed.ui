import { useMemo } from "react";
import cc from "classcat";
import { ProjectCard } from "@/features/projects-section/project-card/project-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import {
  getIndexesToStretch,
  getProjectsSectionTheme,
} from "@/features/projects-section/utils.ts";
import {
  ComponentSharedColor,
  ComponentSharedGridBlock,
} from "@/__generated__/graphql.ts";
import "./projects-section.scss";

export interface ProjectsSectionProps {
  title?: string | null;
  projects?: ComponentSharedGridBlock[] | null;
  theme?: ComponentSharedColor | null;
}

export const ProjectsSection = ({
  projects,
  title,
  theme,
}: ProjectsSectionProps) => {
  const indexesToStretch = useMemo(
    () => getIndexesToStretch(projects ?? []),
    [projects],
  );

  return (
    <SectionBase
      className="projects-section"
      contentClassName="projects-section-content"
      style={getProjectsSectionTheme(theme)}
    >
      <SectionBase.Title className="projects-section-title">
        {title}
      </SectionBase.Title>
      <div className="projects-section-layout">
        {projects?.map((item, index) => (
          <ProjectCard
            key={item?.id}
            className={cc([
              "projects-section-card",
              indexesToStretch.has(index) ? "stretched-md" : undefined,
            ])}
            data={item}
            coverClassName="projects-section-card-cover"
          />
        ))}
      </div>
    </SectionBase>
  );
};
