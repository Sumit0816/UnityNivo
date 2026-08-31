import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSection.css';

/**
 * Hero Banner Component - Full Screen Animated Image Slider with Text Overlay
 */
export default function HeroSection({ onJoinNow }) {
  const slides = [
    {
      id: 1,
      titleCyan: 'DREAM BIG',
      titleWhite: 'TRAVEL MORE',
      subtitle: 'ACHIEVE YOUR GOALS WITH',
      highlightText: 'UNITY NIVO',
      btnText: 'JOIN NOW',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 2,
      titleCyan: 'EXPLORE THE WORLD',
      titleWhite: 'WITH UNITY NIVO',
      subtitle: 'EMPOWERING YOUR FINANCIAL FREEDOM',
      highlightText: 'UNITED WE GROW',
      btnText: 'REGISTER NOW',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 3,
      titleCyan: 'UNITED WE GROW',
      titleWhite: 'BUILD YOUR NETWORK',
      subtitle: 'TRANSPARENT DAILY ROI & REWARDS WITH',
      highlightText: 'UNITY NIVO',
      btnText: 'START EARNING',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1920&q=80',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      id="home" 
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div 
            className="hero-slide-bg" 
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-slide-overlay" />
          
          <div className="container hero-slide-container">
            <div className="hero-slide-content">
              <h1 className="hero-title animate-text">
                <span className="title-cyan">{slide.titleCyan}</span>
                <span className="title-white">{slide.titleWhite}</span>
              </h1>

              <p className="hero-subtitle animate-sub">
                {slide.subtitle} <br />
                <strong>{slide.highlightText}</strong>
              </p>

              <div className="hero-cta animate-cta">
                <button className="btn btn-gold hero-btn" onClick={onJoinNow}>
                  {slide.btnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
        <ChevronLeft size={28} />
      </button>
      <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="hero-slider-dots">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


