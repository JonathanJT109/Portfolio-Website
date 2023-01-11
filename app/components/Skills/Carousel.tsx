"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Skill from "./Skill";
import "./skills-styles.css";

interface PropTypes {
  field: string;
  data: { title: string; experience: number }[];
}

function Carousel({ field, data }: PropTypes) {
  const slides = Array.from(Array(data.length).keys());
  const options: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="">
      <h1 className="text-lg font-bold ml-[2.3%]">{field}:</h1>
      <div className="embla skills">
        <div className="embla__viewport skills" ref={emblaRef}>
          <div className="embla__container skills">
            {slides.map((index) => (
              <div className="embla__slide skills mb-20">
                <Skill
                  title={data[index].title}
                  experience={data[index].experience}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
