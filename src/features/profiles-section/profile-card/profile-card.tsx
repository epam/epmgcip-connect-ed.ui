import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getProfileCardTheme } from "@/features/profiles-section/profile-card/utils.ts";
import { ComponentSharedPersonellcard } from "@/__generated__/graphql.ts";
import "./profile-card.scss";

export interface ProfileCardProps {
  className?: string;
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  data?: ComponentSharedPersonellcard;
}

// eslint-disable-next-line complexity
export const ProfileCard = ({
  as: Tag = "div",
  className,
  data,
}: ProfileCardProps) => {
  const image = data?.Image?.data?.attributes;
  return (
    <Tag
      className={cc(["profile-card", className])}
      style={getProfileCardTheme(data?.Theme?.data?.attributes)}
    >
      <div className="profile-card-image-wrapper">
        <img
          className="profile-card-image"
          alt={image?.altText ?? ""}
          src={image?.url ?? ""}
          role="presentation"
        />
      </div>
      <article>
        <Title className="profile-card-title">{data?.Title}</Title>
        <Typography className="profile-card-role">{data?.Text}</Typography>
      </article>
      <SocialLinkList
        items={data?.SocialMedias?.data}
        className="profile-card-social-link-list"
        iconClassName="profile-card-social-icon"
      />
    </Tag>
  );
};
