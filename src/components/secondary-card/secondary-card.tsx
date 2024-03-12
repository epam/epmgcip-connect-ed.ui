import { Button } from "@/components/button/button.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import coverImage from "@/assets/images/secondary.png";
import "./secondary-card.scss";

export interface SecondaryCardProps {
  theme?: "primary" | "secondary" | "tertiary";
}

export const SecondaryCard = ({ theme = "primary" }: SecondaryCardProps) => {
  return (
    <div className="secondary-card" data-theme={theme}>
      <div className="secondary-card-info">
        <Title className="secondary-card-title">Through equipment</Title>
        <Typography className="secondary-card-body">
          Connect-ed plays a crucial role in leveling the educational playing
          field by providing underprivileged students with donated electronic
          equipment, such as laptops. This support enables students to access
          essential educational resources, facilitating their learning and
          empowering them for a brighter future.
        </Typography>
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
