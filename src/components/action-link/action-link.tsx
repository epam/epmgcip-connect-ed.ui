import { AnchorHTMLAttributes } from "react";
import cc from "classcat";
import Link, { LinkProps } from "next/link";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import "./action-link.scss";

export type ActionLink = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

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
