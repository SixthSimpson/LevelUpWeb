import React, { useState } from 'react';
import { MobileNav } from './MobileNav';
import tiktokLogo from "../assets/SocialMediaAndMusic/TikTok.png";
import spotifyLogo from "../assets/SocialMediaAndMusic/Spotify.png";
import appleMusicLogo from "../assets/SocialMediaAndMusic/Apple.png";
import SoundcloudLogo from "../assets/SocialMediaAndMusic/Soundcloud.png";
import InstagramLogo from "../assets/SocialMediaAndMusic/Instagram.png";
import XLogo from "../assets/SocialMediaAndMusic/X.png";
import FacebookLogo from "../assets/SocialMediaAndMusic/Facebook.png";
import YoutubeLogo from "../assets/SocialMediaAndMusic/Youtube.png";

export const Navbar = () => {
  const [musicOpen, setMusicOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b-2 border-lime-500/20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-8">
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

            <a
              href="https://shop.levelupdub.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-lg hover:text-lime-400 transition-colors"
              style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
            >
              SHOP
            </a>
          </div>

          {/* Center logo/title */}
          <div className="flex-1 flex justify-start md:justify-center pl-2">
            <a href="/">
              <h1
                className="text-4xl font-bold tracking-wider cursor-pointer"
                style={{
                  fontFamily: "'Metal Mania', cursive",
                  color: '#00ff00',
                  textShadow: '0 0 6px rgba(0, 255, 0, 0.5)',
                  letterSpacing: '0.1em',
                }}
              >
                LEVEL UP
              </h1>
            </a>
          </div>

          {/* Mobile hamburger / drawer */}
          <MobileNav />

          {/* Right social icons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://www.tiktok.com/@levelupdub?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiktokLogo}
                alt="TikTok"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://www.instagram.com/levelupdub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramLogo}
                alt="Instagram"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://x.com/levelupdub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={XLogo}
                alt="X"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://www.facebook.com/LEVELUPDUB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://music.apple.com/us/artist/level-up/259031099"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appleMusicLogo}
                alt="Apple Music"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://open.spotify.com/artist/1ZpDxqXS6HAvoZyCzQfKRb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={spotifyLogo}
                alt="Spotify"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://soundcloud.com/levelup999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SoundcloudLogo}
                alt="Soundcloud"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <a
              href="https://www.youtube.com/@levelupdub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeLogo}
                alt="Youtube"
                className="w-6 h-6 object-contain transition-all"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t-2 border-lime-500/20 py-8 relative z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
      <div className="w-full px-4 sm:px-6">
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

          {/* Stay Connected + Social Icons */}
          <div>
            <h4 className="text-lime-400 font-bold mb-4 uppercase tracking-wider">
              Stay Connected
            </h4>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <a
                href="https://www.tiktok.com/@levelupdub?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tiktokLogo}
                  alt="TikTok"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://www.instagram.com/levelupdub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramLogo}
                  alt="Instagram"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://x.com/levelupdub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={XLogo}
                  alt="X"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://www.facebook.com/LEVELUPDUB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FacebookLogo}
                  alt="Facebook"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://music.apple.com/us/artist/level-up/259031099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appleMusicLogo}
                  alt="Apple Music"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://open.spotify.com/artist/1ZpDxqXS6HAvoZyCzQfKRb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={spotifyLogo}
                  alt="Spotify"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://soundcloud.com/levelup999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={SoundcloudLogo}
                  alt="Soundcloud"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <a
                href="https://www.youtube.com/@levelupdub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={YoutubeLogo}
                  alt="Youtube"
                  className="w-5 h-5 object-contain transition-all"
                  style={{ filter: 'brightness(0) invert(1)' }}
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
