import { Button } from "@/components/button/button.tsx";
import { InformationCard } from "@/components/information-card/information-card.tsx";
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
    <section className="information-section">
      {title && <h2 className="information-section-title">{title}</h2>}
      {description && (
        <p className="information-section-description">{description}</p>
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
    </section>
  );
};
