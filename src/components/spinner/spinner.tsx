import { HTMLAttributes } from "react";
import cc from "classcat";
import "./spinner.scss";

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {}

export const Spinner = ({ className, ...delegatedProps }: SpinnerProps) => (
  <div {...delegatedProps} className={cc(["spinner", className])}>
    <svg
      className="spinner-content"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
    >
      <circle
        cx="12"
        cy="12"
        fill="none"
        stroke="currentColor"
        r="10.5"
        strokeWidth="3"
        strokeDasharray="50"
      />
    </svg>
  </div>
);
