import { IframeHTMLAttributes } from "react";
import cc from "classcat";
import "./iframe.scss";

export interface IframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {}

export const Iframe = ({ className, ...delegatedProps }: IframeProps) => (
  <iframe className={cc(["iframe", className])} {...delegatedProps} />
);
