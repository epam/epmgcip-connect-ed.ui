import { SecondaryCard } from "@/components/secondary-card/secondary-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import { ComponentSectionsSecondaryBanner } from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./secondary-section.scss";

export interface SecondarySectionProps {
  data: ComponentSectionsSecondaryBanner;
}

export const SecondarySection = ({ data }: SecondarySectionProps) => {
  return (
    <SectionBase className="secondary-section">
      <SectionBaseTitle className="secondary-section-title">
        {data?.title?.text}
      </SectionBaseTitle>
      <ul className="secondary-section-list">
        <WavyCard as="li" theme={data.backgroundColor}>
          <SecondaryCard data={data} />
        </WavyCard>
      </ul>
    </SectionBase>
  );
};
