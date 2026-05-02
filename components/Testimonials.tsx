'use client'
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/nick';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say
            about their experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 md:p-12 relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-black" />
            </div>

            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
                "{testimonialsData[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonialsData[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-amber-500'
                    : 'w-3 h-3 bg-neutral-700 hover:bg-neutral-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;