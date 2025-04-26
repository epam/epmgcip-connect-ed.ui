import { ChangeEvent } from "react";
import cc from "classcat";
import { useParams, useRouter } from "next/navigation";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
import { SocialMedia } from "@/__generated__/graphql.ts";
import { localesConfig } from "../../../i18n/request.ts";
import "./social-ribbon.scss";

export interface SocialRibbonProps {
  className?: string;
  socialLinks?: SocialMedia[];
}

export const SocialRibbon = ({ className, socialLinks }: SocialRibbonProps) => {
  const router = useRouter();
  const { locale } = useParams();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    router.push(`/${event.target.value}`);
  };

  return (
    <div className={cc(["social-ribbon", className])}>
      <select
        className="social-ribbon-locale-select"
        onChange={handleSelect}
        value={locale}
      >
        {localesConfig.map(({ value, emoji, label }) => (
          <option key={value} value={value} aria-label={label}>
            {emoji}
          </option>
        ))}
      </select>
      <SocialLinkList
        items={socialLinks}
        className="social-ribbon-links-list"
        iconClassName="social-ribbon-icon"
      />
    </div>
  );
};
