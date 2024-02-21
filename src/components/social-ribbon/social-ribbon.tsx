import cc from "classcat";
import {
  localesConfig,
  socialLinksConfig,
} from "@/components/social-ribbon/social-ribbon.constants.ts";
import "./social-ribbon.scss";

export interface SocialRibbonProps {
  className?: string;
}

export const SocialRibbon = ({ className }: SocialRibbonProps) => (
  <div className={cc(["social-ribbon", className])}>
    <select className="select-locale">
      {localesConfig.map(({ value, emoji, label }) => (
        <option key={value} value={value} aria-label={label}>
          {emoji}
        </option>
      ))}
    </select>
    <ul className="social-links-list">
      {socialLinksConfig.map(({ label, link, icon: Icon }) => (
        <li key={link}>
          <a
            className="social-link"
            href={link}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="social-icon" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
