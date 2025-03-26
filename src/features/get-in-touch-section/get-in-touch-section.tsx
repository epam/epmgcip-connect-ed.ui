import { SendgridForm } from "@/components/sendgrid-form/sendgrid-form.tsx";
import { GetInTouchFragmentFragment } from "@/__generated__/graphql.ts";
import { SectionBase, SectionBaseTitle } from "@/components/section-base";
import "./get-in-touch-section.scss";

interface GetInTouchSectionProps {
  data: GetInTouchFragmentFragment;
}

export const GetInTouchSection = ({ data }: GetInTouchSectionProps) => {
  const titleData = data?.Title?.data?.attributes;

  return (
    <SectionBase
      className="get-in-touch-section"
      contentClassName="get-in-touch-section-content"
      hasWave={data.ShowWave}
    >
      <SectionBaseTitle
        className="get-in-touch-section-title"
        level={titleData?.HeadingLevel}
        align="center"
      >
        {titleData?.Title}
      </SectionBaseTitle>
      <p className="get-in-touch-section-description">{data?.Text}</p>
      {data?.FormId && <SendgridForm id={data.FormId} />}
    </SectionBase>
  );
};
