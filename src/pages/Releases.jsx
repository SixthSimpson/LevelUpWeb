import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import bgImage from '../assets/LevelUpMaryDroppinzDolabCoachella2026_0417_092409-4069_OHDAGYO.jpg';
import epCover from '../assets/MusicReleases/LevelUpxZingara.jpg';
import believeCover from '../assets/MusicReleases/Believe.png';
import dingusCover from '../assets/MusicReleases/Dingus.jpg';
import palmOfYourHandCover from '../assets/MusicReleases/PalmOfYourHand.jpg';
import power from '../assets/MusicReleases/Power.jpg';

const EP_TRACKS = [
  {
    title: 'The Other Side',
    artist: 'LEVEL UP',
    url: 'https://soundcloud.com/zingaraa/the-other-side?in=levelup999/sets/parallel-spirits-ep',
  },
  {
    title: 'The Medium',
    artist: 'Zingara & LEVEL UP',
    url: 'https://soundcloud.com/zingaraa/zingara-level-up-the-medium?in=levelup999/sets/parallel-spirits-ep',
  },
  {
    title: 'The Crossroads',
    artist: 'Zingara',
    url: 'https://soundcloud.com/zingaraa/the-crossroads?in=levelup999/sets/parallel-spirits-ep',
  },
];

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

export default function Releases() {
  const releases = [
    {
      title: "Believe",
      artist: "Level Up",
      cover: believeCover,
      spotifyUrl: "https://open.spotify.com/track/2HGWEdmzqykDOKbAxRd1JE",
    },
    {
      title: "Dingus",
      artist: "Subtronics, Wooli, Level Up",
      cover: dingusCover,
      spotifyUrl: "https://open.spotify.com/track/4xWXrhg0Vwc29lbeyHZsYt?si=b4a8e88f5d024648",
    },
    {
      title: "Palm Of Your Hand",
      artist: "Borgore, Level Up",
      cover: palmOfYourHandCover,
      spotifyUrl: "https://open.spotify.com/track/3mu8f4BXjYVvJNqIOeGqWp?si=874c8d73e3e34592",
    },
    {
      title: "Power",
      artist: "Subtronics, Level Up, Grabbitz",
      cover: power,
      spotifyUrl: "https://open.spotify.com/track/3OPcGN44zYI7eg1OwHrSD0?si=2b2446c8794e49c2",
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
              LATEST RELEASES
            </h1>

            {/* RECENT RELEASE: Parallel Spirits EP */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lime-400 text-xs font-bold uppercase tracking-widest text-center mb-4"
                style={{ textShadow: '0 0 8px rgba(0,255,0,0.6)' }}>
                Recent Release
              </p>

              <div
                className="rounded-xl border-2 overflow-hidden"
                style={{
                  borderColor: 'rgba(0, 255, 0, 0.35)',
                  boxShadow: '0 0 40px rgba(0, 255, 0, 0.15)',
                  backgroundColor: 'rgba(0,0,0,0.88)',
                }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Cover art */}
                  <a
                    href="https://soundcloud.com/levelup999/sets/parallel-spirits-ep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group md:w-64 lg:w-72 flex-shrink-0 relative overflow-hidden"
                  >
                    <img
                      src={epCover}
                      alt="Parallel Spirits EP"
                      className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <span
                        className="text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          color: '#00ff00',
                          fontFamily: "'Metal Mania', cursive",
                          textShadow: '0 0 20px rgba(0, 255, 0, 0.9)',
                        }}
                      >
                        ▶ FULL EP
                      </span>
                    </div>
                  </a>

                  {/* Track list */}
                  <div className="flex flex-col justify-center p-6 gap-2 flex-1">
                    <h2
                      className="text-2xl md:text-3xl font-black mb-1"
                      style={{
                        fontFamily: "'Metal Mania', cursive",
                        color: '#00ff00',
                        textShadow: '0 0 8px rgba(0,255,0,0.5)',
                      }}
                    >
                      Parallel Spirits EP
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">LEVEL UP × Zingara</p>

                    {EP_TRACKS.map((track, i) => (
                      <a
                        key={i}
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group/track"
                        style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(0,255,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                        }}
                      >
                        <span
                          className="text-lime-500 font-bold text-sm w-4 flex-shrink-0 opacity-50 group-hover/track:opacity-100 transition-opacity"
                        >
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm truncate">{track.title}</p>
                          <p className="text-gray-400 text-xs truncate">{track.artist}</p>
                        </div>
                        <span
                          className="text-lime-400 text-xs font-bold opacity-0 group-hover/track:opacity-100 transition-opacity flex-shrink-0"
                          style={{ textShadow: '0 0 8px rgba(0,255,0,0.6)' }}
                        >
                          ▶ PLAY
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <h2
              className="text-2xl md:text-3xl font-black mb-8 text-center"
              style={{
                fontFamily: "'Metal Mania', cursive",
                color: '#00ff00',
                textShadow: '0 0 2px rgba(0, 255, 0, 0.3)',
              }}
            >
              MORE RELEASES
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto justify-items-center">
              {releases.map((release, index) => (
                <a
                key={index}
                href={release.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group relative overflow-hidden rounded-lg border-2
                    transition-all duration-300 hover:scale-105
                    w-full max-w-[180px] sm:max-w-xs md:max-w-sm
                    flex flex-col
                "
                style={{
                    borderColor: 'rgba(0, 255, 0, 0.3)',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 0, 0.8)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 0, 0.3)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.2)';
                }}
                >
                <div className="relative w-full overflow-hidden">
                  <img
                      src={release.cover}
                      alt={release.title}
                      className="
                      w-full aspect-[4/5]
                      sm:aspect-square
                      object-cover
                      transition-transform duration-300
                      group-hover:scale-110
                      "
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <span
                        className="text-2xl sm:text-3xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          color: '#00ff00',
                          textShadow: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.5)',
                          fontFamily: "'Metal Mania', cursive",
                        }}
                      >
                      ▶ PLAY
                      </span>
                  </div>
                </div>

                <div className="p-2 sm:p-4 bg-gray-900 w-full">
                    <h3 className="text-white text-xs sm:text-lg font-bold mb-0.5 sm:mb-1 leading-tight">{release.title}</h3>
                    <p className="text-gray-400 text-[10px] sm:text-sm leading-tight">{release.artist}</p>
                </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
