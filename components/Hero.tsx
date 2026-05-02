'use client'
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/nick';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-emerald-950/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 lg:mb-8">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="text-gray-300 text-sm font-medium">
                {heroData.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              {heroData.name}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-amber-500 font-semibold mb-4 lg:mb-6">
              {heroData.title}
            </p>

            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/90 mb-6 lg:mb-8 leading-tight">
              {heroData.tagline.split('.').map((word, index) => (
                <span key={index}>
                  {word.trim()}
                  {index < 2 && <span className="text-amber-500">.</span>}
                  {index < 2 && ' '}
                </span>
              ))}
            </p>

            <p className="text-gray-400 text-base lg:text-lg mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Elite personal training and fitness coaching to help you achieve the
              body and confidence you deserve. Your transformation starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1 group"
              >
                {heroData.cta.primary}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#gallery')}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-amber-500 font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg transition-all duration-300"
              >
                {heroData.cta.secondary}
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[500px] xl:w-[480px] xl:h-[580px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src={heroData.image}
                  alt="Nicholas Kondigo"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-3xl -z-10 hidden sm:block" />
              
              <div className="absolute -bottom-4 -left-4 bg-emerald-900/90 backdrop-blur-md rounded-2xl p-4 border border-emerald-700/50 shadow-xl hidden sm:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-500">25K+</p>
                  <p className="text-gray-300 text-xs font-medium">Followers</p>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;