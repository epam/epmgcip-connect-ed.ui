import { Title } from "@/components/title/title.tsx";
import { ContactBannerFragmentFragment } from "@/__generated__/graphql.ts";
import { SectionBase } from "@/components/section-base";
import "./contact-banner.scss";

interface ContactBannerProps {
  data: ContactBannerFragmentFragment;
}

export const ContactBanner = ({ data }: ContactBannerProps) => {
  return (
    <SectionBase
      className="contact-banner"
      contentClassName="contact-banner-content"
    >
      <ul className="contact-banner-list">
        {data.columns?.map(column => (
          <li key={column?.id} className="contact-banner-list-item">
            <div className="contact-banner-info">
              <Title
                level={column?.Title?.data?.attributes?.HeadingLevel}
                className="contact-banner-info-title"
              >
                {column?.Title?.data?.attributes?.Title}
              </Title>
              <p className="contact-banner-info-body">{column?.Text}</p>
            </div>
            <div className="contact-banner-socials">
              <span className="contact-banner-socials-label">
                {column?.Label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </SectionBase>
  );
};
