import { socialLinks } from "@/components/footer/footer.constants.ts";
import EpamLogo from "@/assets/epam-logo.svg?react";
import "./footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="social-info">
        <h3 className="social-title">Get in touch</h3>
        <div className="social-links">
          {socialLinks.map(({ label, link, icon: Icon }) => (
            <a
              key={label}
              href={link}
              className="contact-link"
              aria-label={label}
              rel="noopener noreferrer"
            >
              <Icon width="24" height="24" />
            </a>
          ))}
        </div>
      </div>
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
