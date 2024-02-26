import { PropsWithChildren } from "react";
import "./embedded-section.scss";

export interface EmbeddedSectionProps {
  title: string;
}

export const EmbeddedSection = ({
  title,
  children,
}: PropsWithChildren<EmbeddedSectionProps>) => {
  return (
    <section className="embedded-section">
      <h2 className="embedded-section-title">{title}</h2>
      <div className="embedded-section-content">{children}</div>
    </section>
  );
};
