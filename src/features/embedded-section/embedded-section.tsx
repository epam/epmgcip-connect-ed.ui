import { PropsWithChildren } from "react";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { SectionBaseTitle } from "@/components/section-base";
import "./embedded-section.scss";

export interface EmbeddedSectionProps {
  title: string;
}

export const EmbeddedSection = ({
  title,
  children,
}: PropsWithChildren<EmbeddedSectionProps>) => {
  return (
    <SectionBase
      className="embedded-section"
      contentClassName="embedded-section-content"
    >
      <SectionBaseTitle className="embedded-section-title">
        {title}
      </SectionBaseTitle>
      {children}
    </SectionBase>
  );
};
