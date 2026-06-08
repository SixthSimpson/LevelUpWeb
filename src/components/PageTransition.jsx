import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import framesLoop from '../assets/FramesLoop.mp4';
import levelUpLogo from '../assets/LEVEL_UP_LOGO_lime_trimmed.png';

export const PageTransition = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setActive(true);
  }, [location.pathname]);

  useEffect(() => {
    if (!active || !overlayRef.current || !logoRef.current) return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(logoRef.current, { scale: 0.85, opacity: 0 });

    const tl = gsap.timeline({ onComplete: () => setActive(false) });

    tl.to(overlayRef.current, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(logoRef.current, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.5)' }, '-=0.05')
      .to(logoRef.current, { scale: 1.04, duration: 0.45, ease: 'sine.inOut', yoyo: true, repeat: 1 }, '+=0.15')
      .to(overlayRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.1');

    return () => tl.kill();
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      >
        <source src={framesLoop} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 0, 0.07) 0%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />

      <img
        ref={logoRef}
        src={levelUpLogo}
        alt="Level Up"
        className="relative z-10 w-44 sm:w-52 md:w-64 h-auto"
        style={{
          filter: 'drop-shadow(0 0 18px rgba(0, 255, 0, 0.95)) drop-shadow(0 0 40px rgba(0, 255, 0, 0.5))'
        }}
      />
    </div>
  );
};
