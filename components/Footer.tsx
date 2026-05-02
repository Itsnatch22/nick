'use client'
import React from 'react';
import {
  ArrowUp,
  Heart,
  MapPin,
} from 'lucide-react';
import { socialLinks, contactInfo } from '../data/nick';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                KEEPING UP WITH<span className="text-amber-500"> NICK</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Elite personal training and fitness coaching in Nairobi, Kenya.
              Transform your body, elevate your confidence, and achieve the
              results you've always wanted.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect With Me</h3>
            <div className="flex gap-4 mb-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow my fitness journey and get daily inspiration, workout tips,
              and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Nicholas Kondigo. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            in Nairobi
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all duration-200">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;