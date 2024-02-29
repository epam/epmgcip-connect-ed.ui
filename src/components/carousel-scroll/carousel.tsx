import { ScrollDirection } from "@/components/carousel-scroll/constants.ts";
import { useCarousel } from "@/components/carousel-scroll/use-carousel.ts";
import Chevron from "@/assets/chevron.svg?react";
import "./carousel.scss";

interface CarouselProps {
  items: string[];
}

export const Carousel = ({ items }: CarouselProps) => {
  // const [autoDirection, setAutoDirection] = useState(ScrollDirection.Right);

  const { hasRightButton, hasLeftButton, listRef, onArrowClick } = useCarousel({
    itemsCount: items.length,
  });

  /*useEffect(() => {
    if(!hasRightButton) {
      setAutoDirection(ScrollDirection.Left);
      return;
    }

    if(!hasLeftButton) {
      setAutoDirection(ScrollDirection.Right);
    }
  }, [hasRightButton, hasLeftButton]);*/

  /*useEffect(() => {
    const intervalId = setInterval(() => {
      onArrowClick(autoDirection);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [autoDirection, onArrowClick]);*/

  /*
  * const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

  * */

  return (
    <div className="carousel">
      {hasLeftButton && (
        <button
          aria-label="left"
          className="carousel-navigation"
          data-direction="left"
          onClick={() => onArrowClick(ScrollDirection.Left)}
        >
          <Chevron />
        </button>
      )}
      <ul className="carousel-list" ref={listRef}>
        {items.map(url => (
          <li key={url} className="carousel-item">
            <img src={url} className="carousel-image" alt="" />
          </li>
        ))}
      </ul>
      {hasRightButton && (
        <button
          aria-label="right"
          className="carousel-navigation"
          data-direction="right"
          onClick={() => onArrowClick(ScrollDirection.Right)}
        >
          <Chevron />
        </button>
      )}
    </div>
  );
};
