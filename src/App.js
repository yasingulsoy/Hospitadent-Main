import React, { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
import Breadcrumbs from './components/SEO/Breadcrumbs';

// Lazy loading için sayfa bileşenleri
const AboutPage = lazy(() => import('./pages/About'));
const BranchPage = lazy(() => import('./pages/BranchPage'));
const Branches = lazy(() => import('./pages/Branches'));
const Staff = lazy(() => import('./pages/Staff'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const HastaMemnuniyetVideolari = lazy(() => import('./pages/HastaMemnuniyetVideolari'));
const HastaYorumlari = lazy(() => import('./pages/HastaYorumlari'));
const HospitadentSosyalSorumluluk = lazy(() => import('./pages/HospitadentSosyalSorumluluk'));
const AnlasmaliKurumlar = lazy(() => import('./pages/AnlasmaliKurumlar'));
const Academy = lazy(() => import('./pages/Academy'));
const Awards = lazy(() => import('./pages/Awards'));
const CorporateIdentity = lazy(() => import('./pages/CorporateIdentity'));
const Blog = lazy(() => import('./pages/Blog'));

// Dil sayfaları için lazy loading
const EnAbout = lazy(() => import('./pages/en/About'));
const EnServices = lazy(() => import('./pages/en/Services'));
const FrAbout = lazy(() => import('./pages/fr/About'));
const FrServices = lazy(() => import('./pages/fr/Services'));
const DeAbout = lazy(() => import('./pages/de/About'));
const DeServices = lazy(() => import('./pages/de/Services'));
const RuAbout = lazy(() => import('./pages/ru/About'));
const RuServices = lazy(() => import('./pages/ru/Services'));
const EsAbout = lazy(() => import('./pages/es/About'));
const EsServices = lazy(() => import('./pages/es/Services'));
const ArAbout = lazy(() => import('./pages/ar/About'));
const ArServices = lazy(() => import('./pages/ar/Services'));



function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <Navbar />
      <Breadcrumbs />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#004876]"></div>
        </div>
      }>
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
        <Route path="/hakkimizda" element={<AboutPage />} />
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
        
        {/* Arama Sonuçları Sayfası */}
        <Route path="/search" element={<SearchResults />} />
        
        {/* İngilizce Sayfalar */}
        <Route path="/en" element={
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
        <Route path="/en/about" element={<EnAbout />} />
        <Route path="/en/services" element={<EnServices />} />
        
        {/* Fransızca Sayfalar */}
        <Route path="/fr" element={
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
        <Route path="/fr/about" element={<FrAbout />} />
        <Route path="/fr/services" element={<FrServices />} />
        
        {/* Almanca Sayfalar */}
        <Route path="/de" element={
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
        <Route path="/de/about" element={<DeAbout />} />
        <Route path="/de/services" element={<DeServices />} />
        
        {/* Rusça Sayfalar */}
        <Route path="/ru" element={
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
        <Route path="/ru/about" element={<RuAbout />} />
        <Route path="/ru/services" element={<RuServices />} />
        
        {/* İspanyolca Sayfalar */}
        <Route path="/es" element={
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
        <Route path="/es/about" element={<EsAbout />} />
        <Route path="/es/services" element={<EsServices />} />
        
        {/* Arapça Sayfalar */}
        <Route path="/ar" element={
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
        <Route path="/ar/about" element={<ArAbout />} />
        <Route path="/ar/services" element={<ArServices />} />
        <Route path="/hasta-memnuniyet-videolari" element={<HastaMemnuniyetVideolari />} />
        <Route path="/hasta-yorumlari" element={<HastaYorumlari />} />
        <Route path="/hospitadent-sosyal-sorumluluk" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/anlasmali-kurumlar" element={<AnlasmaliKurumlar />} />
        <Route path="/akademi" element={<Academy />} />
        <Route path="/odullerimiz" element={<Awards />} />
        <Route path="/kurumsal-kimlik" element={<CorporateIdentity />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
