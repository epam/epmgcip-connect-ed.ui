import { AnchorHTMLAttributes } from "react";
import cc from "classcat";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import "./action-link.scss";

export interface ActionLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: string;
}

export const ActionLink = ({
  className,
  children,
  theme = "default",
  ...delegatedProps
}: ActionLink) => (
  <a
    {...delegatedProps}
    className={cc(["action-link", className])}
    data-theme={theme}
  >
    <span>{children}</span>
    <ChevronRight width="24" height="24" />
  </a>
);
