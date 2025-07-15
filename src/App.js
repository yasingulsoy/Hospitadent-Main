import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components';
import AboutPage from './pages/About';
import BranchPage from './pages/BranchPage';
import Branches from './pages/Branches';
import Staff from './pages/Staff';

const Placeholder = ({ lang }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700">
    {lang} Sayfası (İçerik ve görseller buraya gelecek)
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <Clients />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/idari-kadro" element={<Staff />} />
        
        {/* Şubeler Ana Sayfa */}
        <Route path="/subelerimiz" element={<Branches />} />
        
        {/* Şube Sayfaları */}
        <Route path="/subelerimiz/mecidiyekoy" element={<BranchPage />} />
        <Route path="/subelerimiz/bagcilar" element={<BranchPage />} />
        <Route path="/subelerimiz/bakirkoy" element={<BranchPage />} />
        <Route path="/subelerimiz/fatih" element={<BranchPage />} />
        <Route path="/subelerimiz/camlica" element={<BranchPage />} />
        <Route path="/subelerimiz/pendik" element={<BranchPage />} />
        <Route path="/subelerimiz/serifali" element={<BranchPage />} />
        <Route path="/subelerimiz/cevizlibag" element={<BranchPage />} />
        <Route path="/subelerimiz/gokturk" element={<BranchPage />} />
        <Route path="/subelerimiz/kayseri" element={<BranchPage />} />
        <Route path="/subelerimiz/bodrum" element={<BranchPage />} />
        <Route path="/subelerimiz/alanya" element={<BranchPage />} />
        <Route path="/subelerimiz/antalya" element={<BranchPage />} />
        <Route path="/subelerimiz/ankara" element={<BranchPage />} />
        <Route path="/subelerimiz/denizli" element={<BranchPage />} />
        <Route path="/subelerimiz/kocaeli" element={<BranchPage />} />
        <Route path="/subelerimiz/bursa" element={<BranchPage />} />
        <Route path="/subelerimiz/almanya" element={<BranchPage />} />
        <Route path="/subelerimiz/hollanda" element={<BranchPage />} />
        
        <Route path="/en" element={<Placeholder lang="English" />} />
        <Route path="/fr" element={<Placeholder lang="Français" />} />
        <Route path="/de" element={<Placeholder lang="Deutsch" />} />
        <Route path="/ru" element={<Placeholder lang="Русский" />} />
        <Route path="/es" element={<Placeholder lang="Español" />} />
        <Route path="/sa" element={<Placeholder lang="العربية" />} />
      </Routes>
    </>
  );
}

export default App;
