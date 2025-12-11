import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import { TourDates } from '../components/TourDates';
import bgImage from '../assets/LevelUpSubHardSummer.jpg';

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
            animationDelay: `${star.delay}s`,
          }}
        >
          ✦
        </div>
      ))}
    </>
  );
};

export default function TourPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* Gradient overlay ON TOP of background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a2a0a 50%, #000000 100%)',
          opacity: 0.35,
        }}
      />

      {/* Stars ON TOP of gradient */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <TwinklingStars />
      </div>

      {/* Page content */}
      <main className="relative z-20 pt-20">
        <section className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <TourDates />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
