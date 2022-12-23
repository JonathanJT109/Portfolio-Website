"use client";
import React, { useCallback, useEffect, useState } from "react";
import Project from "./Project";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { data } from "./projectInfo.js";
import { flushSync } from "react-dom";
import "./styles.css";

//const slides: number = Object.keys(Information).length;
const slides = Array.from(Array(data.length).keys());
const options: EmblaOptionsType = { loop: true };
const TWEEN_FACTOR: number = 4;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide rounded-3xl"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <Project
                name={data[index].name}
                description={data[index].description}
                img={data[index].img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
