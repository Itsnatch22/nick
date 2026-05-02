'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa'
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-white tracking-tight">
              KEEPING UP WITH<span className="text-amber-500"> NICK</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Social */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/keepingupwithnicck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-t border-gray-800 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-gray-300 hover:text-amber-500 transition-colors py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-full"
                >
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;