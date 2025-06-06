import Link from "next/link";
import { SocialLinkList } from "@/components/social-link-list/social-link-list.tsx";
import { Title } from "@/components/title/title.tsx";
import EpamLogo from "@/assets/icons/epam-logo.svg?react";
import { Page, SocialMedia } from "@/__generated__/graphql.ts";
import "./footer.scss";

export interface FooterProps {
  socialLinks?: SocialMedia[];
  navigation?: Page[];
  heading?: string;
  tradeMark?: string;
  rights?: string;
}

export const Footer = ({
  socialLinks,
  heading,
  navigation,
  tradeMark,
  rights,
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {socialLinks && (
          <div className="social-info">
            {heading && (
              <Title level="h3" className="social-title">
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
            {navigation?.map(({ Slug, Title: contactLinkTitle }) => {
              const slug = Slug ?? "";

              return (
                <Link key={slug} href={slug} className="contact-link">
                  {contactLinkTitle}
                </Link>
              );
            })}
          </div>
          <div className="copyright-info">
            {tradeMark && <span>{tradeMark}</span>}
            <span className="copyright-info-delimiter"> | </span>
            {rights && <span>{rights}</span>}
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
