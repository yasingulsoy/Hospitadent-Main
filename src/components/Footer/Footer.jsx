import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f4f78] text-white relative">
      {/* Yukarı çık butonu */}
      <Link
        className="absolute top-6 right-6 z-10 cursor-pointer bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full p-3 backdrop-blur-sm"
        to="home"
        smooth={true}
        duration={500}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-white text-lg"
        />
      </Link>

      {/* Ana Footer İçeriği */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Kurumsal Bilgiler */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Dentist Clinic</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                20 yılı aşkın deneyimimizle, modern teknoloji ve uzman kadromuzla 
                sağlıklı gülüşler için hizmetinizdeyiz.
              </p>
            </div>
            
            {/* Sosyal Medya */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full p-3">
                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full p-3">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full p-3">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full p-3">
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-full p-3">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="services" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="process" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Tedavi Süreci
                </Link>
              </li>
              <li>
                <Link 
                  to="clients" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Müşteri Yorumları
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  İmplant Tedavisi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Ortodonti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Gülüş Tasarımı
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Diş Beyazlatma
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Çocuk Diş Hekimliği
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Diş Eti Tedavisi
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="text-white mt-1 text-sm"
                />
                <div>
                  <p className="text-gray-300 text-sm">+90 (212) 555 0123</p>
                  <p className="text-gray-300 text-sm">+90 (532) 555 0123</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-white mt-1 text-sm"
                />
                <div>
                  <p className="text-gray-300 text-sm">info@dentistclinic.com</p>
                  <p className="text-gray-300 text-sm">randevu@dentistclinic.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  className="text-white mt-1 text-sm"
                />
                <div>
                  <p className="text-gray-300 text-sm">
                    Atatürk Caddesi No:123<br />
                    Şişli / İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon 
                  icon={faClock} 
                  className="text-white mt-1 text-sm"
                />
                <div>
                  <p className="text-gray-300 text-sm">
                    Pazartesi - Cuma: 09:00 - 19:00<br />
                    Cumartesi: 09:00 - 17:00<br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-white/20">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Dentist Clinic. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                Geliştirici: <span className="text-white font-semibold">Yasin Gülsoy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
