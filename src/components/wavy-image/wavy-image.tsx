import cc from "classcat";
import "./wavy-image.scss";

export interface WavyImageProps {
  className?: string;
  source: string;
}

export const WavyImage = ({ className, source }: WavyImageProps) => (
  <div className={cc(["wavy-image", className])}>
    <div className="wavy-image-wrapper">
      <img
        className="wavy-image-cover"
        src={source}
        alt=""
        role="presentation"
      />
      <span className="wavy-image-vertical-wave" />
      <span className="wavy-image-vertical-wave-1" />
      <span className="wavy-image-vertical-wave-2" />
      <span className="wavy-image-horizontal-wave" />
      <span className="wavy-image-horizontal-wave-1" />
      <span className="wavy-image-horizontal-wave-2" />
    </div>
  </div>
);
