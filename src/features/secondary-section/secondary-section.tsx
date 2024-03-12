import { SecondaryCard } from "@/components/secondary-card/secondary-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import "./secondary-section.scss";

export interface SecondarySectionProps {
  items?: { theme?: "primary" | "secondary" | "tertiary" }[];
}

export const SecondarySection = ({ items }: SecondarySectionProps) => {
  return (
    <SectionBase className="secondary-section">
      <SectionBase.Title className="secondary-section-title">
        How we’re helping
      </SectionBase.Title>
      <ul className="secondary-section-list">
        {items?.map((item, index) => (
          // TODO: use id or title instead of index
          // eslint-disable-next-line react/no-array-index-key
          <WavyCard key={index} as="li" theme={item.theme}>
            <SecondaryCard theme={item.theme} />
          </WavyCard>
        ))}
      </ul>
    </SectionBase>
  );
};
