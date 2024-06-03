import React, { useState, useEffect } from 'react';
import { layout } from '../../style'; 
import Button from './Button';
import { feedback } from './info';
import FeedbackCard from './FeedbackCard';

const Map = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = feedback.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="population" className="mt-10">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-yellowpro xs:leading-[76.8px] leading-[66.8px] w-full text-center mt-10">
        Worried servicing, your car brand?
      </h2>
      <div className={layout.section}>
        <div className={layout.sectionInfo}>
          <p className="max-w-[700px]">
            AutoCarepro is here to stay and work dedicatedly towards spreading
            the awareness among car brands about their car hygiene habits,
            cleanliness, durability of exterior look and other common cleaning
            tips.
          </p>
          <Button styles="mt-5" className="justify-center items-center text-center" />
        </div>
        <div id="feedback-carousel" className="relative max-w-[700px] overflow-hidden justify-center text-center">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {feedback.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-full flex justify-center">
                <div className="flex justify-center w-full h-full">
                  <FeedbackCard key={card.id} {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
