import { ChangeEvent, CSSProperties, useEffect, useRef, useState } from "react";
import "./carousel.scss";

interface CarouselProps {
  items: string[];
}

export const Carousel = ({ items }: CarouselProps) => {
  const [direction, setDirection] = useState("Forward");
  const [speed, setSpeed] = useState("40");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // add data-animated="true" to every `.scroller` on the page

    const listItems = listRef.current?.children;
    // Make an array from the elements within `.scroller-inner`

    const scrollerContent = Array.from(listItems ?? []);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as Element;
      duplicatedItem.setAttribute("aria-hidden", "true");
      listRef.current?.appendChild(duplicatedItem);
    });
  }, []);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setDirection(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.value);
  };

  const styles = {
    "--animation-speed": `${speed}s`
  } as CSSProperties;

  return (
    <div className="carousel-infinite-container">
      <fieldset>
        <label htmlFor="disable_animation_infinite">
          Disable animation
          <input id="disable_animation_infinite" type="checkbox" className="carousel-infinite-checkbox" />
        </label>
        <label htmlFor="speed_range">
          Speed (min 1 sec max 20sec)
          <input id="speed_range" type="range" step={1} min={10} max={80} defaultValue={40} value={speed} onChange={handleChange} />
        </label>
        <select onChange={handleSelect}>
          <option>Forward</option>
          <option>Backward</option>
        </select>
      </fieldset>
      <div className="carousel-infinite" data-direction={direction} style={styles}>
        <ul className="carousel-infinite-list" ref={listRef}>
          {items.map(url => (
            <li key={url} className="carousel-infinite-item">
              <a href="/">
                <img src={url} className="carousel-infinite-image" alt="partner"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
