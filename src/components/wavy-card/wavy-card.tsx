import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import cc from "classcat";
import { getWavyCardStyle } from "@/components/wavy-card/utils.ts";
import "./wavy-card.scss";

export interface WavyCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  theme?: string;
}

export const WavyCard = ({
  children,
  className,
  as: Tag = "div",
  theme,
}: PropsWithChildren<WavyCardProps>) => (
  <Tag className={cc(["wavy-card", className])} style={getWavyCardStyle(theme)}>
    <div className="wavy-card-content">{children}</div>
  </Tag>
);
