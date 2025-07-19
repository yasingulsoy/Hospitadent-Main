import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Odontología Estética
    {
      id: 'hollywood-smile',
      title: 'Sonrisa de Hollywood',
      category: 'Odontología Estética',
      description: 'Obtén la sonrisa de tus sueños con un diseño perfecto de sonrisa.',
      image: '/api/placeholder/300/200',
      slug: 'sonrisa-hollywood'
    },
    {
      id: 'smile-design',
      title: 'Diseño de Sonrisa',
      category: 'Odontología Estética',
      description: 'Diseño estético de sonrisa personalizado con planificación digital.',
      image: '/api/placeholder/300/200',
      slug: 'diseno-sonrisa'
    },
    {
      id: 'teeth-whitening',
      title: 'Blanqueamiento Dental',
      category: 'Odontología Estética',
      description: 'Aplicaciones de blanqueamiento dental rápidas y seguras con métodos modernos.',
      image: '/api/placeholder/300/200',
      slug: 'blanqueamiento-dental'
    },
    {
      id: 'pink-aesthetics',
      title: 'Estética Rosa',
      category: 'Odontología Estética',
      description: 'Sonrisa perfecta con estética de encías.',
      image: '/api/placeholder/300/200',
      slug: 'estetica-rosa'
    },
    {
      id: 'laminate-veneer',
      title: 'Carillas Laminadas',
      category: 'Odontología Estética',
      description: 'Carillas de porcelana estéticas y finas.',
      image: '/api/placeholder/300/200',
      slug: 'carillas-laminadas'
    },
    {
      id: 'zirconium-crown',
      title: 'Coronas de Circonio',
      category: 'Odontología Estética',
      description: 'Soluciones de coronas dentales naturales, duraderas y estéticas.',
      image: '/api/placeholder/300/200',
      slug: 'coronas-circonio'
    },
    {
      id: 'porcelain-crown',
      title: 'Coronas de Porcelana',
      category: 'Odontología Estética',
      description: 'Coronas dentales de porcelana duraderas y naturales.',
      image: '/api/placeholder/300/200',
      slug: 'coronas-porcelana'
    },
    {
      id: 'lumineers-veneer',
      title: 'Carillas Lumineers',
      category: 'Odontología Estética',
      description: 'Sistema de carillas de porcelana finas y transparentes.',
      image: '/api/placeholder/300/200',
      slug: 'carillas-lumineers'
    },
    {
      id: 'emax-crown',
      title: 'Coronas Emax',
      category: 'Odontología Estética',
      description: 'Coronas dentales Emax con alta estética y durabilidad.',
      image: '/api/placeholder/300/200',
      slug: 'coronas-emax'
    },
    {
      id: 'aesthetic-filling',
      title: 'Empaste Estético',
      category: 'Odontología Estética',
      description: 'Empastes dentales estéticos de aspecto natural.',
      image: '/api/placeholder/300/200',
      slug: 'empaste-estetico'
    },
    {
      id: 'bisectomy',
      title: 'Bisectomía',
      category: 'Odontología Estética',
      description: 'Procedimiento quirúrgico para estética de encías.',
      image: '/api/placeholder/300/200',
      slug: 'bisectomia'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Tratamiento Dental con Láser',
      category: 'Odontología Estética',
      description: 'Tratamientos dentales con tecnología láser moderna.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-laser'
    },
    {
      id: 'inlay-filling',
      title: 'Empaste Inlay',
      category: 'Odontología Estética',
      description: 'Técnica de empaste precisa y estética.',
      image: '/api/placeholder/300/200',
      slug: 'empaste-inlay'
    },
    {
      id: 'onlay-filling',
      title: 'Empaste Onlay',
      category: 'Odontología Estética',
      description: 'Restauración de empaste completa.',
      image: '/api/placeholder/300/200',
      slug: 'empaste-onlay'
    },
    {
      id: 'dental-diamond',
      title: 'Diamante Dental',
      category: 'Odontología Estética',
      description: 'Procedimiento de colocación de diamantes en dientes.',
      image: '/api/placeholder/300/200',
      slug: 'diamante-dental'
    },
    {
      id: 'dental-tattoo',
      title: 'Tatuaje Dental',
      category: 'Odontología Estética',
      description: 'Aplicación de tatuaje decorativo en dientes.',
      image: '/api/placeholder/300/200',
      slug: 'tatuaje-dental'
    },
    {
      id: 'dental-jewelry',
      title: 'Joyería Dental',
      category: 'Odontología Estética',
      description: 'Procedimiento de colocación de joyas en dientes.',
      image: '/api/placeholder/300/200',
      slug: 'joyeria-dental'
    },
    {
      id: 'bonding-treatment',
      title: 'Tratamiento de Bonding',
      category: 'Odontología Estética',
      description: 'Aplicaciones estéticas de bonding para pequeños defectos dentales.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-bonding'
    },

    // Dientes Faltantes
    {
      id: 'dental-bridge',
      title: 'Puente Dental',
      category: 'Dientes Faltantes',
      description: 'Puente fijo para dientes faltantes.',
      image: '/api/placeholder/300/200',
      slug: 'puente-dental'
    },
    {
      id: 'denture',
      title: 'Prótesis Dental',
      category: 'Dientes Faltantes',
      description: 'Soluciones de prótesis dentales removibles.',
      image: '/api/placeholder/300/200',
      slug: 'protesis-dental'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Prótesis Fija',
      category: 'Dientes Faltantes',
      description: 'Aplicaciones de prótesis dentales fijas.',
      image: '/api/placeholder/300/200',
      slug: 'protesis-fija'
    },
    {
      id: 'snap-on-denture',
      title: 'Prótesis de Clip',
      category: 'Dientes Faltantes',
      description: 'Sistema de prótesis dental de clip.',
      image: '/api/placeholder/300/200',
      slug: 'protesis-clip'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Tratamiento Completo de Boca',
      category: 'Dientes Faltantes',
      description: 'Tratamiento dental completo para toda la boca.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-completo-boca'
    },

    // Implante
    {
      id: 'single-tooth-implant',
      title: 'Implante de Diente Único',
      category: 'Implante',
      description: 'Tratamiento de implante para un solo diente.',
      image: '/api/placeholder/300/200',
      slug: 'implante-diente-unico'
    },
    {
      id: 'full-mouth-implant',
      title: 'Implante de Boca Completa',
      category: 'Implante',
      description: 'Tratamiento de implante para toda la boca.',
      image: '/api/placeholder/300/200',
      slug: 'implante-boca-completa'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Implante de Dientes Múltiples',
      category: 'Implante',
      description: 'Tratamiento de implante para varios dientes.',
      image: '/api/placeholder/300/200',
      slug: 'implante-dientes-multiples'
    },
    {
      id: 'one-day-implant',
      title: 'Implante en 1 Día',
      category: 'Implante',
      description: 'Tratamiento de implante en un solo día.',
      image: '/api/placeholder/300/200',
      slug: 'implante-1-dia'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'Implante',
      description: 'Técnica de implante All on Four.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'Implante',
      description: 'Técnica de implante All on Six.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Técnica Box',
      category: 'Implante',
      description: 'Técnica de implante Box.',
      image: '/api/placeholder/300/200',
      slug: 'tecnica-box'
    },

    // Tratamientos Dentales Generales
    {
      id: 'dental-examination',
      title: 'Examen Dental',
      category: 'Tratamientos Dentales Generales',
      description: 'Examen dental completo.',
      image: '/api/placeholder/300/200',
      slug: 'examen-dental'
    },
    {
      id: 'crown-veneer',
      title: 'Corona Dental',
      category: 'Tratamientos Dentales Generales',
      description: 'Qué es una corona dental y cómo se hace.',
      image: '/api/placeholder/300/200',
      slug: 'corona-dental'
    },
    {
      id: 'dental-filling',
      title: 'Empaste Dental',
      category: 'Tratamientos Dentales Generales',
      description: 'Cómo se hace un empaste dental y cuáles son sus tipos.',
      image: '/api/placeholder/300/200',
      slug: 'empaste-dental'
    },
    {
      id: 'root-canal-treatment',
      title: 'Tratamiento de Conducto',
      category: 'Tratamientos Dentales Generales',
      description: 'Cómo se hace el tratamiento de conducto y si duele.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-conducto'
    },
    {
      id: 'tooth-extraction',
      title: 'Extracción Dental',
      category: 'Tratamientos Dentales Generales',
      description: 'Qué es la extracción dental y cómo se hace.',
      image: '/api/placeholder/300/200',
      slug: 'extraccion-dental'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Extracción de Diente Impactado',
      category: 'Tratamientos Dentales Generales',
      description: 'Qué es la extracción de dientes impactados.',
      image: '/api/placeholder/300/200',
      slug: 'extraccion-diente-impactado'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'Extracción de Muela del Juicio',
      category: 'Tratamientos Dentales Generales',
      description: 'Extracción de muelas del juicio.',
      image: '/api/placeholder/300/200',
      slug: 'extraccion-muela-juicio'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Tratamiento de Diente Roto',
      category: 'Tratamientos Dentales Generales',
      description: 'Qué es el tratamiento de diente roto.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-diente-roto'
    },

    // Tratamientos Dentales Preventivos
    {
      id: 'bad-breath',
      title: 'Mal Aliento',
      category: 'Tratamientos Dentales Preventivos',
      description: 'Qué es el mal aliento y cómo se trata.',
      image: '/api/placeholder/300/200',
      slug: 'mal-aliento'
    },
    {
      id: 'tooth-sensitivity',
      title: 'Sensibilidad Dental',
      category: 'Tratamientos Dentales Preventivos',
      description: 'Qué es la sensibilidad dental y cómo se trata.',
      image: '/api/placeholder/300/200',
      slug: 'sensibilidad-dental'
    },
    {
      id: 'teeth-grinding',
      title: 'Rechinar de Dientes',
      category: 'Tratamientos Dentales Preventivos',
      description: 'Qué es el rechinar de dientes y cómo se trata.',
      image: '/api/placeholder/300/200',
      slug: 'rechinar-dientes'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Tratamiento de Rechinar',
      category: 'Tratamientos Dentales Preventivos',
      description: 'Qué es el tratamiento de rechinar y cómo se hace.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-rechinar'
    },
    {
      id: 'snoring-treatment',
      title: 'Tratamiento de Ronquidos',
      category: 'Tratamientos Dentales Preventivos',
      description: 'Qué es el tratamiento de ronquidos y cómo se aplica.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-ronquidos'
    },

    // Ortodoncia
    {
      id: 'braces-treatment',
      title: 'Tratamiento de Brackets',
      category: 'Ortodoncia',
      description: 'Qué es el tratamiento de brackets y cómo se aplica.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-brackets'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Tratamiento de Brackets Transparentes',
      category: 'Ortodoncia',
      description: 'Tratamiento ortodóntico con brackets transparentes.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-brackets-transparentes'
    },
    {
      id: 'invisalign-treatment',
      title: 'Tratamiento Invisalign',
      category: 'Ortodoncia',
      description: 'Tratamiento Invisalign con alineadores transparentes.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-invisalign'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Tratamiento de Brackets Invisibles',
      category: 'Ortodoncia',
      description: 'Tratamiento ortodóntico invisible.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-brackets-invisibles'
    },

    // Odontopediatría
    {
      id: 'fluoride-application',
      title: 'Aplicación de Flúor',
      category: 'Odontopediatría',
      description: 'Aplicación de flúor para protección dental.',
      image: '/api/placeholder/300/200',
      slug: 'aplicacion-fluor'
    },
    {
      id: 'fissure-sealant',
      title: 'Sellador de Fisuras',
      category: 'Odontopediatría',
      description: 'Protección de fisuras dentales.',
      image: '/api/placeholder/300/200',
      slug: 'sellador-fisuras'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Tratamiento Ortodóntico Pediátrico',
      category: 'Odontopediatría',
      description: 'Qué es el tratamiento ortodóntico pediátrico.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-ortodontico-pediatrico'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Caries del Biberón',
      category: 'Odontopediatría',
      description: 'Qué es la caries del biberón.',
      image: '/api/placeholder/300/200',
      slug: 'caries-biberon'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Tratamiento de Mantenedor de Espacio',
      category: 'Odontopediatría',
      description: 'Qué es el tratamiento de mantenedor de espacio.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-mantenedor-espacio'
    },

    // Periodontología
    {
      id: 'gum-treatment',
      title: 'Tratamiento de Encías',
      category: 'Periodontología',
      description: 'Tratamiento de enfermedades de las encías.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-encias'
    },
    {
      id: 'curettage-treatment',
      title: 'Tratamiento de Curetaje',
      category: 'Periodontología',
      description: 'Qué es el tratamiento de curetaje.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-curetaje'
    },
    {
      id: 'flap-treatment',
      title: 'Tratamiento de Colgajo',
      category: 'Periodontología',
      description: 'Tratamiento quirúrgico de encías.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-colgajo'
    },
    {
      id: 'gingivitis',
      title: 'Gingivitis',
      category: 'Periodontología',
      description: 'Inflamación de encías y gingivitis.',
      image: '/api/placeholder/300/200',
      slug: 'gingivitis'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Limpieza de Sarro',
      category: 'Periodontología',
      description: 'Qué es la limpieza de sarro y cómo se hace.',
      image: '/api/placeholder/300/200',
      slug: 'limpieza-sarro'
    },

    // Tratamientos Dentales Especiales
    {
      id: 'digital-dentistry',
      title: 'Odontología Digital',
      category: 'Tratamientos Dentales Especiales',
      description: 'Odontología digital y diseño dental.',
      image: '/api/placeholder/300/200',
      slug: 'odontologia-digital'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'Anestesia Sin Aguja',
      category: 'Tratamientos Dentales Especiales',
      description: 'Aplicación de anestesia sin aguja.',
      image: '/api/placeholder/300/200',
      slug: 'anestesia-sin-aguja'
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'Sedación y Anestesia General',
      category: 'Tratamientos Dentales Especiales',
      description: 'Sedación y anestesia general para tratamientos.',
      image: '/api/placeholder/300/200',
      slug: 'sedacion-anestesia-general'
    },
    {
      id: 'rubber-dam-application',
      title: 'Aplicación de Dique',
      category: 'Tratamientos Dentales Especiales',
      description: 'Aplicación de dique para aislamiento.',
      image: '/api/placeholder/300/200',
      slug: 'aplicacion-dique'
    },
    {
      id: 'jaw-tumor',
      title: 'Tumor de Mandíbula',
      category: 'Tratamientos Dentales Especiales',
      description: 'Tratamiento de tumores de mandíbula.',
      image: '/api/placeholder/300/200',
      slug: 'tumor-mandibula'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Tratamiento de Fractura de Mandíbula',
      category: 'Tratamientos Dentales Especiales',
      description: 'Tratamiento quirúrgico de fracturas de mandíbula.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-fractura-mandibula'
    },
    {
      id: 'dental-spa',
      title: 'Spa Dental',
      category: 'Tratamientos Dentales Especiales',
      description: 'Servicios relajantes de spa dental.',
      image: '/api/placeholder/300/200',
      slug: 'spa-dental'
    },
    {
      id: '10x10-examination',
      title: 'Examen 10 X 10',
      category: 'Tratamientos Dentales Especiales',
      description: 'Examen dental completo 10x10.',
      image: '/api/placeholder/300/200',
      slug: 'examen-10x10'
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
        title="Nuestros Tratamientos - Hospitadent"
        description="Todos los tratamientos dentales y servicios ofrecidos por Hospitadent. Odontología estética, implantes, ortodoncia y más."
        keywords="tratamientos dentales, odontología estética, implantes, ortodoncia, odontopediatría, periodontología, hospitadent"
        url="https://hospitadent.com/es/nuestros-tratamientos"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Nuestros Tratamientos
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
                      placeholder="Buscar"
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
                      href={`/tratamiento/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      Ver Detalles
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
                  No Se Encontraron Resultados
                </h3>
                <p className="text-gray-600 mb-6">
                  No se encontraron resultados para "{searchTerm}". Puedes intentar diferentes palabras clave.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Ver Todos los Tratamientos
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Determinemos el Mejor Tratamiento para Ti
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Agenda una consulta gratuita con nuestros dentistas expertos
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
                    Contáctanos
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