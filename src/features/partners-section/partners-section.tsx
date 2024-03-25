import { PartnersCarousel } from "@/features/partners-section/partners-carousel/partners-carousel.tsx";
import { Button } from "@/components/button/button.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import image1 from "@/assets/images/partners/image_1.png";
import image10 from "@/assets/images/partners/image_10.png";
import image11 from "@/assets/images/partners/image_11.png";
import image12 from "@/assets/images/partners/image_12.png";
import image13 from "@/assets/images/partners/image_13.png";
import image14 from "@/assets/images/partners/image_14.png";
import image15 from "@/assets/images/partners/image_15.png";
import image16 from "@/assets/images/partners/image_16.png";
import image17 from "@/assets/images/partners/image_17.png";
import image2 from "@/assets/images/partners/image_2.png";
import image3 from "@/assets/images/partners/image_3.png";
import image4 from "@/assets/images/partners/image_4.png";
import image5 from "@/assets/images/partners/image_5.png";
import image6 from "@/assets/images/partners/image_6.png";
import image7 from "@/assets/images/partners/image_7.png";
import image8 from "@/assets/images/partners/image_8.png";
import image9 from "@/assets/images/partners/image_9.png";
import "./partners-section.scss";

const partnersArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

export const PartnersSection = () => {
  return (
    <SectionBase
      className="partners-section"
      contentClassName="partners-section-content"
    >
      <SectionBase.Title className="partners-section-title">
        Our partners
      </SectionBase.Title>
      <PartnersCarousel items={partnersArray} />
      <Button className="partners-section-button" variant="main">
        Become a partner
      </Button>
    </SectionBase>
  );
};
