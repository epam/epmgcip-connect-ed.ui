import { SecondaryCard } from "@/components/secondary-card/secondary-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TitleLevel } from "@/components/title/title.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import { SecondaryBannerFragmentFragment } from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./secondary-section.scss";

export interface SecondarySectionProps {
  data: SecondaryBannerFragmentFragment;
}

export const SecondarySection = ({ data }: SecondarySectionProps) => {
  return (
    <SectionBase className="secondary-section">
      <SectionBaseTitle
        className="secondary-section-title"
        level={data.heading?.Level as TitleLevel}
      >
        {data?.heading?.Title?.Title}
      </SectionBaseTitle>
      <ul className="secondary-section-list">
        <WavyCard as="li" theme={data?.Theme}>
          <SecondaryCard data={data} />
        </WavyCard>
      </ul>
    </SectionBase>
  );
};
