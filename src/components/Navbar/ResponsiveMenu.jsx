import React, { useState } from "react";
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

  return (
    <div
      className={`flex flex-col justify-start items-center md:hidden w-full fixed top-0 left-0 duration-500 h-screen bg-[rgba(0,0,0,.95)] z-50 ${nav ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Kapatma butonu */}
      <button onClick={handleNav} className="absolute top-4 right-4 text-white text-3xl">
        &times;
      </button>
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
            onClick={() => setShowLang(l => !l)}
          >
            <CountryFlag countryCode={selectedLang.code.toUpperCase()} svg className="w-5 h-5 rounded" />
            <span>{selectedLang.name}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {/* Dropdown */}
          {typeof window !== 'undefined' && window.showLang && (
            <ul className="absolute left-0 mt-2 bg-primary text-white rounded shadow-xl z-50 min-w-[8rem]">
              {[{code:'tr',name:'Türkçe'}, {code:'us',name:'English'}, {code:'fr',name:'Français'}, {code:'de',name:'Deutsch'}, {code:'ru',name:'Русский'}, {code:'es',name:'Español'}, {code:'sa',name:'العربية'}].map((lang) => (
                <li key={lang.code}>
                  <button
                    className={`flex items-center w-full text-left ${lang.code === selectedLang.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                    onClick={() => { if(lang.code !== selectedLang.code) { setSelectedLang(lang); window.showLang = false; } }}
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
      {/* Menü */}
      <ul className="flex flex-col items-start space-y-2 w-full px-6 mt-2">
        {navLinksData.map((item, index) => (
          <MobileNavLinks item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
