import { ProfileCard } from "@/features/profiles-section/profile-card/profile-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./profiles-section.scss";

export interface ProfilesSectionProps {
  title?: string | null;
  theme?: ComponentSharedColor | null;
  profiles?: { name: string }[];
}

export const ProfilesSection = ({ profiles }: ProfilesSectionProps) => {
  return (
    <SectionBase className="profiles-section">
      <SectionBaseTitle className="profiles-section-title">
        Who we are
      </SectionBaseTitle>
      <ul className="profiles-section-list">
        {profiles?.map(profile => (
          <ProfileCard as="li" key={profile.name} data={profile} />
        ))}
      </ul>
    </SectionBase>
  );
};
