import { PartnersCarousel } from "@/features/partners-section/partners-carousel/partners-carousel.tsx";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedImage,
  PartnersSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import { TitleLevel } from "@/components/title/title";
import "./partners-section.scss";

export interface PartnersSectionProps {
  data: PartnersSectionFragmentFragment;
}

// eslint-disable-next-line complexity
export const PartnersSection = ({ data }: PartnersSectionProps) => {
  return (
    <SectionBase
      className="partners-section"
      contentClassName="partners-section-content"
    >
      <SectionBaseTitle
        className="partners-section-title"
        level={(data?.heading?.Level as TitleLevel) ?? undefined}
      >
        {data?.heading?.Title?.Title}
      </SectionBaseTitle>
      <PartnersCarousel
        items={data?.Elements?.filter(isNotNull) as ComponentSharedImage[]}
      />
      {data?.CTA && (
        <ButtonLink
          href={data.CTA.URL ?? ""}
          className="partners-section-button"
          variant={data.CTA.Type ?? undefined}
          theme={data.CTA.ButtonTheme}
        >
          {data.CTA.Label}
        </ButtonLink>
      )}
    </SectionBase>
  );
};
