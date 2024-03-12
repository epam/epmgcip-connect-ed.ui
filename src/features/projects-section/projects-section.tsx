import { useMemo } from "react";
import cc from "classcat";
import { ProjectCard } from "@/features/projects-section/project-card/project-card.tsx";
import { getIndexesToStretch } from "@/features/projects-section/utils.ts";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import "./projects-section.scss";

export interface ProjectsSectionProps {
  projects: { title: string; url: string }[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const indexesToStretch = useMemo(
    () => getIndexesToStretch(projects),
    [projects],
  );

  // TODO: remove after integration
  const getCardTheme = (value: number) => {
    if (value > 0 && value <= 0.25) {
      return undefined;
    }

    if (value > 0.25 && value <= 0.5) {
      return "primary";
    }

    if (value > 0.5 && value <= 0.75) {
      return "secondary";
    }

    return "tertiary";
  };

  return (
    <SectionBase className="projects-section">
      <SectionBase.Title className="projects-section-title">
        Our projects
      </SectionBase.Title>
      <div className="projects-section-content">
        {projects.map((item, index) => (
          <ProjectCard
            key={item.title}
            className={cc([
              "projects-section-card",
              indexesToStretch.has(index) ? "stretched-md" : undefined,
            ])}
            data={item}
            theme={getCardTheme(Math.random())}
            coverClassName="projects-section-card-cover"
          />
        ))}
      </div>
    </SectionBase>
  );
};
