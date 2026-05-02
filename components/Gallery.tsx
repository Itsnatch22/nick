'use client'
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { Button } from './ui/button';

const galleryImages = [
  {
    id: 1,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/lb47hg8n_Nick%201.png",
    alt: "Nicholas Kondigo - Fitness Model Photoshoot",
    category: "Modeling"
  },
  {
    id: 2,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/d4zqsksg_Nick%202.png",
    alt: "Nicholas Kondigo - Gym Training",
    category: "Training"
  },
  {
    id: 3,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/b9ysvd2f_Nick%203.png",
    alt: "Nicholas Kondigo - Fashion Fitness",
    category: "Modeling"
  },
  {
    id: 4,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/r3bpcrxn_Nick%204.png",
    alt: "Nicholas Kondigo - Pull-up Training",
    category: "Training"
  },
  {
    id: 5,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/txhswgkv_Nick%205.png",
    alt: "Nicholas Kondigo - Outdoor Photoshoot",
    category: "Modeling"
  },
  {
    id: 6,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/r8zlnfod_Nick%206.png",
    alt: "Nicholas Kondigo - Urban Style",
    category: "Lifestyle"
  },
  {
    id: 7,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/nz7ljibq_Nick%207.png",
    alt: "Nicholas Kondigo - City Vibes",
    category: "Lifestyle"
  },
  {
    id: 8,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/5mt1pv1r_Nick%208.png",
    alt: "Nicholas Kondigo - Portrait",
    category: "Modeling"
  },
  {
    id: 9,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/3l0ba1gs_Nick%209.png",
    alt: "Nicholas Kondigo - Fitness Lifestyle",
    category: "Lifestyle"
  },
  {
    id: 10,
    src: "https://customer-assets.emergentagent.com/job_nicholas-fitness/artifacts/2bzriote_Nick%2010.png",
    alt: "Nicholas Kondigo - Creative Shot",
    category: "Modeling"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Modeling', 'Training', 'Lifestyle'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: string) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My Gallery
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A showcase of my fitness journey, modeling work, and lifestyle.
            Follow my progress on Instagram for daily updates.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-500 text-black'
                  : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => {
            // Create varied heights for masonry effect
            const isLarge = index === 0 || index === 5;
            const isTall = index === 2 || index === 7;
            
            return (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  isLarge ? 'col-span-2 row-span-2' : ''
                } ${isTall ? 'row-span-2' : ''}`}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    isLarge ? 'h-[300px] sm:h-[400px] md:h-[500px]' : 
                    isTall ? 'h-[250px] sm:h-[350px] md:h-[400px]' : 
                    'h-[150px] sm:h-[180px] md:h-[200px]'
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <div>
                    <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <p className="text-white text-xs md:text-sm mt-1 line-clamp-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://www.instagram.com/keepingupwithnicck', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 group"
          >
            <FaInstagram className="w-5 h-5 mr-2" />
            Follow on Instagram
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center text-white hover:text-black transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center text-white hover:text-black transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;