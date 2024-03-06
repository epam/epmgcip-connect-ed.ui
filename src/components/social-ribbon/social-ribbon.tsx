import cc from "classcat";
import { Link } from "react-router-dom";
import { localesConfig } from "@/components/social-ribbon/social-ribbon.constants.ts";
import { ComponentSharedSocialIcon } from "@/__generated__/graphql.ts";
import "./social-ribbon.scss";

export interface SocialRibbonProps {
  className?: string;
  socialLinks?: ComponentSharedSocialIcon[];
}

export const SocialRibbon = ({ className, socialLinks }: SocialRibbonProps) => (
  <div className={cc(["social-ribbon", className])}>
    <select className="select-locale">
      {localesConfig.map(({ value, emoji, label }) => (
        <option key={value} value={value} aria-label={label}>
          {emoji}
        </option>
      ))}
    </select>
    <ul className="social-links-list">
      {socialLinks?.map(({ url, title, newTab, icon }) => (
        <li key={url}>
          <Link
            className="social-link"
            to={url ?? ""}
            aria-label={title ?? ""}
            target={newTab ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              alt={icon?.data?.attributes?.alternativeText ?? ""}
              width="24"
              height="24"
              src={icon?.data?.attributes?.url}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
