'use client'
import React from 'react';
import { Dumbbell, Monitor, Camera, Apple, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/nick';

type IconName = 'Dumbbell' | 'Monitor' | 'Camera' | 'Apple';

const iconMap: Record<IconName, React.ComponentType<any>> = {
  Dumbbell: Dumbbell,
  Monitor: Monitor,
  Camera: Camera,
  Apple: Apple,
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Services & Programs
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Comprehensive fitness solutions tailored to your goals. From
            one-on-one training to online coaching, I've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon as IconName];
            return (
              <div
                key={service.id}
                className="group bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-emerald-500/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-amber-500 font-semibold">{service.price}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full border-2 border-neutral-700 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black font-semibold py-6 rounded-full transition-all duration-300 group/btn flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;