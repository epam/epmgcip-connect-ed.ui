import { Link } from "react-router-dom";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
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
      <div className="footer-content">
        {socialLinks && (
          <div className="social-info">
            {heading && (
              <Title as="h3" className="social-title">
                {heading}
              </Title>
            )}
            <SocialLinkList
              items={socialLinks}
              className="social-links"
              iconClassName="social-icon"
            />
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
      </div>
    </footer>
  );
};
