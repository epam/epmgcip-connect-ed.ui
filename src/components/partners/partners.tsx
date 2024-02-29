import { Button } from "@/components/button/button.tsx";
import { Carousel } from "@/components/carousel-scroll/carousel.tsx";
import { Carousel as BackForwardCarousel } from "@/components/carousel-fb/carousel.tsx";
import { Carousel as InfiniteCarousel } from "@/components/carousel-infinite/carousel.tsx";
import image1 from "@/partners/image_1.png";
import image2 from "@/partners/image_2.png";
import image3 from "@/partners/image_3.png";
import image4 from "@/partners/image_4.png";
import image5 from "@/partners/image_5.png";
import image6 from "@/partners/image_6.png";
import image7 from "@/partners/image_7.png";
import image8 from "@/partners/image_8.png";
import image9 from "@/partners/image_9.png";
import image10 from "@/partners/image_10.png";
import image11 from "@/partners/image_11.png";
import image12 from "@/partners/image_12.png";
import image13 from "@/partners/image_13.png";
import image14 from "@/partners/image_14.png";
import image15 from "@/partners/image_15.png";
import image16 from "@/partners/image_16.png";
import image17 from "@/partners/image_17.png";
import "./partners.scss";

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
  image17
];

export const Partners = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-section-title">Our partners</h2>
      <div className="partners-section-content">
        <Carousel items={partnersArray}/>
        <BackForwardCarousel items={partnersArray}/>
        <InfiniteCarousel items={partnersArray} />
      </div>
      <Button className="partners-section-button" variant="main">Become a partner</Button>
    </section>
  );
}
