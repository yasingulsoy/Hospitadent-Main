import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { navLinksData } from "../../data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from '../../assets/logo.webp';
import CountryFlag from 'react-country-flag';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: 'TR' },
  { code: 'en', name: 'English', flag: 'GB' },
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'de', name: 'Deutsch', flag: 'DE' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'ar', name: 'العربية', flag: 'SA' },
];

// Typewriter animasyon verileri
const typewriterWords = [
  "Diş beyazlatma",
  "İmplant",
  "Ortodonti",
  "Diş teli",
  "Zirkonyum kaplama",
  "Lamina kaplama",
  "Porselen diş",
  "Diş çekimi",
  "Diş eti tedavisi",
  "Çocuk diş hekimliği",
  "Diş dolgusu",
  "Kanal tedavisi",
  "Diş temizliği",
  "Gülüş tasarımı",
  "Diş protezi",
  "Diş röntgeni"
];

function useTypewriter(words, speed = 60, pause = 800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = React.useRef(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  // Dropdown'da Türkçe her zaman üstte ve vurgulu, diğer diller aşağıda olacak şekilde sıralama fonksiyonu
  const getSortedLanguages = () => {
    const others = languages.filter(l => l.code !== selectedLang.code && l.code !== 'tr');
    return [selectedLang, ...languages.filter(l => l.code === 'tr' && selectedLang.code !== 'tr'), ...others];
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const typewriterText = useTypewriter(typewriterWords);

  // navLinksData'dan düz başlık listesi çıkar
  function flattenLinks(links) {
    let arr = [];
    links.forEach(l => {
      arr.push({ name: l.name, path: l.path });
      if (l.submenu) arr = arr.concat(flattenLinks(l.submenu));
    });
    return arr;
  }
  const allLinks = flattenLinks(navLinksData);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchValue) {
      setSearchResults(
        allLinks.filter(l => l.name.toLowerCase().includes(searchValue.toLowerCase()))
      );
      } else {
      setSearchResults([]);
    }
  }, [searchValue, allLinks]);

  function handleSearchKey(e) {
    if (e.key === "Enter" && searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  // Dil değişince i18n dilini de değiştir
  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
    if(lang.code === 'tr') navigate('/');
    else navigate('/' + lang.code);
    i18n.changeLanguage(lang.code);
  };

  // Typewriter yazısına tıklayınca arama inputuna focus
  const handleTypewriterClick = () => {
    setSearchOpen(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 50);
  };

  // Dil dropdown'ının dışına tıklandığında kapanması
  useEffect(() => {
    if (!langOpen) return;
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  return (
    <>
      {/* Mobilde hamburger menü butonu */}
      <button className="md:hidden flex items-center justify-center text-white text-2xl fixed top-4 left-4 z-[60] bg-[#0f4f78] w-12 h-12 rounded-full shadow-lg hover:bg-[#2bb3ea] transition-colors duration-300" onClick={handleNav}>
        <FaBars />
      </button>

      {/* Mobilde üst beyaz bar */}
      <div className="w-full bg-white border-b border-gray-200 md:hidden pt-4">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Sol: Boş alan (hamburger menü butonu için) */}
          <div className="w-12"></div>
          
          {/* Orta: Telefon */}
          <a href="tel:4449922" className="flex items-center gap-2 text-[#0f4f78] hover:text-[#2bb3ea] transition text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" />
            </svg>
            <span>444 99 22</span>
          </a>
          
          {/* Sağ: Boş alan (denge için) */}
          <div className="w-12"></div>
        </div>
      </div>

      {/* Ana Navbar */}
      <header className="sticky top-0 z-30 bg-white shadow-md w-full hidden md:block">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-2 sm:px-4 py-2 gap-2">
          {/* Sol: Logo */}
          <div className="flex items-center flex-shrink-0 w-auto h-[clamp(2.2rem,5vw,3.5rem)] -mt-7">
            <a href="/" className="block select-none h-[clamp(2rem,4vw,3.2rem)]" style={{marginBottom: '0px'}}>
              <img src={logo} alt="Logo" className="h-full w-auto mx-auto" />
            </a>
          </div>
          {/* Mobilde hamburger */}
          {/* Orta: Menü + arama + typewriter */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <ul className="flex items-center gap-0.5 text-[clamp(0.85rem,1.5vw,1.1rem)] mb-1">
              {navLinksData.map((item, index) => (
                <li key={index} className="text-blue font-bold tracking-wide hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap text-[clamp(0.9rem,2vw,1.3rem)]">
                  <NavLinks item={item} handleNav={handleNav} />
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4">
              {/* Arama */}
              <div className="flex items-center gap-2">
                <button
                  className="rounded bg-gray-200 text-blue hover:bg-gray-300 transition p-2"
                  onClick={() => setSearchOpen((v) => !v)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </button>
                {searchOpen && (
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                      onKeyDown={handleSearchKey}
                      className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-blue text-sm min-w-[200px]"
                      placeholder="Arayın..."
                    />
                    {searchResults.length > 0 && (
                      <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 w-full max-h-40 overflow-auto">
                        {searchResults.map((res, i) => (
                          <li key={res.path}>
                            <a
                              href={`/${res.path}`}
                              className="block px-3 py-2 hover:bg-primary hover:text-white text-blue text-sm"
                              onClick={() => { setSearchOpen(false); setSearchValue(""); }}
                            >
                              {res.name}
                            </a>
                          </li>
                        ))}
                        <li className="border-t border-gray-200">
                          <button
                            onClick={() => {
                              navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
                              setSearchOpen(false);
                              setSearchValue("");
                            }}
                            className="block w-full px-3 py-2 hover:bg-primary hover:text-white text-blue text-sm text-left"
                          >
                            Tüm sonuçları görüntüle ({searchResults.length})
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
              {/* Typewriter animasyon */}
              <div className="min-w-[180px] text-blue font-medium text-sm cursor-pointer select-none" onClick={handleTypewriterClick} title="Arama için tıklayın">
                {typewriterText}
              </div>
            </div>
          </div>
          {/* Sağ: Dil seçici ve sosyal medya */}
          <div className="flex flex-col items-end gap-2 min-w-[120px]">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-1 shadow-sm">
              <button
                className="flex items-center rounded bg-gray-200 text-blue font-bold hover:bg-gray-300 transition gap-1 px-3 py-1 text-[clamp(0.95rem,1.7vw,1.15rem)] min-w-[110px] md:min-w-[130px] lg:min-w-[150px] h-10 md:h-11 lg:h-12"
                style={{fontSize: 'clamp(0.95rem,1.1vw,1.15rem)', padding: '0.5rem 1.2rem'}}
                onClick={() => setLangOpen(!langOpen)}
              >
                <CountryFlag countryCode={selectedLang.flag} svg className="w-5 h-5 md:w-6 md:h-6 rounded" />
                <span className="whitespace-nowrap">{selectedLang.name}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langOpen && (
                <ul className="absolute right-0 top-full mt-1 bg-primary text-white rounded shadow-xl z-50 min-w-[8rem] md:min-w-[10rem] lg:min-w-[12rem] text-base md:text-lg py-2">
                  {getSortedLanguages().map((lang, idx) => (
                    <li key={lang.code}>
                      <button
                        className={`flex items-center w-full text-left px-4 py-2 md:px-5 md:py-2.5 text-base md:text-lg ${lang.code === selectedLang.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                        onClick={() => handleLangChange(lang)}
                        disabled={lang.code === selectedLang.code}
                      >
                        <CountryFlag countryCode={lang.flag} svg className="w-5 h-5 md:w-6 md:h-6 rounded" />
                        <span className="ml-2 whitespace-nowrap">{lang.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Sosyal medya ikonları */}
            <div className="hidden sm:flex items-center gap-2 mt-1">
              <a href="https://www.facebook.com/hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaFacebookF className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://x.com/Hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaXTwitter className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.youtube.com/c/HospitadentTV" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.linkedin.com/company/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=905531029922" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobil Menü */}
      <ResponsiveMenu
        navLinksData={navLinksData}
        nav={nav}
        handleNav={handleNav}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />
    </>
  );
}

export default Navbar;