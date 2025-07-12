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

// Typewriter animasyon verileri
const typewriterWords = [
  "Diş beyazlatma",
  "İmplant",
  "Ortodonti",
  "Diş teli",
  "Zirkonyum kaplama"
];

function useTypewriter(words, speed = 90, pause = 1200) {
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
  const [bg, setBg] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = React.useRef(null);
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
  }, [searchValue]);

  function handleSearchKey(e) {
    if (e.key === "Enter" && searchResults.length > 0) {
      window.location.hash = `#${searchResults[0].path}`;
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  return (
    <>
      {/* Üst Bar */}
      <div
        className="w-full bg-secondary border-b border-gray-200"
      >
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-2 sm:px-4 py-1 gap-2 text-[clamp(0.8rem,1.7vw,1.15rem)] font-semibold">
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <a href="tel:4449922" className="flex items-center hover:text-primary transition gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.1em] h-[1.1em]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg>
              444 99 22
            </a>
            <a href="mailto:info@hospitadent.com" className="flex items-center hover:text-primary transition gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.1em] h-[1.1em]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              info@hospitadent.com
            </a>
          </div>
          {/* Sosyal medya ikonları büyük ekranda, küçükte gizli */}
          <div className="hidden sm:flex items-center gap-2">
            <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8"><FaFacebookF /></a>
            <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8"><FaXTwitter /></a>
            <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8"><FaInstagram /></a>
            <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      {/* Ana Navbar */}
      <header className="sticky top-0 z-30 bg-white shadow-md w-full">
        <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-2 sm:px-4 py-2 gap-2">
          {/* Logo ve hamburger */}
          <div className="flex items-center flex-shrink-0 w-auto justify-between h-[clamp(2.2rem,5vw,3.5rem)]">
            <a href="/" className="block select-none h-[clamp(2rem,4vw,3.2rem)]">
              <img src={logo} alt="Logo" className="h-full w-auto" />
            </a>
            {/* Mobilde hamburger */}
            <button className="md:hidden flex items-center ml-2 text-blue text-2xl" onClick={handleNav}>
              <FaBars />
            </button>
          </div>
          {/* Menü */}
          <div className="flex-1 hidden md:flex justify-center w-full">
            <ul className="flex items-center gap-0.5 text-[clamp(0.85rem,1.5vw,1.1rem)]">
              {navLinksData.map((item, index) => (
                <li key={index} className="text-blue font-bold tracking-wide hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap text-[clamp(0.9rem,2vw,1.3rem)]">
                  <NavLinks item={item} handleNav={handleNav} />
                </li>
              ))}
            </ul>
          </div>
          {/* Dil ve arama büyük ekranda, küçükte hamburgerde */}
          <div className="relative hidden md:flex items-center gap-2">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-1 shadow-sm">
              <button
                className="flex items-center rounded bg-gray-200 text-blue font-bold hover:bg-gray-300 transition gap-1 px-3 py-1 text-[clamp(0.9rem,1.7vw,1.15rem)]"
                onClick={() => setLangOpen(!langOpen)}
              >
                <CountryFlag countryCode={selectedLang.code.toUpperCase()} svg className="w-5 h-5 rounded" />
                <span>{selectedLang.name}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 bg-primary text-white rounded shadow-xl z-50 min-w-[8rem]">
                  {getSortedLanguages().map((lang, idx) => (
                    <li key={lang.code}>
                      <button
                        className={`flex items-center w-full text-left ${lang.code === selectedLang.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                        onClick={() => { if(lang.code !== selectedLang.code) { setSelectedLang(lang); setLangOpen(false); } }}
                        disabled={lang.code === selectedLang.code}
                      >
                        <CountryFlag countryCode={lang.code.toUpperCase()} svg className="w-5 h-5 rounded" />
                        <span className="ml-2">{lang.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {/* Arama butonu ve typewriter/input */}
              <div className="flex items-center relative ml-2">
                <button
                  className="rounded bg-gray-200 text-blue hover:bg-gray-300 transition p-2 text-xl"
                  onClick={() => setSearchOpen((v) => !v)}
                  tabIndex={0}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </button>
                {searchOpen ? (
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                      onKeyDown={handleSearchKey}
                      className="ml-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-blue text-base min-w-[160px]"
                      placeholder="Arayın..."
                    />
                    {searchResults.length > 0 && (
                      <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 w-full max-h-40 overflow-auto">
                        {searchResults.map((res, i) => (
                          <li key={res.path}>
                            <a
                              href={`#${res.path}`}
                              className="block px-2 py-1 hover:bg-primary hover:text-white text-blue text-sm"
                              onClick={() => { setSearchOpen(false); setSearchValue(""); }}
                            >
                              {res.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <span className="ml-2 min-w-[120px] text-blue font-medium text-[clamp(0.95rem,1.3vw,1.15rem)] transition-all duration-300 select-none" style={{letterSpacing:'0.01em'}}>{typewriterText}</span>
                )}
              </div>
            </div>
          </div>
          {/* Mobil Menü (ResponsiveMenu) */}
          <ResponsiveMenu navLinksData={navLinksData} nav={nav} handleNav={handleNav} selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
