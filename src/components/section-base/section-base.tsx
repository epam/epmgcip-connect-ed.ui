import { HTMLAttributes, ReactNode } from "react";
import cc from "classcat";
import "./section-base.scss";

export interface SectionBaseProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  contentClassName?: string;
  hasWave?: boolean;
}

export const SectionBase = ({
  children,
  className,
  hasWave = false,
  contentClassName,
  ...delegatedProps
}: SectionBaseProps) => (
  <section
    {...delegatedProps}
    className={cc(["section-base", hasWave && "section-base-wave", className])}
  >
    <div className={cc(["section-base-content", contentClassName])}>
      {children}
    </div>
  </section>
);
