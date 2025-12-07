import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import cdjBase from './assets/cdj-base.png';
import platter from './assets/platter.png';
import bgPhoto1 from './assets/LevelUpBillGraham.jpg';
import { Navbar, Footer } from './components/Layout';

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

    // Continuous platter spin
    gsap.to(platterRef.current, {
      rotation: 360,
      duration: 2,
      ease: 'none',
      repeat: -1
    });

    // Loading sequence
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

    // Subtle wobble effect
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
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-[9999] overflow-hidden"
    >
      <TwinklingStars />
      
      <div className="absolute inset-0 bg-gradient-radial from-green-400/10 via-transparent to-transparent" />
      
      {/* CDJ Container */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center z-10">
        <img 
          src={cdjBase}
          alt="CDJ Base"
          className="absolute w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 20px 60px rgba(0, 255, 0, 0.4))' }}
        />
        
        <img
          ref={platterRef}
          src={platter}
          alt="CDJ Platter"
          className="absolute object-contain"
          style={{
            width: '600px',
            height: '600px',
            top: '62%',
            left: '48.5%',
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 30px rgba(0, 255, 0, 0.8))'
          }}
        />
      </div>

      <div className="mt-8 text-white text-2xl font-bold tracking-[5px] uppercase z-10" style={{ 
        textShadow: '0 0 20px rgba(0, 255, 0, 1), 0 0 40px rgba(0, 255, 0, 0.6)'
      }}>
        Loading
      </div>

      <div className="mt-4 text-6xl font-black font-mono z-10" style={{
        color: '#00ff00',
        textShadow: '0 0 30px rgba(0, 255, 0, 1), 0 0 60px rgba(0, 255, 0, 0.6), 0 0 90px rgba(0, 255, 0, 0.3)'
      }}>
        {percentage}%
      </div>

      <div className="mt-8 w-[400px] h-3 bg-gray-900 rounded-full overflow-hidden border-2 z-10" style={{
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

// Main App Component
export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <CDJLoader onLoadComplete={() => setShowContent(true)} />
      
      {showContent && (
        <div className="min-h-screen bg-black flex flex-col relative">
          
          {/* Background Image with Wash Effect */}
          <div 
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: `url(${bgPhoto1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: '0.5',
              filter: 'grayscale(20%) brightness(0.7)'
            }}
          />
          
          {/* Green overlay for theme consistency */}
          <div 
            className="fixed inset-0 z-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
              mixBlendMode: 'multiply'
            }}
          />
          
          <Navbar />
          
          <main className="flex-grow pt-20 relative z-10">
            <TwinklingStars />

            <div className="flex flex-col items-center justify-center text-center px-4 py-20 min-h-screen">
              <h1 className="text-8xl font-black mb-5 tracking-tight z-10" style={{ 
                color: '#fff',
                textShadow: '0 0 40px rgba(0, 255, 0, 1), 0 0 80px rgba(0, 255, 0, 0.5), 0 0 120px rgba(0, 255, 0, 0.3)'
              }}>
                LEVEL UP
              </h1>
            </div>
            
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
