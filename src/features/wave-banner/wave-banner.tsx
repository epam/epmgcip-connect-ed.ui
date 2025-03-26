import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { WavyImage } from "@/components/wavy-image/wavy-image.tsx";
import { getWaveBannerTheme } from "@/features/wave-banner/utils.ts";
import { WaveBannerFragmentFragment } from "@/__generated__/graphql.ts";
import "./wave-banner.scss";

export interface WaveBannerProps {
  data?: WaveBannerFragmentFragment;
}

// eslint-disable-next-line complexity
export const WaveBanner = ({ data }: WaveBannerProps) => {
  const {
    CTA: action,
    Image,
    IsLargeImage,
    IsTextBox,
    Text,
    BackgroundColor,
    Heading: title, // TODO: change to proper theme with bgColor and color for text
  } = data ?? {};

  const contentMode: "ltr" | "rtl" = "ltr"; // TODO: implement placement from BE side
  const imageClassName = IsLargeImage
    ? "wave-banner-image--large"
    : "wave-banner-image";
  const infoClassName = IsTextBox
    ? "wave-banner-info"
    : "wave-banner-info--card";
  const imageSource = Image?.URL ?? "";

  return (
    <SectionBase
      className="wave-banner"
      contentClassName="wave-banner-content"
      style={getWaveBannerTheme(BackgroundColor)}
      hasWave
    >
      {contentMode === "ltr" && (
        <WavyImage className={imageClassName} source={imageSource} />
      )}
      <div className={infoClassName}>
        {title && (
          <Title
            level={title?.Title?.data?.attributes?.HeadingLevel}
            className="wave-banner-title"
          >
            {title?.Title?.data?.attributes?.Title}
          </Title>
        )}
        <Typography className="wave-banner-body">{Text}</Typography>
        {action && (
          <ButtonLink
            href={action.URL ?? ""}
            className="wave-banner-action"
            variant={action.Type ?? undefined}
            theme={action.ButtonTheme?.data?.attributes}
          >
            {action.Label}
          </ButtonLink>
        )}
      </div>
      {/*{contentMode === "rtl" && (*/}
      {/*  <WavyImage className={imageClassName} source={imageSource} />*/}
      {/*)}*/}
    </SectionBase>
  );
};
