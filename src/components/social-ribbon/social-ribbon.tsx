import cc from "classcat";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
import { localesConfig } from "@/components/social-ribbon/social-ribbon.constants.ts";
import { ComponentSharedSocialIcon } from "@/__generated__/graphql.ts";
import "./social-ribbon.scss";

export interface SocialRibbonProps {
  className?: string;
  socialLinks?: ComponentSharedSocialIcon[];
}

export const SocialRibbon = ({ className, socialLinks }: SocialRibbonProps) => (
  <div className={cc(["social-ribbon", className])}>
    <select className="social-ribbon-locale-select">
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
