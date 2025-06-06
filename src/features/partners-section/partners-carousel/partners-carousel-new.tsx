// "use client";
//
// import AutoScroll from "embla-carousel-auto-scroll";
// import useEmblaCarousel from "embla-carousel-react";
// import { ComponentSharedImage } from "@/__generated__/graphql.ts";
//
// type PropType = {
//   items: ComponentSharedImage[];
//   speed?: number;
// };
//
// export const EmblaCarousel = ({ items, speed = 1.4 }: PropType) => {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     AutoScroll({
//       playOnInit: true,
//       speed,
//       stopOnMouseEnter: true,
//       stopOnInteraction: false,
//     }),
//   ]);
//
//   return (
//     <div className="partners-carousel" ref={emblaRef}>
//       <ul className="partners-carousel-list">
//         {items.map(item => (
//           <li key={item.id} className="partners-carousel-item">
//             <a
//               href={item.URL ?? ""}
//               target={item?.Open ? "_blank" : "_self"}
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={item.Image?.url ?? ""}
//                 className="partners-carousel-image"
//                 alt={item.AltText ?? ""}
//               />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
