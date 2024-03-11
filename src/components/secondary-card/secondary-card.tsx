import { Button } from "@/components/button/button.tsx";
import coverImage from "@/assets/images/secondary.png";
import "./secondary-card.scss";

export interface SecondaryCardProps {
  theme?: "primary" | "secondary" | "tertiary";
}

export const SecondaryCard = ({ theme = "primary" }: SecondaryCardProps) => {
  return (
    <div className="secondary-card" data-theme={theme}>
      <div className="secondary-card-info">
        <h2 className="secondary-card-title">Through equipment</h2>
        <p className="secondary-card-body">
          Connect-ed plays a crucial role in leveling the educational playing
          field by providing underprivileged students with donated electronic
          equipment, such as laptops. This support enables students to access
          essential educational resources, facilitating their learning and
          empowering them for a brighter future.
        </p>
        <div className="secondary-card-actions">
          <Button variant="inverted" theme={theme}>
            Find out more
          </Button>
          <Button variant="inverted" theme={theme}>
            Donate today
          </Button>
        </div>
      </div>
      <div className="secondary-card-image-wrapper">
        <img alt="" src={coverImage} className="secondary-card-image" />
      </div>
    </div>
  );
};
