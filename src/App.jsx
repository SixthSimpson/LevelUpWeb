import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Releases from './pages/Releases';
import TourPage from './pages/TourPage';
import VideosPage from './pages/VideosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </BrowserRouter>
  );
}