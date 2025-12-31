import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export type SwiperflowSlide =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

type Props = {
  slides: SwiperflowSlide[];
  className?: string;
  slideClassName?: string;
  mediaStyle?: React.CSSProperties; // estilos para img/video
  pauseVideoOnSlideChange?: boolean;
};

export default function SwiperCarrousel({
  slides,
  className = "mySwiper",
  slideClassName,
  mediaStyle,
  pauseVideoOnSlideChange = true,
}: Props) {
  const videoRefs = React.useRef<Array<HTMLVideoElement | null>>([]);

  if (!slides?.length) return null;

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor
      centeredSlides
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      modules={[EffectCoverflow, Pagination]}
      className={className}
      onSlideChange={() => {
        if (!pauseVideoOnSlideChange) return;
        videoRefs.current.forEach((v) => {
          if (v && !v.paused) {
            v.pause();
            v.currentTime = 0;
          }
        });
      }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={`${s.type}-${s.src}-${i}`} className={slideClassName}>
          {s.type === "image" ? (
            <img
              src={s.src}
              alt={s.alt ?? `slide-${i + 1}`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                ...mediaStyle,
              }}
            />
          ) : (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={s.src}
              poster={s.poster}
              autoPlay
              muted
              loop
              controls
              playsInline
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                ...mediaStyle,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
