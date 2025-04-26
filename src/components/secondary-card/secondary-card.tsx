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
    <div className="secondary-card" style={getWavyCardTheme(data.Theme)}>
      <div className="secondary-card-info">
        <Title className="secondary-card-title">{data.Name}</Title>
        <Typography className="secondary-card-body">{data.Text}</Typography>
        <div className="secondary-card-actions">
          {data.CTA1 && (
            <ButtonLink
              variant={data.CTA1.Type ?? undefined}
              href={data.CTA1.URL ?? ""}
              theme={data?.CTA1.ButtonTheme}
            >
              {data.CTA1.Label}
            </ButtonLink>
          )}
          {data.CTA2 && (
            <ButtonLink
              variant={data.CTA2.Type ?? undefined}
              href={data.CTA2.URL ?? ""}
              theme={data?.CTA2.ButtonTheme}
            >
              {data.CTA2.Label}
            </ButtonLink>
          )}
        </div>
      </div>
      <div className="secondary-card-image-wrapper">
        <img
          alt={data?.bannerImage.AltText ?? ""}
          src={data.bannerImage.URL ?? undefined}
          className="secondary-card-image"
        />
      </div>
    </div>
  );
};
