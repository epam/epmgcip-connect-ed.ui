import cc from "classcat";
import { Link } from "react-router-dom";
import { ComponentSharedSocialIcon } from "@/__generated__/graphql.ts";
import "./social-link-list.scss";

export interface SocialLinksProps {
  items?: ComponentSharedSocialIcon[];
  className?: string;
  iconClassName?: string;
}

export const SocialLinkList = ({
  items,
  className,
  iconClassName,
}: SocialLinksProps) => {
  const linkIconClassName = cc(["social-link-list-icon", iconClassName]);

  return (
    <div className={cc(["social-link-list", className])}>
      {items?.map(({ title, newTab, url, icon }) => {
        const iconData = icon?.data?.attributes;

        return (
          <Link
            className="social-link-list-link"
            key={url}
            to={url ?? ""}
            aria-label={title ?? ""}
            target={newTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <img
              className={linkIconClassName}
              alt={iconData?.caption ?? ""}
              src={iconData?.url}
              role="presentation"
            />
          </Link>
        );
      })}
    </div>
  );
};
