import { PropsWithChildren } from "react";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import "./embedded-section.scss";

export interface EmbeddedSectionProps {
  title: string;
}

export const EmbeddedSection = ({
  title,
  children,
}: PropsWithChildren<EmbeddedSectionProps>) => {
  return (
    <SectionBase className="embedded-section">
      <SectionBase.Title className="embedded-section-title">
        {title}
      </SectionBase.Title>
      <div className="embedded-section-content">{children}</div>
    </SectionBase>
  );
};
