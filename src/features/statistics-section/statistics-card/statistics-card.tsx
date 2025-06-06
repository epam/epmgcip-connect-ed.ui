import cc from "classcat";
import { ProgressGraph } from "@/features/statistics-section/progress-graph/progress-graph.tsx";
import { Theme } from "@/__generated__/graphql.ts";
import "./statistics-card.scss";

type StatisticsCardProps = {
  title?: string;
  description?: string;
  value: number;
  className?: string;
  theme?: Theme;
};

export const StatisticsCard = ({
  title,
  description,
  value,
  theme,
  className,
}: StatisticsCardProps) => {
  return (
    <div className={cc(["statistics-card", className])}>
      <div className="statistics-card-info">
        <p className="statistics-card-title">{title}</p>
        <p className="statistics-card-description">{description}</p>
      </div>
      <div className="statistics-card-graph">
        <ProgressGraph value={value} theme={theme} />
      </div>
    </div>
  );
};
