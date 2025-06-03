import cc from "classcat";
import Link from "next/link";
import { SocialMedia } from "@/__generated__/graphql.ts";
import "./social-link-list.scss";

export interface SocialLinksProps {
  items?: SocialMedia[] | undefined;
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
      {/* eslint-disable-next-line complexity */}
      {items?.map(item => {
        return (
          <Link
            className="social-link-list-link"
            key={item?.url}
            href={item?.url ?? ""}
            aria-label={item?.title ?? ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={linkIconClassName}
              alt={
                item?.image?.image?.alternativeText ?? item.image?.altText ?? ""
              }
              src={item.image?.image?.url ?? item?.image?.url ?? ""}
              role="presentation"
            />
          </Link>
        );
      })}
    </div>
  );
};
