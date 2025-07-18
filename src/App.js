import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Home, About, Services, Process, Contact, Footer } from './components';
import GoogleReviews from './components/client/GoogleReviews';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
import Breadcrumbs from './components/SEO/Breadcrumbs';

// Tüm sayfaları doğrudan import et (hızlı yükleme için)
import AboutPage from './pages/About';
import BranchPage from './pages/BranchPage';
import Branches from './pages/Branches';
import Staff from './pages/Staff';
import SearchResults from './pages/SearchResults';
import HastaMemnuniyetVideolari from './pages/HastaMemnuniyetVideolari';
import HastaYorumlari from './pages/HastaYorumlari';
import HospitadentSosyalSorumluluk from './pages/HospitadentSosyalSorumluluk';
import AnlasmaliKurumlar from './pages/AnlasmaliKurumlar';
import Academy from './pages/Academy';
import Awards from './pages/Awards';
import CorporateIdentity from './pages/CorporateIdentity';
import Blog from './pages/Blog';
import Admin from './pages/Admin';

// Dil sayfaları - İngilizce
import EnAbout from './pages/en/About';
import EnServices from './pages/en/Services';
import EnStaff from './pages/en/Staff';
import EnBranches from './pages/en/Branches';
import EnBranchPage from './pages/en/BranchPage';
import EnSearchResults from './pages/en/SearchResults';
import EnHastaMemnuniyetVideolari from './pages/en/HastaMemnuniyetVideolari';
import EnHastaYorumlari from './pages/en/HastaYorumlari';
import EnAcademy from './pages/en/Academy';
import EnBlog from './pages/en/Blog';

// Dil sayfaları - Fransızca
import FrAbout from './pages/fr/About';
import FrServices from './pages/fr/Services';
import FrStaff from './pages/fr/Staff';
import FrBranches from './pages/fr/Branches';
import FrBranchPage from './pages/fr/BranchPage';
import FrSearchResults from './pages/fr/SearchResults';
import FrHastaMemnuniyetVideolari from './pages/fr/HastaMemnuniyetVideolari';
import FrHastaYorumlari from './pages/fr/HastaYorumlari';
import FrAcademy from './pages/fr/Academy';
import FrBlog from './pages/fr/Blog';

// Dil sayfaları - Almanca
import DeAbout from './pages/de/About';
import DeServices from './pages/de/Services';

// Dil sayfaları - Rusça
import RuAbout from './pages/ru/About';
import RuServices from './pages/ru/Services';

// Dil sayfaları - İspanyolca
import EsAbout from './pages/es/About';
import EsServices from './pages/es/Services';

// Dil sayfaları - Arapça
import ArAbout from './pages/ar/About';
import ArServices from './pages/ar/Services';

function App() {
  // Admin route'unda mıyız kontrolü
  const isAdminRoute = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');
  return (
    <HelmetProvider>
      {!isAdminRoute && <GoogleAnalytics />}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Breadcrumbs />}
      <Routes>
        {/* Ana Sayfa - Türkçe */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Türkçe Sayfalar */}
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/idari-kadro" element={<Staff />} />
        <Route path="/subelerimiz" element={<Branches />} />
        <Route path="/subelerimiz/:branchId" element={<BranchPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/akademi" element={<Academy />} />
        <Route path="/odullerimiz" element={<Awards />} />
        <Route path="/kurumsal-kimlik" element={<CorporateIdentity />} />
        <Route path="/hasta-memnuniyet-videolari" element={<HastaMemnuniyetVideolari />} />
        <Route path="/hasta-yorumlari" element={<HastaYorumlari />} />
        <Route path="/hospitadent-sosyal-sorumluluk" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/anlasmali-kurumlar" element={<AnlasmaliKurumlar />} />
        <Route path="/search" element={<SearchResults />} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<Admin />} />
        
        {/* İngilizce Sayfalar */}
        <Route path="/en" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/en/about-us" element={<EnAbout />} />
        <Route path="/en/services" element={<EnServices />} />
        <Route path="/en/administrative-staff" element={<EnStaff />} />
        <Route path="/en/branches" element={<EnBranches />} />
        <Route path="/en/branches/:branchId" element={<EnBranchPage />} />
        <Route path="/en/blog" element={<EnBlog />} />
        <Route path="/en/academy" element={<EnAcademy />} />
        <Route path="/en/awards" element={<Awards />} />
        <Route path="/en/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/en/patient-satisfaction-videos" element={<EnHastaMemnuniyetVideolari />} />
        <Route path="/en/patient-reviews" element={<EnHastaYorumlari />} />
        <Route path="/en/hospitadent-social-responsibility" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/en/partner-institutions" element={<AnlasmaliKurumlar />} />
        <Route path="/en/search" element={<EnSearchResults />} />
        
        {/* Fransızca Sayfalar */}
        <Route path="/fr" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/fr/a-propos" element={<FrAbout />} />
        <Route path="/fr/services" element={<FrServices />} />
        <Route path="/fr/equipe-administrative" element={<FrStaff />} />
        <Route path="/fr/succursales" element={<FrBranches />} />
        <Route path="/fr/succursales/:branchId" element={<FrBranchPage />} />
        <Route path="/fr/blog" element={<FrBlog />} />
        <Route path="/fr/academie" element={<FrAcademy />} />
        <Route path="/fr/recompenses" element={<Awards />} />
        <Route path="/fr/identite-corporative" element={<CorporateIdentity />} />
        <Route path="/fr/videos-satisfaction-patients" element={<FrHastaMemnuniyetVideolari />} />
        <Route path="/fr/avis-patients" element={<FrHastaYorumlari />} />
        <Route path="/fr/responsabilite-sociale-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/fr/institutions-partenaires" element={<AnlasmaliKurumlar />} />
        <Route path="/fr/recherche" element={<FrSearchResults />} />
        
        {/* Almanca Sayfalar */}
        <Route path="/de" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/de/uber-uns" element={<DeAbout />} />
        <Route path="/de/services" element={<DeServices />} />
        <Route path="/de/verwaltungspersonal" element={<Staff />} />
        <Route path="/de/filialen" element={<Branches />} />
        <Route path="/de/filialen/:branchId" element={<BranchPage />} />
        <Route path="/de/blog" element={<Blog />} />
        <Route path="/de/akademie" element={<Academy />} />
        <Route path="/de/auszeichnungen" element={<Awards />} />
        <Route path="/de/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/de/patientenzufriedenheit-videos" element={<HastaMemnuniyetVideolari />} />
        <Route path="/de/patientenbewertungen" element={<HastaYorumlari />} />
        <Route path="/de/hospitadent-soziale-verantwortung" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/de/partnerinstitutionen" element={<AnlasmaliKurumlar />} />
        <Route path="/de/suche" element={<SearchResults />} />
        
        {/* Rusça Sayfalar */}
        <Route path="/ru" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/ru/o-nas" element={<RuAbout />} />
        <Route path="/ru/services" element={<RuServices />} />
        <Route path="/ru/administrativnyj-personal" element={<Staff />} />
        <Route path="/ru/filialy" element={<Branches />} />
        <Route path="/ru/filialy/:branchId" element={<BranchPage />} />
        <Route path="/ru/blog" element={<Blog />} />
        <Route path="/ru/akademiya" element={<Academy />} />
        <Route path="/ru/nagrady" element={<Awards />} />
        <Route path="/ru/korporativnaya-identichnost" element={<CorporateIdentity />} />
        <Route path="/ru/video-udovletvorennosti-patsientov" element={<HastaMemnuniyetVideolari />} />
        <Route path="/ru/otzyvy-patsientov" element={<HastaYorumlari />} />
        <Route path="/ru/sotsialnaya-otvetstvennost-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/ru/partnerstkie-uchrezhdeniya" element={<AnlasmaliKurumlar />} />
        <Route path="/ru/poisk" element={<SearchResults />} />
        
        {/* İspanyolca Sayfalar */}
        <Route path="/es" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/es/sobre-nosotros" element={<EsAbout />} />
        <Route path="/es/services" element={<EsServices />} />
        <Route path="/es/personal-administrativo" element={<Staff />} />
        <Route path="/es/sucursales" element={<Branches />} />
        <Route path="/es/sucursales/:branchId" element={<BranchPage />} />
        <Route path="/es/blog" element={<Blog />} />
        <Route path="/es/academia" element={<Academy />} />
        <Route path="/es/premios" element={<Awards />} />
        <Route path="/es/identidad-corporativa" element={<CorporateIdentity />} />
        <Route path="/es/videos-satisfaccion-pacientes" element={<HastaMemnuniyetVideolari />} />
        <Route path="/es/resenas-pacientes" element={<HastaYorumlari />} />
        <Route path="/es/responsabilidad-social-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/es/instituciones-socias" element={<AnlasmaliKurumlar />} />
        <Route path="/es/busqueda" element={<SearchResults />} />
        
        {/* Arapça Sayfalar */}
        <Route path="/ar" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/ar/من-نحن" element={<ArAbout />} />
        <Route path="/ar/services" element={<ArServices />} />
        <Route path="/ar/al-muwazafun-al-idariyun" element={<Staff />} />
        <Route path="/ar/al-furu" element={<Branches />} />
        <Route path="/ar/al-furu/:branchId" element={<BranchPage />} />
        <Route path="/ar/al-mudawwana" element={<Blog />} />
        <Route path="/ar/al-akadimiyya" element={<Academy />} />
        <Route path="/ar/al-jawaiz" element={<Awards />} />
        <Route path="/ar/al-hawiyya-al-sharikiyya" element={<CorporateIdentity />} />
        <Route path="/ar/fidiyu-ridha-al-mardha" element={<HastaMemnuniyetVideolari />} />
        <Route path="/ar/ara-al-mardha" element={<HastaYorumlari />} />
        <Route path="/ar/al-masuliyya-al-ijtimaiyya-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/ar/al-muassasat-al-sharika" element={<AnlasmaliKurumlar />} />
        <Route path="/ar/al-bahth" element={<SearchResults />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
