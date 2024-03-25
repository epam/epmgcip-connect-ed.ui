import { HTMLAttributes } from "react";
import cc from "classcat";
import "./spinner.scss";

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {}

export const Spinner = ({ className, ...delegatedProps }: SpinnerProps) => (
  <div {...delegatedProps} className={cc(["spinner", className])}>
    <div className="spinner-content" />
  </div>
);
