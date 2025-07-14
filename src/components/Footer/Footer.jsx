import React from "react";
import logo from "../../assets/logo.webp"; // Logo dosyanızı assets klasörüne ekleyin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title: t('footer.corporate'),
      links: [
        { name: t('footer.about'), href: "#" },
        { name: t('footer.franchise'), href: "#" },
        { name: t('footer.job'), href: "#" },
        { name: t('footer.identity'), href: "#" },
        { name: t('footer.policies'), href: "#" },
        { name: t('footer.cookies'), href: "#" },
        { name: t('footer.privacy'), href: "#" },
        { name: t('footer.kvkk'), href: "#" },
        { name: t('footer.incident'), href: "#" },
      ],
    },
    {
      title: t('footer.useful'),
      links: [
        { name: t('footer.doctors'), href: "#" },
        { name: t('footer.partners'), href: "#" },
        { name: t('footer.comments'), href: "#" },
        { name: t('footer.videos'), href: "#" },
        { name: t('footer.awards'), href: "#" },
        { name: t('footer.social'), href: "#" },
        { name: t('footer.times'), href: "#" },
        { name: t('footer.academy'), href: "#" },
      ],
    },
    {
      title: t('footer.online'),
      links: [
        { name: t('footer.appointment'), href: "#" },
        { name: t('footer.xray'), href: "#" },
        { name: t('footer.price'), href: "#" },
        { name: t('footer.ask'), href: "#" },
        { name: t('footer.feedback'), href: "#" },
        { name: t('footer.complaint'), href: "#" },
        { name: t('footer.idea'), href: "#" },
      ],
    },
    {
      title: t('footer.treatments'),
      links: [
        { name: t('footer.implant'), href: "#" },
        { name: t('footer.smile'), href: "#" },
        { name: t('footer.zirconium'), href: "#" },
        { name: t('footer.lamina'), href: "#" },
        { name: t('footer.porcelain'), href: "#" },
        { name: t('footer.whitening'), href: "#" },
        { name: t('footer.ortho'), href: "#" },
        { name: t('footer.gum'), href: "#" },
      ],
    },
  ];
  const footerButtons = [
    {
      icon: faLocationDot,
      text: t('footer.showBranches'),
      color: "#2bb3ea",
      href: "#",
    },
    {
      icon: faPhone,
      text: t('footer.callNow'),
      color: "#2bb3ea",
      href: "tel:+902125550123",
    },
    {
      icon: faEnvelope,
      text: t('footer.sendMail'),
      color: "#2bb3ea",
      href: "mailto:info@hospitadent.com",
    },
  ];
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
                      <span className="mr-2 text-xs">&#8250;</span>
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
        <span>© {currentYear} Hospitadent. {t('footer.copyright')}</span>
        <span>{t('footer.developer')}: <span className="text-[#0f4f78] font-semibold">Yasin Gülsoy</span></span>
      </div>
    </footer>
  );
};

export default Footer;
