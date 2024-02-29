import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import cc from "classcat";
import "./wavy-card.scss";

export type WavyCardTheme = "primary" | "secondary" | "tertiary";

export interface WavyCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  theme?: WavyCardTheme;
}

export const WavyCard = ({
  children,
  className,
  as: Tag = "div",
  theme = "primary",
}: PropsWithChildren<WavyCardProps>) => (
  <Tag className={cc(["wavy-card", className])} data-theme={theme}>
    <div className="wavy-card-content">{children}</div>
  </Tag>
);
