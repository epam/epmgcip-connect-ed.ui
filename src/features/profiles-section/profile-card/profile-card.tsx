import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getTimelineCardTheme } from "@/features/timeline-section/timeline-card/utils.ts";
import {
  ComponentSharedColor,
  ComponentSharedSocialIcon,
} from "@/__generated__/graphql.ts";
import "./profile-card.scss";

export interface ProfileCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  data?: {
    name?: string;
    role?: string;
    url?: string;
    bgColor?: string;
    color?: string;
    socialLinks?: ComponentSharedSocialIcon[];
  };
}

export const ProfileCard = ({
  as: Tag = "div",
  className,
  data,
}: ProfileCardProps) => (
  <Tag
    className={cc(["profile-card", className])}
    style={getTimelineCardTheme(data as ComponentSharedColor)}
  >
    <div className="profile-card-image-wrapper">
      <img
        className="profile-card-image"
        alt=""
        src={data?.url}
        role="presentation"
      />
    </div>
    <article>
      <Title className="profile-card-title">{data?.name}</Title>
      <Typography className="profile-card-role">{data?.role}</Typography>
    </article>
    <SocialLinkList
      items={data?.socialLinks}
      className="profile-card-social-link-list"
      iconClassName="profile-card-social-icon"
    />
  </Tag>
);
