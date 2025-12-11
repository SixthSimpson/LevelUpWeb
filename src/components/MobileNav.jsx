import React, { useState } from 'react';
import tiktokLogo from "../assets/SocialMediaAndMusic/TikTok.png";
import spotifyLogo from "../assets/SocialMediaAndMusic/Spotify.png";
import appleMusicLogo from "../assets/SocialMediaAndMusic/Apple.png";
import SoundcloudLogo from "../assets/SocialMediaAndMusic/Soundcloud.png";
import InstagramLogo from "../assets/SocialMediaAndMusic/Instagram.png";
import XLogo from "../assets/SocialMediaAndMusic/X.png";
import FacebookLogo from "../assets/SocialMediaAndMusic/Facebook.png";
import YoutubeLogo from "../assets/SocialMediaAndMusic/Youtube.png";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 border-t-2 border-lime-500/20">
          <div className="flex flex-col py-4">
            <a href="/" className="px-6 py-3 text-white hover:bg-lime-500/20">HOME</a>
            <a href="/releases" className="px-6 py-3 text-white hover:bg-lime-500/20">RELEASES</a>
            <a href="/videos" className="px-6 py-3 text-white hover:bg-lime-500/20">VIDEOS</a>
            <a href="/tour" className="px-6 py-3 text-white hover:bg-lime-500/20">TOUR</a>
            <a href="https://shop.levelupdub.net/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-white hover:bg-lime-500/20">SHOP</a>

            {/* Social Media Links */}
            <div className="px-6 py-4 border-t-2 border-lime-500/20 mt-2">
              <p
                className="text-sm font-bold uppercase tracking-wider mb-3"
                style={{
                  fontFamily: "'Metal Mania', cursive",
                  color: '#00ff00',
                  textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                Follow Us
              </p>
              <div className="flex flex-wrap items-center gap-4">
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
        </div>
      )}
    </div>
  );
};