
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoplay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    let timer: number | undefined;
    
    if (autoplay && images.length > 1) {
      timer = window.setInterval(goToNext, interval);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay, interval, images.length]);
  
  if (images.length === 0) return null;
  
  return (
    <div className="carousel relative overflow-hidden rounded-2xl">
      {/* Images */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Controls - Only show if more than one image */}
      {images.length > 1 && (
        <>
          {/* Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-800 hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-800 hover:bg-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
