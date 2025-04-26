import { useMemo } from "react";
import cc from "classcat";
import { ProjectCard } from "@/features/projects-section/project-card/project-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import {
  getIndexesToStretch,
  getProjectsSectionTheme,
} from "@/features/projects-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedGridBlock,
  ProjectsSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./projects-section.scss";

export interface ProjectsSectionProps {
  data: ProjectsSectionFragmentFragment;
}

const initialProjects: ComponentSharedGridBlock[] = [];

export const ProjectsSection = ({
  data: { Block: projects, Theme: theme, blockHeading },
}: ProjectsSectionProps) => {
  const projectsData = (projects?.filter(isNotNull) ??
    initialProjects) as ComponentSharedGridBlock[];

  const indexesToStretch = useMemo(
    () => getIndexesToStretch(projectsData ?? []),
    [projectsData],
  );

  return (
    <SectionBase
      className="projects-section"
      contentClassName="projects-section-content"
      style={getProjectsSectionTheme(theme)}
    >
      <SectionBaseTitle className="projects-section-title">
        {blockHeading}
      </SectionBaseTitle>
      <div className="projects-section-layout">
        {projectsData.map((item, index) => (
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
