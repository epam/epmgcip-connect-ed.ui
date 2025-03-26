import { RichTextMarkdown } from "@/components/rich-text-markdown/rich-text-markdown.tsx";
import { getRichTextTheme } from "@/features/rich-text-section/utils.ts";
import { RichTextFragmentFragment } from "@/__generated__/graphql.ts";
import { SectionBase } from "@/components/section-base";
import "./rich-text-section.scss";

export interface RichTextSectionProps {
  data: RichTextFragmentFragment;
}

export const RichTextSection = ({ data }: RichTextSectionProps) => {
  return (
    <SectionBase
      className="rich-text-section"
      contentClassName="rich-text-section-content"
      style={getRichTextTheme()}
    >
      <RichTextMarkdown>{data?.Content}</RichTextMarkdown>
    </SectionBase>
  );
};
