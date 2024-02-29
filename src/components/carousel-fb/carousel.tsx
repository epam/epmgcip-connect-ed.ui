import "./carousel.scss";

interface CarouselProps {
  items: string[];
}

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="carousel-fb-container">
      <label htmlFor="disable_animation_fb">
        Disable animation
        <input id="disable_animation_fb" type="checkbox" className="carousel-fb-checkbox" />
      </label>
      <div className="carousel-fb">
        <ul className="carousel-fb-list">
          {items.map(url => (
            <li key={url} className="carousel-fb-item">
              <img src={url} className="carousel-fb-image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
