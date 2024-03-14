import { Button } from "@/components/button/button.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getInformationCardTheme } from "@/components/information-card/utils.ts";
import { ComponentSharedNoodlesCard } from "@/__generated__/graphql.ts";
import "./information-card.scss";

export interface DescriptionCardProps {
  data?: ComponentSharedNoodlesCard;
}

export const InformationCard = ({ data }: DescriptionCardProps) => {
  const action = undefined;

  return (
    <article className="information-card" style={getInformationCardTheme(data)}>
      {data?.image?.data && (
        <div className="information-card-image-wrapper">
          <img
            className=""
            src={data.image.data.attributes?.url}
            role="presentation"
            alt=""
          />
        </div>
      )}
      <div className="information-card-info">
        <Title as="h4" className="information-card-title">
          {data?.heading}
        </Title>
        <Typography className="information-card-body">
          {data?.description}
        </Typography>
      </div>
      {action && (
        <Button className="information-card-action" variant="outline">
          {action}
        </Button>
      )}
    </article>
  );
};
