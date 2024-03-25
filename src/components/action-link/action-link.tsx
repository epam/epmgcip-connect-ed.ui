import cc from "classcat";
import { Link, type LinkProps } from "react-router-dom";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import "./action-link.scss";

export interface ActionLink extends LinkProps {}

export const ActionLink = ({
  className,
  children,
  ...delegatedProps
}: ActionLink) => (
  <Link {...delegatedProps} className={cc(["action-link", className])}>
    <span>{children}</span>
    <ChevronRight width="24" height="24" />
  </Link>
);
