import React, { useState } from 'react';

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
          </div>
        </div>
      )}
    </div>
  );
};