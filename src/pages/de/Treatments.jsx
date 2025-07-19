import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Ästhetische Zahnheilkunde
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Erreichen Sie Ihr Traumlächeln mit perfektem Lächeldesign.',
      image: '/api/placeholder/300/200',
      slug: 'hollywood-smile'
    },
    {
      id: 'smile-design',
      title: 'Lächeldesign',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Personalisierte ästhetische Lächeldesign mit digitaler Planung.',
      image: '/api/placeholder/300/200',
      slug: 'laecheldesign'
    },
    {
      id: 'teeth-whitening',
      title: 'Zahnaufhellung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Schnelle und sichere Zahnaufhellungsanwendungen mit modernen Methoden.',
      image: '/api/placeholder/300/200',
      slug: 'zahnaufhellung'
    },
    {
      id: 'pink-aesthetics',
      title: 'Pink-Ästhetik',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Perfektes Lächeln mit Zahnfleischästhetik.',
      image: '/api/placeholder/300/200',
      slug: 'pink-aesthetik'
    },
    {
      id: 'laminate-veneer',
      title: 'Laminat-Veneers',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Ästhetische und dünne Porzellan-Veneers.',
      image: '/api/placeholder/300/200',
      slug: 'laminat-veneers'
    },
    {
      id: 'zirconium-crown',
      title: 'Zirkon-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Natürlich aussehende, langlebige und ästhetische Zahnkronenlösungen.',
      image: '/api/placeholder/300/200',
      slug: 'zirkon-kronen'
    },
    {
      id: 'porcelain-crown',
      title: 'Porzellan-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Langlebige und natürlich aussehende Porzellanzahnkronen.',
      image: '/api/placeholder/300/200',
      slug: 'porzellan-kronen'
    },
    {
      id: 'lumineers-veneer',
      title: 'Lumineers-Veneers',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Dünnes und transparentes Porzellan-Veneer-System.',
      image: '/api/placeholder/300/200',
      slug: 'lumineers-veneers'
    },
    {
      id: 'emax-crown',
      title: 'Emax-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Emax-Zahnkronen mit hoher Ästhetik und Langlebigkeit.',
      image: '/api/placeholder/300/200',
      slug: 'emax-kronen'
    },
    {
      id: 'aesthetic-filling',
      title: 'Ästhetische Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Natürlich aussehende ästhetische Zahnfüllungen.',
      image: '/api/placeholder/300/200',
      slug: 'aesthetische-fuellung'
    },
    {
      id: 'bisectomy',
      title: 'Bisektomie',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Chirurgischer Eingriff für Zahnfleischästhetik.',
      image: '/api/placeholder/300/200',
      slug: 'bisektomie'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Laser-Zahnbehandlung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Zahnbehandlungen mit moderner Lasertechnologie.',
      image: '/api/placeholder/300/200',
      slug: 'laser-zahnbehandlung'
    },
    {
      id: 'inlay-filling',
      title: 'Inlay-Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Präzise und ästhetische Füllungstechnik.',
      image: '/api/placeholder/300/200',
      slug: 'inlay-fuellung'
    },
    {
      id: 'onlay-filling',
      title: 'Onlay-Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Umfassende Füllungsrestauration.',
      image: '/api/placeholder/300/200',
      slug: 'onlay-fuellung'
    },
    {
      id: 'dental-diamond',
      title: 'Zahndiamant',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Verfahren zum Einsetzen von Diamanten auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahndiamant'
    },
    {
      id: 'dental-tattoo',
      title: 'Zahntattoo',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Dekorative Tattoo-Anwendung auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahntattoo'
    },
    {
      id: 'dental-jewelry',
      title: 'Zahnschmuck',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Verfahren zum Einsetzen von Schmuck auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnschmuck'
    },
    {
      id: 'bonding-treatment',
      title: 'Bonding-Behandlung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Ästhetische Bonding-Anwendungen für kleine Zahndefekte.',
      image: '/api/placeholder/300/200',
      slug: 'bonding-behandlung'
    },

    // Fehlende Zähne
    {
      id: 'dental-bridge',
      title: 'Zahnbrücke',
      category: 'Fehlende Zähne',
      description: 'Feste Brücke für fehlende Zähne.',
      image: '/api/placeholder/300/200',
      slug: 'zahnbruecke'
    },
    {
      id: 'denture',
      title: 'Zahnprothese',
      category: 'Fehlende Zähne',
      description: 'Lösungen für herausnehmbare Zahnprothesen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnprothese'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Feste Prothese',
      category: 'Fehlende Zähne',
      description: 'Anwendungen für feste Zahnprothesen.',
      image: '/api/placeholder/300/200',
      slug: 'feste-prothese'
    },
    {
      id: 'snap-on-denture',
      title: 'Klick-Prothese',
      category: 'Fehlende Zähne',
      description: 'Klick-Zahnprothesensystem.',
      image: '/api/placeholder/300/200',
      slug: 'klick-prothese'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Vollmund-Zahnbehandlung',
      category: 'Fehlende Zähne',
      description: 'Umfassende Zahnbehandlung für den gesamten Mund.',
      image: '/api/placeholder/300/200',
      slug: 'vollmund-zahnbehandlung'
    },

    // Implantat
    {
      id: 'single-tooth-implant',
      title: 'Einzelzahn-Implantat',
      category: 'Implantat',
      description: 'Implantatbehandlung für einen einzelnen Zahn.',
      image: '/api/placeholder/300/200',
      slug: 'einzelzahn-implantat'
    },
    {
      id: 'full-mouth-implant',
      title: 'Vollmund-Implantat',
      category: 'Implantat',
      description: 'Implantatbehandlung für den gesamten Mund.',
      image: '/api/placeholder/300/200',
      slug: 'vollmund-implantat'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Mehrfachzahn-Implantat',
      category: 'Implantat',
      description: 'Implantatbehandlung für mehrere Zähne.',
      image: '/api/placeholder/300/200',
      slug: 'mehrfachzahn-implantat'
    },
    {
      id: 'one-day-implant',
      title: '1-Tag-Implantat',
      category: 'Implantat',
      description: 'Implantatbehandlung an einem Tag.',
      image: '/api/placeholder/300/200',
      slug: '1-tag-implantat'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'Implantat',
      description: 'All on Four Implantattechnik.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'Implantat',
      description: 'All on Six Implantattechnik.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Box-Technik',
      category: 'Implantat',
      description: 'Box-Implantattechnik.',
      image: '/api/placeholder/300/200',
      slug: 'box-technik'
    },

    // Allgemeine Zahnbehandlungen
    {
      id: 'dental-examination',
      title: 'Zahnuntersuchung',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Umfassende Zahnuntersuchung.',
      image: '/api/placeholder/300/200',
      slug: 'zahnuntersuchung'
    },
    {
      id: 'crown-veneer',
      title: 'Zahnkrone',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Was ist eine Zahnkrone und wie wird sie hergestellt.',
      image: '/api/placeholder/300/200',
      slug: 'zahnkrone'
    },
    {
      id: 'dental-filling',
      title: 'Zahnfüllung',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Wie wird eine Zahnfüllung gemacht und welche Arten gibt es.',
      image: '/api/placeholder/300/200',
      slug: 'zahnfuellung'
    },
    {
      id: 'root-canal-treatment',
      title: 'Wurzelkanalbehandlung',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Wie wird eine Wurzelkanalbehandlung gemacht und tut es weh.',
      image: '/api/placeholder/300/200',
      slug: 'wurzelkanalbehandlung'
    },
    {
      id: 'tooth-extraction',
      title: 'Zahnextraktion',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Was ist Zahnextraktion und wie wird sie gemacht.',
      image: '/api/placeholder/300/200',
      slug: 'zahnextraktion'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Entfernung von Impaktierter Zahn',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Was ist die Entfernung von impaktierten Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'entfernung-impaktierter-zahn'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'Weisheitszahn-Entfernung',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Entfernung von Weisheitszähnen.',
      image: '/api/placeholder/300/200',
      slug: 'weisheitszahn-entfernung'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Behandlung von Gebrochenem Zahn',
      category: 'Allgemeine Zahnbehandlungen',
      description: 'Was ist die Behandlung von gebrochenen Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'behandlung-gebrochener-zahn'
    },

    // Präventive Zahnbehandlungen
    {
      id: 'bad-breath',
      title: 'Mundgeruch',
      category: 'Präventive Zahnbehandlungen',
      description: 'Was ist Mundgeruch und wie wird er behandelt.',
      image: '/api/placeholder/300/200',
      slug: 'mundgeruch'
    },
    {
      id: 'tooth-sensitivity',
      title: 'Zahnempfindlichkeit',
      category: 'Präventive Zahnbehandlungen',
      description: 'Was ist Zahnempfindlichkeit und wie wird sie behandelt.',
      image: '/api/placeholder/300/200',
      slug: 'zahnempfindlichkeit'
    },
    {
      id: 'teeth-grinding',
      title: 'Zähneknirschen',
      category: 'Präventive Zahnbehandlungen',
      description: 'Was ist Zähneknirschen und wie wird es behandelt.',
      image: '/api/placeholder/300/200',
      slug: 'zaehneknirschen'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Zähneknirschen-Behandlung',
      category: 'Präventive Zahnbehandlungen',
      description: 'Was ist die Zähneknirschen-Behandlung und wie wird sie gemacht.',
      image: '/api/placeholder/300/200',
      slug: 'zaehneknirschen-behandlung'
    },
    {
      id: 'snoring-treatment',
      title: 'Schnarch-Behandlung',
      category: 'Präventive Zahnbehandlungen',
      description: 'Was ist die Schnarch-Behandlung und wie wird sie angewendet.',
      image: '/api/placeholder/300/200',
      slug: 'schnarch-behandlung'
    },

    // Kieferorthopädie
    {
      id: 'braces-treatment',
      title: 'Zahnspangen-Behandlung',
      category: 'Kieferorthopädie',
      description: 'Was ist eine Zahnspangen-Behandlung und wie wird sie angewendet.',
      image: '/api/placeholder/300/200',
      slug: 'zahnspangen-behandlung'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Transparente Brackets-Behandlung',
      category: 'Kieferorthopädie',
      description: 'Kieferorthopädische Behandlung mit transparenten Brackets.',
      image: '/api/placeholder/300/200',
      slug: 'transparente-brackets-behandlung'
    },
    {
      id: 'invisalign-treatment',
      title: 'Invisalign-Behandlung',
      category: 'Kieferorthopädie',
      description: 'Invisalign-Behandlung mit transparenten Schienen.',
      image: '/api/placeholder/300/200',
      slug: 'invisalign-behandlung'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Unsichtbare Zahnspangen-Behandlung',
      category: 'Kieferorthopädie',
      description: 'Unsichtbare kieferorthopädische Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'unsichtbare-zahnspangen-behandlung'
    },

    // Kinderzahnheilkunde
    {
      id: 'fluoride-application',
      title: 'Fluorid-Anwendung',
      category: 'Kinderzahnheilkunde',
      description: 'Fluorid-Anwendung für Zahnschutz.',
      image: '/api/placeholder/300/200',
      slug: 'fluorid-anwendung'
    },
    {
      id: 'fissure-sealant',
      title: 'Fissurenversiegelung',
      category: 'Kinderzahnheilkunde',
      description: 'Schutz der Zahnfissuren.',
      image: '/api/placeholder/300/200',
      slug: 'fissurenversiegelung'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Kinder-Kieferorthopädische Behandlung',
      category: 'Kinderzahnheilkunde',
      description: 'Was ist eine kinder-kieferorthopädische Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'kinder-kieferorthopaedische-behandlung'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Flaschenkaries',
      category: 'Kinderzahnheilkunde',
      description: 'Was ist Flaschenkaries.',
      image: '/api/placeholder/300/200',
      slug: 'flaschenkaries'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Lückenhalter-Behandlung',
      category: 'Kinderzahnheilkunde',
      description: 'Was ist eine Lückenhalter-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'lueckenhalter-behandlung'
    },

    // Parodontologie
    {
      id: 'gum-treatment',
      title: 'Zahnfleisch-Behandlung',
      category: 'Parodontologie',
      description: 'Behandlung von Zahnfleischerkrankungen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnfleisch-behandlung'
    },
    {
      id: 'curettage-treatment',
      title: 'Kürettage-Behandlung',
      category: 'Parodontologie',
      description: 'Was ist eine Kürettage-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'kuerettage-behandlung'
    },
    {
      id: 'flap-treatment',
      title: 'Lappen-Behandlung',
      category: 'Parodontologie',
      description: 'Chirurgische Zahnfleischbehandlung.',
      image: '/api/placeholder/300/200',
      slug: 'lappen-behandlung'
    },
    {
      id: 'gingivitis',
      title: 'Gingivitis',
      category: 'Parodontologie',
      description: 'Zahnfleischentzündung und Gingivitis.',
      image: '/api/placeholder/300/200',
      slug: 'gingivitis'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Zahnstein-Reinigung',
      category: 'Parodontologie',
      description: 'Was ist Zahnstein-Reinigung und wie wird sie gemacht.',
      image: '/api/placeholder/300/200',
      slug: 'zahnstein-reinigung'
    },

    // Spezielle Zahnbehandlungen
    {
      id: 'digital-dentistry',
      title: 'Digitale Zahnheilkunde',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Digitale Zahnheilkunde und Zahndesign.',
      image: '/api/placeholder/300/200',
      slug: 'digitale-zahnheilkunde'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'Nadellose Anästhesie',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Nadellose Anästhesie-Anwendung.',
      image: '/api/placeholder/300/200',
      slug: 'nadellose-anaesthesie'
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'Sedierung und Vollnarkose',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Sedierung und Vollnarkose für Behandlungen.',
      image: '/api/placeholder/300/200',
      slug: 'sedierung-vollnarkose'
    },
    {
      id: 'rubber-dam-application',
      title: 'Kofferdam-Anwendung',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Kofferdam-Anwendung für Isolation.',
      image: '/api/placeholder/300/200',
      slug: 'kofferdam-anwendung'
    },
    {
      id: 'jaw-tumor',
      title: 'Kiefertumor',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Behandlung von Kiefertumoren.',
      image: '/api/placeholder/300/200',
      slug: 'kiefertumor'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Kieferbruch-Behandlung',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Chirurgische Behandlung von Kieferbrüchen.',
      image: '/api/placeholder/300/200',
      slug: 'kieferbruch-behandlung'
    },
    {
      id: 'dental-spa',
      title: 'Zahn-Spa',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Entspannende Zahn-Spa-Dienste.',
      image: '/api/placeholder/300/200',
      slug: 'zahn-spa'
    },
    {
      id: '10x10-examination',
      title: '10 X 10 Untersuchung',
      category: 'Spezielle Zahnbehandlungen',
      description: 'Umfassende 10x10 Zahnuntersuchung.',
      image: '/api/placeholder/300/200',
      slug: '10x10-untersuchung'
    }
  ];

  // Arama filtreleme
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Unsere Behandlungen - Hospitadent"
        description="Alle Zahnbehandlungen und Dienstleistungen von Hospitadent. Ästhetische Zahnheilkunde, Implantate, Kieferorthopädie und mehr."
        keywords="Zahnbehandlungen, ästhetische Zahnheilkunde, Implantate, Kieferorthopädie, Kinderzahnheilkunde, Parodontologie, hospitadent"
        url="https://hospitadent.com/de/behandlungen"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Unsere Behandlungen
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Arama Bölümü */}
            <div className="mb-12">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                  <div className="flex-1 px-6 py-4">
                    <input
                      type="text"
                      placeholder="Suche"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full text-lg text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <button className="text-[#0f4f78] px-6 py-4 hover:text-[#2bb3ea] transition-all duration-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Tedavi Kartları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#004876]/20 group flex flex-col h-full">
                  {/* Resim */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f4f78]/20 to-[#2bb3ea]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-[#004876]/30">
                        🦷
                      </div>
                    </div>
                  </div>
                  
                  {/* İçerik */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Kategori */}
                    <div className="mb-2 -mt-1">
                      <span className="inline-block bg-blue-100 text-[#004876] text-xs font-semibold px-0.5 py-0 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    
                    {/* Başlık */}
                    <h3 className="text-xl font-bold text-[#0f4f78] mb-3 group-hover:text-[#2bb3ea] transition-colors duration-300 line-clamp-2">
                      {treatment.title}
                    </h3>
                    
                    {/* Açıklama */}
                    <p className="text-[#0f4f78]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {treatment.description}
                    </p>
                    
                    {/* Detay Butonu */}
                    <a 
                      href={`/behandlung/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      Details Anzeigen
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Sonuç Bulunamadı */}
            {filteredTreatments.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#004876] mb-2">
                  Keine Ergebnisse Gefunden
                </h3>
                <p className="text-gray-600 mb-6">
                  Keine Ergebnisse für "{searchTerm}" gefunden. Sie können verschiedene Schlüsselwörter versuchen.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Alle Behandlungen Anzeigen
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Lassen Sie uns die Beste Behandlung für Sie Bestimmen
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Vereinbaren Sie einen Termin für eine kostenlose Beratung mit unseren Zahnärzten
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:4449922"
                    className="bg-white text-[#0f4f78] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    444 99 22
                  </a>
                  <a 
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Kontakt
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Treatments; 