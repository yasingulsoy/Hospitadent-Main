import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CountryFlag from "react-country-flag";

const MobileNavLinks = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.submenu) {
    return (
      <li className="w-full">
        <button
          className="flex justify-between items-center w-full px-4 py-2 text-left text-white hover:text-blue focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span>{item.name}</span>
          <svg className={`ml-2 w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <ul className="pl-4 border-l border-blue-400">
            {item.submenu.map((sub, idx) => (
              <MobileNavLinks item={sub} key={idx} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.external) {
    return (
      <li className="w-full">
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-white hover:text-blue"
        >
          {item.name}
        </a>
      </li>
    );
  }

  return (
    <li className="w-full">
      <a
        href={`#${item.path}`}
        className="block px-4 py-2 text-white hover:text-blue"
      >
        {item.name}
      </a>
    </li>
  );
};

const ResponsiveMenu = ({ navLinksData, nav, handleNav, selectedLang, setSelectedLang }) => {
  const [showLang, setShowLang] = useState(false);
  // Arama için ek state'ler
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

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
    if (e.key === "Enter" && searchResults.length > 0) {
      window.location.hash = `#${searchResults[0].path}`;
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  // Menü açıkken body scroll'u engelle
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  return (
    <div
      className={`flex flex-col justify-start items-center md:hidden w-full fixed top-0 left-0 duration-500 h-screen bg-[rgba(0,0,0,.95)] z-50 ${nav ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Kapatma butonu */}
      <button 
        onClick={handleNav} 
        className="absolute top-4 right-4 text-white text-3xl hover:text-blue transition-colors"
        aria-label="Menüyü kapat"
      >
        &times;
      </button>
      
      {/* Arama ve typewriter mobilde üstte */}
      <div className="w-full flex flex-col items-center gap-2 pt-8 pb-3 px-6 bg-white/90 z-50 shadow-md sticky top-0">
        <div className="flex items-center w-full justify-center">
          <button
            className="rounded bg-gray-200 text-blue hover:bg-gray-300 transition p-2 text-xl"
            onClick={() => setSearchOpen((v) => !v)}
            tabIndex={0}
            aria-label="Arama"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </button>
          {searchOpen ? (
            <div className="relative w-full">
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleSearchKey}
                className="ml-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-blue text-base min-w-[120px] w-full"
                placeholder="Arayın..."
              />
              {searchResults.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 w-full max-h-40 overflow-auto">
                  {searchResults.map((res, i) => (
                    <li key={res.path}>
                      <a
                        href={`#${res.path}`}
                        className="block px-2 py-1 hover:bg-primary hover:text-white text-blue text-sm"
                        onClick={() => { setSearchOpen(false); setSearchValue(""); handleNav(); }}
                      >
                        {res.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <span className="ml-2 min-w-[100px] text-blue font-medium text-base transition-all duration-300 select-none" style={{letterSpacing:'0.01em'}}>{typewriterText}</span>
          )}
        </div>
      </div>
      
      {/* Sosyal medya ve iletişim */}
      <div className="flex flex-col items-center gap-4 mt-16 mb-4">
        <div className="flex gap-3">
          <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9"><FaFacebookF /></a>
          <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9"><FaTwitter /></a>
          <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9"><FaInstagram /></a>
          <a href="#" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9"><FaLinkedinIn /></a>
        </div>
        <div className="flex flex-col items-center gap-1 text-white text-base">
          <a href="tel:4449922" className="flex items-center gap-1 hover:text-primary transition"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg> 444 99 22</a>
          <a href="mailto:info@hospitadent.com" className="flex items-center gap-1 hover:text-primary transition"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg> info@hospitadent.com</a>
        </div>
        
        {/* Dil seçimi */}
        <div className="relative">
          <button
            className="flex items-center rounded bg-gray-200 text-blue font-bold hover:bg-gray-300 transition gap-1 px-3 py-1 text-base"
            onClick={() => setShowLang(!showLang)}
          >
            <CountryFlag countryCode={selectedLang.code.toUpperCase()} svg className="w-5 h-5 rounded" />
            <span>{selectedLang.name}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {showLang && (
            <ul className="absolute left-0 mt-2 bg-primary text-white rounded shadow-xl z-50 min-w-[8rem]">
              {languages.map((lang, idx) => (
                <li key={lang.code}>
                  <button
                    className={`flex items-center w-full text-left ${lang.code === selectedLang.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                    onClick={() => { if(lang.code !== selectedLang.code) { setSelectedLang(lang); setShowLang(false); } }}
                    disabled={lang.code === selectedLang.code}
                  >
                    <CountryFlag countryCode={lang.code.toUpperCase()} svg className="w-5 h-5 rounded" />
                    <span className="ml-2">{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Ana menü */}
      <div className="flex-1 w-full overflow-y-auto">
        <ul className="w-full">
          {navLinksData.map((item, index) => (
            <MobileNavLinks item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
