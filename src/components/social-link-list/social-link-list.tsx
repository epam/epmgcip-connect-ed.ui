import cc from "classcat";
import Link from "next/link";
import { SocialMediaEntity } from "@/__generated__/graphql.ts";
import "./social-link-list.scss";

export interface SocialLinksProps {
  items?: SocialMediaEntity[] | undefined;
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
      {items?.map(item => {
        const currentItem = item.attributes;
        return (
          <Link
            className="social-link-list-link"
            key={currentItem?.url}
            href={currentItem?.url ?? ""}
            aria-label={currentItem?.title ?? ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={linkIconClassName}
              alt={currentItem?.text ?? ""}
              src={currentItem?.url ?? ""}
              role="presentation"
            />
          </Link>
        );
      })}
    </div>
  );
};
