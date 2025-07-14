import React from "react";
import logo from "../../assets/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#fafbfc] border-t border-gray-100 pt-10 pb-4 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* 4 Sütun */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {/* Kurumsal */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">KURUMSAL</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Franchise – Ortaklık Başvurusu</a></li>
              <li><a href="#">İK İş Başvuru Formu</a></li>
              <li><a href="#">Kurumsal Kimlik</a></li>
              <li><a href="#">Politikalarımız</a></li>
              <li><a href="#">Çerez Politikamız</a></li>
              <li><a href="#">Gizlilik İlkesi</a></li>
              <li><a href="#">KVKK</a></li>
              <li><a href="#">İstenmeyen Olay Bildirim Formu</a></li>
            </ul>
          </div>
          {/* Faydalı Linkler */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">FAYDALI LİNKLER</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="#">Hekimlerimiz</a></li>
              <li><a href="#">Anlaşmalı Kurumlar</a></li>
              <li><a href="#">Hasta Yorumları</a></li>
              <li><a href="#">Hasta Memnuniyet Videoları</a></li>
              <li><a href="#">Ödüller</a></li>
              <li><a href="#">Sosyal Sorumluluk</a></li>
              <li><a href="#">HD Times</a></li>
              <li><a href="#">Hospitadent Akademi</a></li>
            </ul>
          </div>
          {/* Online */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">ONLINE</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="#">Online Randevu</a></li>
              <li><a href="#">Röntgen Gönder</a></li>
              <li><a href="#">Fiyat Alın</a></li>
              <li><a href="#">Doktora Sor</a></li>
              <li><a href="#">Görüş ve Önerileriniz</a></li>
              <li><a href="#">Şikayet Var</a></li>
              <li><a href="#">Hospifikir</a></li>
            </ul>
          </div>
          {/* Tedavilerimiz */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">TEDAVİLERİMİZ</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="#">Implant</a></li>
              <li><a href="#">Dijital Gülüş Tasarımı</a></li>
              <li><a href="#">Zirkonyum Kaplama</a></li>
              <li><a href="#">Lamina Diş Kaplama</a></li>
              <li><a href="#">Porselen Kaplama</a></li>
              <li><a href="#">Diş Beyazlatma</a></li>
              <li><a href="#">Ortodonti</a></li>
              <li><a href="#">Diş Eti Tedavisi</a></li>
            </ul>
          </div>
        </div>
        {/* Sağ: Logo ve Butonlar */}
        <div className="w-full md:w-72 flex flex-col items-center justify-start mt-8 md:mt-0">
          <img src={logo} alt="Hospitadent Logo" className="w-48 mb-4" />
          <div className="flex items-center gap-2 mb-4">
            <a href="https://www.facebook.com/hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://x.com/Hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/c/HospitadentTV" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=905531029922" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
          <a href="#" className="w-full bg-blue text-white font-bold rounded-md py-3 mb-2 flex items-center justify-center gap-2 text-base hover:bg-primary transition"><span className="material-icons">location_on</span> Şubeleri Göster</a>
          <a href="tel:4449922" className="w-full bg-blue text-white font-bold rounded-md py-3 mb-2 flex items-center justify-center gap-2 text-base hover:bg-primary transition"><span className="material-icons">call</span> Şimdi Ara</a>
          <a href="mailto:info@hospitadent.com" className="w-full bg-blue text-white font-bold rounded-md py-3 flex items-center justify-center gap-2 text-base hover:bg-primary transition"><span className="material-icons">mail</span> E-Posta Gönder</a>
        </div>
      </div>
      {/* Alt Bilgi */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <span>© {currentYear} Hospitadent. Tüm hakları saklıdır.</span>
        <span>Developer: Yasin Gülsoy</span>
      </div>
    </footer>
  );
};

export default Footer;
