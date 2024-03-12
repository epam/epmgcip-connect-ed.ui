import { Link } from "react-router-dom";
import { Title } from "@/components/title/title.tsx";
import EpamLogo from "@/assets/icons/epam-logo.svg?react";
import {
  ComponentSharedSocialIcon,
  PageEntity,
} from "@/__generated__/graphql.ts";
import "./footer.scss";

export interface FooterProps {
  socialLinks?: ComponentSharedSocialIcon[];
  navigation?: PageEntity[];
  heading?: string;
}

export const Footer = ({ socialLinks, heading, navigation }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {socialLinks && (
        <div className="social-info">
          {heading && (
            <Title as="h3" className="social-title">
              {heading}
            </Title>
          )}
          <div className="social-links">
            {socialLinks.map(({ title, newTab, url, icon }) => {
              const iconData = icon?.data?.attributes;

              return (
                <a
                  key={url}
                  href={url ?? ""}
                  className="contact-link"
                  aria-label={title ?? ""}
                  target={newTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-icon"
                    alt={iconData?.caption ?? ""}
                    src={iconData?.url}
                    role="presentation"
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}
      <div className="contact-info">
        <div className="contact-links">
          {navigation?.map(({ attributes }) => {
            const slug = attributes?.slug ?? "";

            return (
              <Link key={slug} to={slug ?? ""} className="contact-link">
                {attributes?.label}
              </Link>
            );
          })}
        </div>
        <div className="copyright-info">
          <span>© {currentYear} | Connect-Ed</span>
          <span className="copyright-info-delimiter"> | </span>
          <span>Все права защищены | info@connect-ed.kz</span>
        </div>
        <div className="designed-by">
          <span>Designed by</span>
          <EpamLogo className="designed-by-logo" />
        </div>
      </div>
    </footer>
  );
};
