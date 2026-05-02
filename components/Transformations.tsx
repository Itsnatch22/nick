import React, { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { transformationsData } from '../data/nick';

const Transformations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="transformations" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
            Real Results
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client Transformations
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            These are real people who committed to the process. Your
            transformation could be next.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {transformationsData.map((transformation, index) => (
            <div
              key={transformation.id}
              className={`group relative bg-neutral-900/50 border rounded-3xl overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? 'border-amber-500 scale-105 shadow-2xl shadow-amber-500/10'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <img
                      src={transformation.beforeImage}
                      alt={`${transformation.name} before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="w-1/2 relative">
                    <img
                      src={transformation.afterImage}
                      alt={`${transformation.name} after`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 right-4 bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      After
                    </span>
                  </div>
                </div>
                {/* Divider Line */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-amber-500 transform -translate-x-1/2 z-10" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {transformation.name}
                  </h3>
                  <span className="text-amber-500 font-semibold text-sm">
                    {transformation.duration}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="bg-emerald-500/10 rounded-lg px-3 py-2">
                    <p className="text-emerald-400 text-xs font-medium">
                      {transformation.weightLost}
                    </p>
                  </div>
                  <div className="bg-amber-500/10 rounded-lg px-3 py-2">
                    <p className="text-amber-400 text-xs font-medium">
                      {transformation.muscleGained}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  "{transformation.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 group"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transformations;