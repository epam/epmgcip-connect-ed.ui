import { ProfileCard } from "@/features/profiles-section/profile-card/profile-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { TitleLevel } from "@/components/title/title.tsx";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedPersonellcard,
  PersonelSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./profiles-section.scss";

export interface ProfilesSectionProps {
  data: PersonelSectionFragmentFragment;
}

export const ProfilesSection = ({ data }: ProfilesSectionProps) => {
  const profiles = (data.personelCard?.filter(isNotNull) ??
    []) as ComponentSharedPersonellcard[];

  return (
    <SectionBase className="profiles-section">
      <SectionBaseTitle
        className="profiles-section-title"
        level={data.heading?.Level as TitleLevel}
      >
        {data.heading?.Title?.data?.attributes?.Title}
      </SectionBaseTitle>
      <ul className="profiles-section-list">
        {profiles?.map(profile => (
          <ProfileCard as="li" key={profile.id} data={profile} />
        ))}
      </ul>
    </SectionBase>
  );
};
