import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollIndicator from './components/ScrollIndicator';
import SeoMeta from './components/SeoMeta';
import Training from './pages/Training';
import Work from './pages/Work';
import Reviews from './pages/Reviews';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0D0E11] text-white flex flex-col justify-between selection:bg-[#FF4D00] selection:text-white relative">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/work" element={<Work />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoMeta />
      <Cursor />
      <ScrollIndicator />
      <MainLayout />
    </BrowserRouter>
  );
}
