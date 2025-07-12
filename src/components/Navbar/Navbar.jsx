import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { navLinksData } from "../../data/data";
import Button from "../Button";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from '../../assets/logo.webp';
import CountryFlag from 'react-country-flag';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

const languages = [
  { code: 'tr', name: 'Türkçe' },
  { code: 'us', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ru', name: 'Русский' },
  { code: 'es', name: 'Español' },
  { code: 'sa', name: 'العربية' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bg, setBg] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  // Dropdown'da Türkçe her zaman üstte ve vurgulu, diğer diller aşağıda olacak şekilde sıralama fonksiyonu
  const getSortedLanguages = () => {
    const others = languages.filter(l => l.code !== selectedLang.code && l.code !== 'tr');
    return [selectedLang, ...languages.filter(l => l.code === 'tr' && selectedLang.code !== 'tr'), ...others];
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Üst Bar */}
      <div className="w-full bg-secondary py-2 px-2 md:px-4 flex justify-between items-center text-blue text-xs sm:text-sm md:text-base font-semibold">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
          <a href="tel:4449922" className="flex items-center gap-1 hover:text-primary transition text-xs sm:text-sm md:text-base"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg> 444 99 22</a>
          <a href="mailto:info@hospitadent.com" className="flex items-center gap-1 hover:text-primary transition text-xs sm:text-sm md:text-base"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg> info@hospitadent.com</a>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
          <a href="#" className="bg-blue rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-white hover:bg-primary transition"><FaFacebookF size={13} className="sm:text-base md:text-lg" /></a>
          <a href="#" className="bg-blue rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-white hover:bg-primary transition"><FaXTwitter size={13} className="sm:text-base md:text-lg" /></a>
          <a href="#" className="bg-blue rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-white hover:bg-primary transition"><FaInstagram size={13} className="sm:text-base md:text-lg" /></a>
          <a href="#" className="bg-blue rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-white hover:bg-primary transition"><FaLinkedinIn size={13} className="sm:text-base md:text-lg" /></a>
        </div>
      </div>
      {/* Ana Navbar */}
      <header
        className={`fixed w-full left-0 top-10 z-20 duration-300 bg-white shadow-md`}
      >
        <nav className="flex justify-between items-center max-w-[1300px] mx-auto px-2 md:px-6 h-16 md:h-24 w-full">
          {/* Logo Alanı */}
          <div className="flex items-center h-12 md:h-16 flex-shrink-0 w-auto justify-between">
            <a href="/" className="block h-10 md:h-14 w-auto select-none">
              <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
            </a>
            {/* Mobilde hamburger */}
            <button className="md:hidden flex items-center ml-2 text-blue text-xl sm:text-2xl" onClick={handleNav}>
              <FaBars />
            </button>
          </div>
          {/* Menü */}
          <div className="flex-1 hidden md:flex justify-center w-full">
            <ul className="flex space-x-2 sm:space-x-4 md:space-x-8">
              {navLinksData.map((item, index) => (
                <li key={index} className="text-blue text-sm sm:text-base md:text-lg font-bold tracking-wide hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  <NavLinks item={item} handleNav={handleNav} />
                </li>
              ))}
            </ul>
          </div>
          {/* Dil Seçenekleri ve Arama Butonu */}
          <div className="relative hidden md:flex items-center gap-1 md:gap-2">
            <button
              className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded bg-gray-200 text-blue font-bold hover:bg-gray-300 transition text-xs md:text-base"
              onClick={() => setLangOpen(!langOpen)}
            >
              <CountryFlag countryCode={selectedLang.code.toUpperCase()} svg style={{ width: '1.3em', height: '1.3em', borderRadius: '3px' }} />
              <span>{selectedLang.name}</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 w-36 md:w-44 bg-primary text-white rounded shadow-xl z-50">
                {getSortedLanguages().map((lang, idx) => (
                  <li key={lang.code}>
                    <button
                      className={`flex items-center gap-2 w-full px-2 md:px-4 py-1 md:py-2 text-left ${lang.code === selectedLang.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                      onClick={() => { if(lang.code !== selectedLang.code) { setSelectedLang(lang); setLangOpen(false); } }}
                      disabled={lang.code === selectedLang.code}
                    >
                      <CountryFlag countryCode={lang.code.toUpperCase()} svg style={{ width: '1.3em', height: '1.3em', borderRadius: '3px' }} />
                      <span>{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {/* Arama butonu */}
            <button className="ml-1 md:ml-2 p-1 md:p-2 rounded bg-gray-200 text-blue hover:bg-gray-300 transition">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
          </div>
          {/* Mobil Menü */}
          <ResponsiveMenu navLinksData={navLinksData} nav={nav} handleNav={handleNav} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
