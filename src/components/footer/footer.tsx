import { ComponentSharedSocialIcon } from "@/__generated__/graphql.ts";
import EpamLogo from "@/assets/icons/epam-logo.svg?react";
import "./footer.scss";

export interface FooterProps {
  socialLinks?: ComponentSharedSocialIcon[];
}

export const Footer = ({ socialLinks }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {socialLinks && (
        <div className="social-info">
          <h3 className="social-title">Get in touch</h3>
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
          <a href="/" className="contact-link">
            Terms of use
          </a>
          <a href="/" className="contact-link">
            Privacy policy
          </a>
          <a href="/" className="contact-link">
            Contact us
          </a>
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
