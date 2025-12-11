import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import cdjBase from '../assets/cdj-base.png';
import platter from '../assets/platter.png';
import bgPhoto1 from '../assets/LevelUpBillGraham.jpg';
import bgVideo1 from '../assets/HauntedMansionLoop.mp4';
import recentRelease from '../assets/MusicReleases/Believe.png';
import { Navbar, Footer } from '../components/Layout';
import { TourDates } from '../components/TourDates';

// Twinkling Stars Component
const TwinklingStars = () => {
  const starPositions = [
    { top: '10%', left: '15%', size: 'text-4xl', delay: 0 },
    { top: '20%', left: '85%', size: 'text-3xl', delay: 0.5 },
    { top: '15%', left: '70%', size: 'text-2xl', delay: 1 },
    { top: '25%', left: '25%', size: 'text-3xl', delay: 1.5 },
    { top: '35%', left: '90%', size: 'text-2xl', delay: 0.3 },
    { top: '45%', left: '8%', size: 'text-4xl', delay: 0.8 },
    { top: '55%', left: '92%', size: 'text-3xl', delay: 1.2 },
    { top: '65%', left: '12%', size: 'text-2xl', delay: 0.6 },
    { top: '70%', left: '80%', size: 'text-4xl', delay: 1.8 },
    { top: '75%', left: '30%', size: 'text-3xl', delay: 0.4 },
    { top: '80%', left: '60%', size: 'text-2xl', delay: 1.4 },
    { top: '85%', left: '20%', size: 'text-3xl', delay: 0.9 },
    { top: '90%', left: '75%', size: 'text-4xl', delay: 1.6 },
    { top: '30%', left: '50%', size: 'text-2xl', delay: 0.7 },
    { top: '40%', left: '40%', size: 'text-3xl', delay: 1.1 },
  ];

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      {starPositions.map((star, index) => (
        <div
          key={index}
          className={`absolute ${star.size} text-purple-500 pointer-events-none`}
          style={{
            top: star.top,
            left: star.left,
            textShadow: '0 0 20px rgba(168, 85, 247, 1), 0 0 40px rgba(168, 85, 247, 0.6)',
            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        >
          ✦
        </div>
      ))}
    </>
  );
};

// CDJ Loader Component
const CDJLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const platterRef = useRef(null);
  const pitchFillRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };
    const tl = gsap.timeline();

    gsap.to(platterRef.current, {
      rotation: 360,
      duration: 2,
      ease: 'none',
      repeat: -1
    });

    tl.to(counter, {
      value: 100,
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: function() {
        setPercentage(Math.floor(counter.value));
      }
    })
    .to(pitchFillRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power2.inOut'
    }, 0)
    .to(platterRef.current, {
      timeScale: 3,
      duration: 3,
      ease: 'power2.inOut'
    }, 0)
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsLoading(false);
        if (onLoadComplete) onLoadComplete();
      }
    });

    gsap.to(platterRef.current, {
      scale: 1.02,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(platterRef.current);
    };
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-[9999] overflow-hidden px-4"
    >
      <TwinklingStars />
      
      <div className="absolute inset-0 bg-gradient-radial from-green-400/10 via-transparent to-transparent" />
      
      <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-square flex items-center justify-center z-10 mb-6">
        
        <img 
          src={cdjBase}
          alt="CDJ Base"
          className="absolute inset-0 w-full h-full object-contain"
        />
        
        <div 
          ref={platterRef}
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            top: '62%',
            left: '48%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src={platter}
            alt="CDJ Platter"
            className="w-[101%] h-[101%] object-contain"
          />
        </div>
      </div>

      <div className="text-white text-xl sm:text-2xl font-bold tracking-[5px] uppercase z-10 mb-3" style={{ 
        textShadow: '0 0 20px rgba(0, 255, 0, 1), 0 0 40px rgba(0, 255, 0, 0.6)'
      }}>
        LOADING
      </div>

      <div className="text-5xl sm:text-6xl md:text-7xl font-black font-mono z-10 mb-6" style={{
        color: '#00ff00',
        textShadow: '0 0 30px rgba(0, 255, 0, 1), 0 0 60px rgba(0, 255, 0, 0.6)'
      }}>
        {percentage}%
      </div>

      <div className="w-full max-w-[350px] sm:max-w-[400px] h-3 bg-gray-900 rounded-full overflow-hidden border-2 z-10" style={{
        borderColor: 'rgba(0, 255, 0, 0.4)',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
      }}>
        <div
          ref={pitchFillRef}
          className="h-full w-0"
          style={{ 
            background: 'linear-gradient(90deg, #00ff00, #00ff88, #00ff00)',
            boxShadow: '0 0 30px rgba(0, 255, 0, 1), inset 0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>
    </div>
  );
};

// Main HomePage Component
export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <CDJLoader onLoadComplete={() => setShowContent(true)} />
      
      {showContent && (
        <div className="min-h-screen bg-black">
          <Navbar />
          
          <main className="relative">

            {/* SECTION 1: RECENT RELEASE WITH VIDEO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                  opacity: '0.70',
                  filter: 'grayscale(20%) brightness(0.8)'
                }}
              >
                <source src={bgVideo1} type="video/mp4" />
              </video>

              <div
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  mixBlendMode: 'multiply'
                }}
              />

              {/* Bottom Fade to Black for Smooth Transition */}
              <div
                className="absolute bottom-0 left-0 right-0 h-48 z-5"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)'
                }}
              />
              
              <div className="absolute inset-0 z-10">
                <TwinklingStars />
              </div>

              <div className="relative z-20 flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight" style={{
                  fontFamily: "'Metal Mania', cursive",
                  color: '#9a40eeff',
                  textShadow: '0 0 3px rgba(135, 14, 249, 1)',
                }}>
                  RECENT RELEASE
                </h1>
                
                <a
                  href="https://open.spotify.com/track/2HGWEdmzqykDOKbAxRd1JE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 mb-4 block group w-64 sm:w-80 md:max-w-md md:w-full px-4"
                >
                  <div 
                    className="relative overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'rgba(168, 85, 247, 0.5)',
                      boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 1)';
                      e.currentTarget.style.boxShadow = '0 0 40px rgba(168, 85, 247, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)';
                    }}
                  >
                    <img 
                      src={recentRelease} 
                      alt="Recent Release"
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <span
                        className="text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          color: '#9a40eeff',
                          textShadow: '0 0 20px rgba(154, 64, 238, 0.8), 0 0 40px rgba(154, 64, 238, 0.5)',
                          fontFamily: "'Metal Mania', cursive",
                        }}
                      >
                        CLICK TO LISTEN
                      </span>
                    </div>
                  </div>
                </a>

                <div className="mt-12 flex flex-col items-center">
                  <p className="text-lime-400 text-sm md:text-base font-bold uppercase tracking-widest mb-2" style={{
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.6)'
                  }}>
                    Scroll Down
                  </p>
                  <div className="animate-bounce">
                    <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: TOUR DATES */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
              {/* Photo Background */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                  backgroundImage: `url(${bgPhoto1})`,
                  opacity: '0.7',
                  filter: 'grayscale(20%) brightness(0.8)'
                }}
              />

              {/* Top Fade from Black for Smooth Transition */}
              <div
                className="absolute top-0 left-0 right-0 h-48 z-5"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, transparent 100%)'
                }}
              />

              <div
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  mixBlendMode: 'multiply'
                }}
              />

              <div className="absolute inset-0 z-10">
                <TwinklingStars />
              </div>

              <div className="relative z-20 w-full">
                <TourDates />
              </div>
            </section>

          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}