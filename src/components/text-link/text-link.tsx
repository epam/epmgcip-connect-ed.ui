import cc from "classcat";
import { Link, type LinkProps } from "react-router-dom";

export interface TextLink extends LinkProps {}

export const TextLink = ({
  className,
  children,
  ...delegatedProps
}: TextLink) => (
  <Link {...delegatedProps} className={cc(["text-link", className])}>
    {children}
  </Link>
);
