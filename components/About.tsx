'use client'
import React from 'react';
import { Award, Users, Trophy, Heart } from 'lucide-react';
import { aboutData } from '../data/nick';

const About = () => {
  const statIcons = [Users, Award, Trophy, Heart];

  return (
    <section id="about" className="py-16 lg:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={aboutData.image}
                  alt="Nicholas Kondigo"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 right-4 lg:-bottom-8 lg:-right-8 bg-emerald-900/90 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-emerald-700/50 shadow-2xl">
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-amber-500">5+</p>
                  <p className="text-gray-300 text-xs lg:text-sm font-medium">Years of Excellence</p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500/30 rounded-3xl -z-10 hidden lg:block" />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
              {aboutData.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              {aboutData.title}
            </h2>

            <div className="space-y-4 lg:space-y-5 text-gray-400 leading-relaxed text-sm lg:text-base">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 lg:mt-10">
              <h3 className="text-white font-semibold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                {aboutData.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-neutral-900 border border-neutral-800 text-gray-300 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {aboutData.stats.map((stat, index) => {
            const IconComponent = statIcons[index];
            return (
              <div
                key={index}
                className="text-center p-4 lg:p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-amber-500/10 rounded-xl mb-3 lg:mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <IconComponent className="w-5 h-5 lg:w-7 lg:h-7 text-amber-500" />
                </div>
                <p className="text-2xl lg:text-4xl font-bold text-white mb-1 lg:mb-2">{stat.number}</p>
                <p className="text-gray-500 text-xs lg:text-sm font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;