import React, { useState, useEffect } from "react";
import { themes } from "../data";
import type { CarouselProps } from "../data";

const Carousel: React.FC<CarouselProps> = ({
  items = themes,
  autoPlay = true,
  interval = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  // Défilement automatique en mode ping-pong
  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = prev + direction;
        if (next >= items.length) {
          next = items.length - 2; 
          setDirection(-1);
        } else if (next < 0) {
          next = 1;
          setDirection(1);
        }
        return next;
      });
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, items.length, direction]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full h-auto pb-8 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((theme, i) => (
      <div
  key={i}
  className="flex flex-col items-center justify-center flex-shrink-0 w-full h-auto transition-all duration-300 md:flex-row glow-frame md:p-0 rounded-tl-[80px] rounded-br-[80px]"
>
            <div className="flex items-center justify-center w-full px-3 py-5 text-center md:w-1/4 no-bg">
              <h3 className="text-2xl font-bold text-normal md:text-3xl">
                {theme.title}
              </h3>
            </div>

            <div className="flex items-center justify-center w-full p-2 md:w-2/4 no-bg">
              <img
                src={theme.image}
                alt={theme.title}
                className="object-contain w-auto h-full max-h-[300px]"
              />
            </div>

            <div className="flex items-center justify-center w-full px-4 py-4 text-center md:w-1/4 no-bg">
              <p className="text-base font-bold leading-relaxed text-gray-800 md:text-lg">
                {theme.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute z-20 bottom-2.5 left-[8%] bg-[#cba95c] text-white p-3 shadow-lg hover:bg-[#ebce8c] transition md:block hidden rounded-none"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 bottom-2.5 right-[8%] bg-[#cba95c] text-white p-3 shadow-lg hover:bg-[#ebce8c] transition md:block hidden rounded-none"
      >
        ▶
      </button>

      <div className="absolute z-20 flex space-x-2 -translate-x-1/2 bottom-1 left-1/2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-[#cba95c]" : "bg-[#f8e6b5]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
