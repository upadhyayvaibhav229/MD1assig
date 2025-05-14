import React, { useEffect, useState } from "react";
import { images } from "../assets";

const slides = [
  {
    id: 1,
    name: "Rupesh Kanna",
    text: `Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specialised high-quality pigmented imaging process, so he decided to create his own product line.`,
    image: images.rupesh,
  },
  {
    id: 2,
    name: "Rupesh Kanna",
    text: `Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional.`,
    image: images.David,
  },
  {
    id: 3,
    name: "Rupesh Kanna",
    text: `LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.`,
    image: images.LTA,
  },
  {
    id: 4,
    name: "Rupesh Kanna",
    text: `Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.`,
    image: images.lab,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div className="overflow-hidden relative p-2 gap-10 bg-gray-100 h-[800px] flex flex-col items-center justify-center md:p-0 p-2">
      <h1 className="text-4xl font-bold text-red-600 p-3 text-center">
        Success stories from 1mdm.com sellers
      </h1>

      {/* Slide container */}
      <div className="w-full max-w-5xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="gap-5 min-w-full flex flex-col md:flex-row bg-gray-200 shadow-lg rounded-3xl overflow-hidden h-[600px]"
            >
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <div className="text-red-600 text-4xl mb-2">❝</div>
                <p className="text-gray-800 text-lg">{slide.text}</p>
              </div>

              <div className="md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="max-w-[800px] object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full px-3 py-2 z-10"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full px-3 py-2 z-10"
      >
        →
      </button>
    </div>
  );
}
