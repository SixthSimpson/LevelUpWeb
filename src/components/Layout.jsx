import React, { useState } from 'react';
import tiktokLogo from "../assets/TikTok.png";
import spotifyLogo from "../assets/Spotify.png";
import appleMusicLogo from "../assets/Apple.png";
import SoundcloudLogo from "../assets/Soundcloud.png";
import InstagramLogo from "../assets/Instagram.png";
import XLogo from "../assets/X.png";
import FacebookLogo from "../assets/Facebook.png";
import YoutubeLogo from "../assets/Youtube.png";


const Navbar = () => {
  const [musicOpen, setMusicOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-lime-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Left links */}
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="text-white font-bold text-lg hover:text-lime-400 transition-colors"
              style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
            >
              HOME
            </a>

            {/* MUSIC dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMusicOpen(true)}
              onMouseLeave={() => setMusicOpen(false)}
            >
              <button
                className="text-white font-bold text-lg hover:text-lime-400 transition-colors flex items-center gap-2"
                style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
                type="button"
              >
                MUSIC
                <span className="text-sm">▼</span>
              </button>

              {musicOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-black border-2 border-lime-500/40 rounded-lg overflow-hidden">
                    <a
                      href="/releases"
                      className="block px-6 py-3 text-white hover:bg-lime-500/20 hover:text-lime-400 transition-all"
                    >
                      Releases
                    </a>
                    <a
                      href="/videos"
                      className="block px-6 py-3 text-white hover:bg-lime-500/20 hover:text-lime-400 transition-all"
                    >
                      Videos
                    </a>
                    <a
                      href="/playlists"
                      className="block px-6 py-3 text-white hover:bg-lime-500/20 hover:text-lime-400 transition-all"
                    >
                      Playlists
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/tour"
              className="text-white font-bold text-lg hover:text-lime-400 transition-colors"
              style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
            >
              TOUR
            </a>

            {/* SHOP dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button
                className="text-white font-bold text-lg hover:text-lime-400 transition-colors flex items-center gap-2"
                style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
                type="button"
              >
                SHOP
                <span className="text-sm">▼</span>
              </button>

              {shopOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-black border-2 border-lime-500/40 rounded-lg overflow-hidden">
                    <a
                      href="https://shop.levelupdub.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-white hover:bg-lime-500/20 hover:text-lime-400 transition-all"
                    >
                      Merch
                    </a>
                    <a
                      href="/accessories"
                      className="block px-6 py-3 text-white hover:bg-lime-500/20 hover:text-lime-400 transition-all"
                    >
                      Accessories
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center logo/title */}
          <div className="flex-1 flex justify-center">
            <h1
              className="text-4xl font-bold tracking-wider"
              style={{
                fontFamily: "'Metal Mania', cursive",
                color: '#00ff00',
                textShadow:
                  '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.4)',
                letterSpacing: '0.1em',
              }}
            >
              LEVEL UP
            </h1>
          </div>

          {/* Right social icons */}
          <div className="flex items-center gap-6">
            {/* TikTok - White logo */}
            <a href="https://tiktok.com/@LevelUpDub" target="_blank" rel="noopener noreferrer">
              <img 
                src={tiktokLogo}
                alt="TikTok" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
            </a>

            <a href="https://www.instagram.com/levelupdub" target="_blank" rel="noopener noreferrer">
            <img 
                src={InstagramLogo} 
                alt="Instagram" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            <a href="https://x.com/levelupdub" target="_blank" rel="noopener noreferrer">
            <img 
                src={XLogo} 
                alt="X" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            <a href="https://www.facebook.com/LEVELUPDUB" target="_blank" rel="noopener noreferrer">
            <img 
                src={FacebookLogo} 
                alt="Facebook" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            {/* Apple Music - White logo */}
            <a href="https://music.apple.com/us/artist/level-up/259031099" target="_blank" rel="noopener noreferrer">
            <img 
                src={appleMusicLogo} 
                alt="Apple Music" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            <a href="https://open.spotify.com/artist/1ZpDxqXS6HAvoZyCzQfKRb" target="_blank" rel="noopener noreferrer">
            <img 
                src={spotifyLogo} 
                alt="Spotify" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            <a href="https://soundcloud.com/levelup999" target="_blank" rel="noopener noreferrer">
            <img 
                src={SoundcloudLogo} 
                alt="Soundcloud" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>

            <a href="https://www.youtube.com/@levelupdub" target="_blank" rel="noopener noreferrer">
            <img 
                src={YoutubeLogo} 
                alt="Youtube" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
            />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-lime-500/20 py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-black mb-4"
              style={{
                color: '#00ff00',
                textShadow: '0 0 5px rgba(0, 255, 0, 0.3)',
              }}
            >
              LEVEL UP
            </h3>
            <p className="text-gray-400 text-sm">
              © 2025 Level Up. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lime-400 font-bold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="/about"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="/press"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                Press Kit
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lime-400 font-bold mb-4 uppercase tracking-wider">
              Stay Connected
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="https://tiktok.com/@LevelUpDub" target="_blank" rel="noopener noreferrer">
              <img 
                src={tiktokLogo}
                alt="TikTok" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://www.instagram.com/levelupdub" target="_blank" rel="noopener noreferrer">
              <img 
                src={InstagramLogo} 
                alt="Instagram" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://x.com/levelupdub" target="_blank" rel="noopener noreferrer">
              <img 
                src={XLogo} 
                alt="X" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://www.facebook.com/LEVELUPDUB" target="_blank" rel="noopener noreferrer">
              <img 
                  src={FacebookLogo} 
                  alt="Facebook" 
                  className="w-5 h-5 object-contain transition-all"
                  style={{ 
                  filter: 'brightness(0) invert(1)'
                  }}
              />
              </a>

              <a href="https://music.apple.com/us/artist/level-up/259031099" target="_blank" rel="noopener noreferrer">
              <img 
                src={appleMusicLogo} 
                alt="Apple Music" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://open.spotify.com/artist/1ZpDxqXS6HAvoZyCzQfKRb" target="_blank" rel="noopener noreferrer">
              <img 
                src={spotifyLogo} 
                alt="Spotify" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://soundcloud.com/levelup999" target="_blank" rel="noopener noreferrer">
              <img 
                src={SoundcloudLogo} 
                alt="Soundcloud" 
                className="w-5 h-5 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
              </a>

              <a href="https://www.youtube.com/@levelupdub" target="_blank" rel="noopener noreferrer">
              <img 
                src={YoutubeLogo} 
                alt="Youtube" 
                className="w-6 h-6 object-contain transition-all"
                style={{ 
                filter: 'brightness(0) invert(1)'
                }}
              />
            </a>

            </div>
            <p className="text-gray-400 text-sm">
              Follow for updates, releases, and tour dates
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Navbar, Footer };
