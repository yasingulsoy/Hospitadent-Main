import React from "react";
import logo from "../../assets/logo.webp"; // Logo dosyanızı assets klasörüne ekleyin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerLinks = [
  {
    title: "KURUMSAL",
    links: [
      { name: "Hakkımızda", href: "#" },
      { name: "Franchise – Ortaklık Başvurusu", href: "#" },
      { name: "İK İş Başvuru Formu", href: "#" },
      { name: "Kurumsal Kimlik", href: "#" },
      { name: "Politikalarımız", href: "#" },
      { name: "Çerez Politikamız", href: "#" },
      { name: "Gizlilik İlkesi", href: "#" },
      { name: "KVKK", href: "#" },
      { name: "İstenmeyen Olay Bildirim Formu", href: "#" },
    ],
  },
  {
    title: "FAYDALI LİNKLER",
    links: [
      { name: "Hekimlerimiz", href: "#" },
      { name: "Anlaşmalı Kurumlar", href: "#" },
      { name: "Hasta Yorumları", href: "#" },
      { name: "Hasta Memnuniyet Videoları", href: "#" },
      { name: "Ödüller", href: "#" },
      { name: "Sosyal Sorumluluk", href: "#" },
      { name: "HD Times", href: "#" },
      { name: "Hospitadent Akademi", href: "#" },
    ],
  },
  {
    title: "ONLINE",
    links: [
      { name: "Online Randevu", href: "#" },
      { name: "Röntgen Gönder", href: "#" },
      { name: "Fiyat Alın", href: "#" },
      { name: "Doktora Sor", href: "#" },
      { name: "Görüş ve Önerileriniz", href: "#" },
      { name: "Şikayet Var", href: "#" },
      { name: "Hospifikir", href: "#" },
    ],
  },
  {
    title: "TEDAVİLERİMİZ",
    links: [
      { name: "İmplant", href: "#" },
      { name: "Dijital Gülüş Tasarımı", href: "#" },
      { name: "Zirkonyum Kaplama", href: "#" },
      { name: "Lamina Diş Kaplama", href: "#" },
      { name: "Porselen Kaplama", href: "#" },
      { name: "Diş Beyazlatma", href: "#" },
      { name: "Ortodonti", href: "#" },
      { name: "Diş Eti Tedavisi", href: "#" },
    ],
  },
];

const footerButtons = [
  {
    icon: faLocationDot,
    text: "Şubeleri Göster",
    color: "#2bb3ea",
    href: "#",
  },
  {
    icon: faPhone,
    text: "Şimdi Ara",
    color: "#2bb3ea",
    href: "tel:+902125550123",
  },
  {
    icon: faEnvelope,
    text: "E-Posta Gönder",
    color: "#2bb3ea",
    href: "mailto:info@hospitadent.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-4 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Sol: Linkler */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-[#0f4f78] font-bold mb-3 tracking-wide text-base md:text-lg uppercase">{col.title}</h4>
              <ul className="space-y-1">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="flex items-center text-[#0f4f78] hover:text-[#2bb3ea] text-sm md:text-base transition-colors duration-200"
                    >
                      <span className="mr-2 text-xs">&#8250;</span> {/* › işareti */}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Sağ: Logo ve Butonlar */}
        <div className="w-full lg:w-72 flex flex-col items-center justify-start mt-8 lg:mt-0">
          <img src={logo} alt="Hospitadent Logo" className="w-48 mb-6" />
          <div className="flex flex-col w-full gap-3">
            {footerButtons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="flex items-center justify-center gap-2 rounded-md py-2 font-semibold text-white text-sm md:text-base"
                style={{ backgroundColor: btn.color }}
              >
                <FontAwesomeIcon icon={btn.icon} className="text-lg" />
                {btn.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Alt Bilgi */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <span>© {currentYear} Hospitadent. Tüm hakları saklıdır.</span>
        <span>Geliştirici: <span className="text-[#0f4f78] font-semibold">Yasin Gülsoy</span></span>
      </div>
    </footer>
  );
};

export default Footer;
