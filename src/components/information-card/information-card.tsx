import { Button } from "@/components/button/button.tsx";
import "./information-card.scss";

export interface DescriptionCardProps {
  title: string;
  body: string;
  image: string;
  action?: string;
}

export const InformationCard = ({
  title,
  body,
  image,
  action,
}: DescriptionCardProps) => (
  <article className="information-card">
    <div className="information-card-image-wrapper">
      <img className="" src={image} role="presentation" alt="" />
    </div>
    <div className="information-card-info">
      <span className="information-card-title">{title}</span>
      <p className="information-card-body">{body}</p>
    </div>
    {action && (
      <Button className="information-card-action" variant="outline">
        {action}
      </Button>
    )}
  </article>
);
