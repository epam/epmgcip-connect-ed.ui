import cc from "classcat";
import {
  CIRCLE_BAR_WIDTH,
  CIRCLE_TRANSFORM,
  CIRCUMFERENCE,
  TIME_BAR_RADIUS_STYLE,
  VIEW_BOX,
} from "@/features/statistics-section/progress-graph/constants.ts";
import {
  clampToPercentage,
  getGraphTheme,
} from "@/features/statistics-section/progress-graph/utils.ts";
import { Theme } from "@/__generated__/graphql.ts";
import "./progress-graph.scss";

interface TimeBarProps {
  value: number;
  className?: string;
  theme?: Theme;
}

export const ProgressGraph = ({ value, className, theme }: TimeBarProps) => {
  const resultValue = clampToPercentage(value);

  return (
    <div
      className={cc(["progress-graph", className])}
      data-value={`${resultValue}%`}
      style={getGraphTheme(theme)}
    >
      <svg
        viewBox={VIEW_BOX}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <circle
          stroke="#002F3F54"
          cx="50%"
          cy="50%"
          r={TIME_BAR_RADIUS_STYLE}
          strokeWidth={CIRCLE_BAR_WIDTH}
          fill="none"
        />
        <circle
          transform={CIRCLE_TRANSFORM}
          strokeLinecap="round"
          strokeDashoffset={CIRCUMFERENCE * (1 - resultValue / 100)}
          strokeDasharray={CIRCUMFERENCE}
          cx="50%"
          cy="50%"
          r={TIME_BAR_RADIUS_STYLE}
          strokeWidth={CIRCLE_BAR_WIDTH - 2}
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};
