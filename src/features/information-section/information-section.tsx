import { Button } from "@/components/button/button.tsx";
import { InformationCard } from "@/components/information-card/information-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import provideImage from "@/assets/images/provide.png";
import "./information-section.scss";

export interface InformationSectionProps {
  title?: string;
  description?: string;
  cards: object[];
  action: string;
}

export const InformationSection = ({
  title,
  description,
  cards,
  action,
}: InformationSectionProps) => {
  return (
    <SectionBase className="information-section">
      {title && (
        <SectionBase.Title className="information-section-title">
          {title}
        </SectionBase.Title>
      )}
      {description && (
        <Typography className="information-section-description">
          {description}
        </Typography>
      )}
      <ul className="information-section-list">
        {cards.map((_, index) => (
          <WavyCard
            // TODO: change to id or something unique during integration
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            as="li"
            className="information-section-list-item"
          >
            <InformationCard
              title="Provide"
              body="Digital equipment to underprivileged children"
              image={provideImage}
              action="Here we go"
            />
          </WavyCard>
        ))}
      </ul>
      {action && (
        <Button className="information-section-action" variant="outline">
          Bridging the digital divide
        </Button>
      )}
    </SectionBase>
  );
};
