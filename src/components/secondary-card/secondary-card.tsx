import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getWavyCardTheme } from "@/components/secondary-card/utils.ts";
import { SecondaryBannerFragmentFragment } from "@/__generated__/graphql.ts";
import "./secondary-card.scss";

export interface SecondaryCardProps {
  data: SecondaryBannerFragmentFragment;
}

export const SecondaryCard = ({ data }: SecondaryCardProps) => {
  return (
    <div className="secondary-card" style={getWavyCardTheme(data)}>
      <div className="secondary-card-info">
        <Title className="secondary-card-title">{data.name}</Title>
        <Typography className="secondary-card-body">{data.text}</Typography>
        <div className="secondary-card-actions">
          {data.cta1 && (
            <ButtonLink
              variant={data.cta1.type ?? undefined}
              href={data.cta1.url ?? ""}
              // @ts-expect-error - theme should be changed for the button
              theme={data?.backgroundColor}
            >
              {data.cta1.label}
            </ButtonLink>
          )}
          {data.cta2 && (
            <ButtonLink
              variant={data.cta2.type ?? undefined}
              href={data.cta2.url ?? ""}
              // @ts-expect-error - theme should be changed for the button
              theme={data?.backgroundColor}
            >
              {data.cta2.label}
            </ButtonLink>
          )}
        </div>
      </div>
      <div className="secondary-card-image-wrapper">
        <img
          alt={data?.secondaryBannerCover.altText ?? ""}
          src={
            data.secondaryBannerCover.image?.data?.attributes?.url ?? undefined
          }
          className="secondary-card-image"
        />
      </div>
    </div>
  );
};
