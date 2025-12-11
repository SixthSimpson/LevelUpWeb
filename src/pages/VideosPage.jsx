import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import bgImage from '../assets/LevelUpHardSummer.jpg';

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

export default function VideosPage() {

  const videos = [
    {
      id: 'R9pZMUJ4Ubw',
      title: 'LEVEL UP Live @ EDC Las Vegas 2025',
      useThumbnail: true,
    },
    {
      id: 'k4wALBhtcio',
      title: 'Level Up Live @ Lost Lands 2024 - Full Set',
      useThumbnail: true,
    },
    {
      id: '2javfeqlYAU',
      title: 'Subtronics x Level Up - Power (feat. Grabbitz)',
      useThumbnail: false,
    },
    {
      id: 'r3rhvFwdAvc',
      title: 'Chappell Roan - Good Luck, Babe! (LEVEL UP & Levity Remix)',
      useThumbnail: true,
    },
  ];

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
          opacity: 0.5,
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
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 text-center"
              style={{
                fontFamily: "'Metal Mania', cursive",
                color: '#00ff00',
                textShadow: '0 0 2px rgba(0, 255, 0, 0.3), 0 0 4px rgba(0, 255, 0, 0.15)',
              }}
            >
              VIDEOS
            </h1>

            {/* Videos Grid - Creative Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-8">
                {videos.map((video, index) => {
                  // Alternate positioning patterns for visual interest
                  const rotations = ['rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[2deg]'];
                  const rotation = rotations[index % rotations.length];

                  return (
                    <div
                      key={index}
                      className={`group ${rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-10`}
                      style={{
                        width: 'clamp(300px, 90vw, 480px)',
                        marginTop: index % 2 === 0 ? '0' : '2rem',
                      }}
                    >
                      {/* Polaroid-style card */}
                      <div
                        className="rounded-xl overflow-hidden shadow-2xl"
                        style={{
                          backgroundColor: '#000',
                          border: '8px solid #1a1a1a',
                          boxShadow: '0 10px 40px rgba(0, 255, 0, 0.15), 0 0 30px rgba(0, 255, 0, 0.1)',
                        }}
                      >
                        {/* Decorative sparkles */}
                        <div className="relative">
                          <div className="absolute -top-2 -right-2 text-2xl animate-pulse z-20">✨</div>
                          <div className="absolute -top-1 -left-3 text-xl animate-pulse z-20" style={{ animationDelay: '0.5s' }}>⭐</div>

                          {/* YouTube Embed or Thumbnail */}
                          <div className="relative w-full overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                            {video.useThumbnail ? (
                              <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 group/thumb"
                              >
                                <img
                                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                  alt={video.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-all flex items-center justify-center">
                                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover/thumb:scale-110 transition-transform shadow-lg">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            ) : (
                              <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            )}
                          </div>
                        </div>

                        {/* Polaroid-style bottom section with handwritten feel */}
                        <div
                          className="p-6 relative"
                          style={{
                            background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
                            borderTop: '2px solid rgba(0, 255, 0, 0.2)',
                          }}
                        >
                          <h3
                            className="text-white text-lg font-bold text-center leading-snug"
                            style={{
                              textShadow: '0 0 8px rgba(0, 255, 0, 0.4)',
                              color: '#00ff00',
                            }}
                          >
                            {video.title}
                          </h3>

                          {/* Cute decorative line */}
                          <div className="mt-3 flex justify-center items-center gap-2">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
                            <div className="text-lime-400 text-xs">🎵</div>
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
