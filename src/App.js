import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components';

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
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Placeholder lang="English" />} />
        <Route path="/fr" element={<Placeholder lang="Français" />} />
        <Route path="/de" element={<Placeholder lang="Deutsch" />} />
        <Route path="/ru" element={<Placeholder lang="Русский" />} />
        <Route path="/es" element={<Placeholder lang="Español" />} />
        <Route path="/sa" element={<Placeholder lang="العربية" />} />
      </Routes>
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
