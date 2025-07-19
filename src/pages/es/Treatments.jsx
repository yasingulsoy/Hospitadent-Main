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
      id: 'dental-implant',
      title: 'Implante Dental',
      category: 'Implante',
      description: 'Aplicaciones modernas de implantes dentales con alta tasa de éxito.',
      image: '/api/placeholder/300/200',
      slug: 'implante-dental'
    },
    {
      id: 'all-on-4',
      title: 'All-on-4',
      category: 'Implante',
      description: 'Tratamiento dental completo con solo 4 implantes.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-4'
    },
    {
      id: 'all-on-6',
      title: 'All-on-6',
      category: 'Implante',
      description: 'Tratamiento dental completo con 6 implantes.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-6'
    },
    {
      id: 'zygomatic-implant',
      title: 'Implante Cigomático',
      category: 'Implante',
      description: 'Aplicaciones de implantes cigomáticos para casos difíciles.',
      image: '/api/placeholder/300/200',
      slug: 'implante-cigomatico'
    },
    {
      id: 'basal-implant',
      title: 'Implante Basal',
      category: 'Implante',
      description: 'Aplicaciones de implantes basales para carga inmediata.',
      image: '/api/placeholder/300/200',
      slug: 'implante-basal'
    },
    {
      id: 'implant-supported-denture',
      title: 'Prótesis Sobre Implantes',
      category: 'Implante',
      description: 'Soluciones de prótesis dentales sobre implantes.',
      image: '/api/placeholder/300/200',
      slug: 'protesis-sobre-implantes'
    },

    // Ortodoncia
    {
      id: 'orthodontics',
      title: 'Ortodoncia',
      category: 'Ortodoncia',
      description: 'Tratamientos ortodónticos completos.',
      image: '/api/placeholder/300/200',
      slug: 'ortodoncia'
    },
    {
      id: 'invisible-braces',
      title: 'Brackets Invisibles',
      category: 'Ortodoncia',
      description: 'Tratamientos modernos de brackets invisibles.',
      image: '/api/placeholder/300/200',
      slug: 'brackets-invisibles'
    },
    {
      id: 'ceramic-braces',
      title: 'Brackets de Cerámica',
      category: 'Ortodoncia',
      description: 'Brackets de cerámica estéticos.',
      image: '/api/placeholder/300/200',
      slug: 'brackets-ceramica'
    },
    {
      id: 'lingual-braces',
      title: 'Brackets Linguales',
      category: 'Ortodoncia',
      description: 'Brackets internos para máxima estética.',
      image: '/api/placeholder/300/200',
      slug: 'brackets-linguales'
    },
    {
      id: 'clear-aligners',
      title: 'Alineadores Transparentes',
      category: 'Ortodoncia',
      description: 'Tratamiento moderno con alineadores transparentes.',
      image: '/api/placeholder/300/200',
      slug: 'alineadores-transparentes'
    },

    // Cirugía
    {
      id: 'wisdom-tooth-extraction',
      title: 'Extracción de Muela del Juicio',
      category: 'Cirugía',
      description: 'Extracción segura de muelas del juicio.',
      image: '/api/placeholder/300/200',
      slug: 'extraccion-muela-juicio'
    },
    {
      id: 'tooth-extraction',
      title: 'Extracción Dental',
      category: 'Cirugía',
      description: 'Extracción dental sin dolor.',
      image: '/api/placeholder/300/200',
      slug: 'extraccion-dental'
    },
    {
      id: 'sinus-lift',
      title: 'Elevación de Seno',
      category: 'Cirugía',
      description: 'Cirugías de elevación de seno para tratamiento de implantes.',
      image: '/api/placeholder/300/200',
      slug: 'elevacion-seno'
    },
    {
      id: 'bone-grafting',
      title: 'Injerto Óseo',
      category: 'Cirugía',
      description: 'Procedimientos de injerto óseo para tratamiento de implantes.',
      image: '/api/placeholder/300/200',
      slug: 'injerto-oseo'
    },
    {
      id: 'gum-surgery',
      title: 'Cirugía de Encías',
      category: 'Cirugía',
      description: 'Cirugía de encías para una sonrisa saludable.',
      image: '/api/placeholder/300/200',
      slug: 'cirugia-encias'
    },

    // Endodoncia
    {
      id: 'root-canal-treatment',
      title: 'Tratamiento de Conducto',
      category: 'Endodoncia',
      description: 'Tratamiento moderno de conducto radicular.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-conducto'
    },
    {
      id: 'endodontic-retreatment',
      title: 'Re-tratamiento Endodóntico',
      category: 'Endodoncia',
      description: 'Re-tratamiento endodóntico para casos difíciles.',
      image: '/api/placeholder/300/200',
      slug: 're-tratamiento-endodontico'
    },
    {
      id: 'apicoectomy',
      title: 'Apicectomía',
      category: 'Endodoncia',
      description: 'Apicectomía para inflamaciones crónicas.',
      image: '/api/placeholder/300/200',
      slug: 'apicectomia'
    },

    // Periodoncia
    {
      id: 'periodontal-treatment',
      title: 'Tratamiento Periodontal',
      category: 'Periodoncia',
      description: 'Tratamiento completo de periodontitis.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-periodontal'
    },
    {
      id: 'gum-disease-treatment',
      title: 'Tratamiento de Enfermedad de Encías',
      category: 'Periodoncia',
      description: 'Tratamiento de enfermedades de encías.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-enfermedad-encias'
    },
    {
      id: 'scaling-root-planing',
      title: 'Limpieza de Sarro',
      category: 'Periodoncia',
      description: 'Limpieza profesional de sarro y alisado radicular.',
      image: '/api/placeholder/300/200',
      slug: 'limpieza-sarro'
    },

    // Odontología Pediátrica
    {
      id: 'pediatric-dentistry',
      title: 'Odontología Pediátrica',
      category: 'Odontología Pediátrica',
      description: 'Tratamiento dental especializado para niños.',
      image: '/api/placeholder/300/200',
      slug: 'odontologia-pediatrica'
    },
    {
      id: 'fissure-sealant',
      title: 'Sellado de Fosas y Fisuras',
      category: 'Odontología Pediátrica',
      description: 'Sellado de fosas y fisuras para prevención de caries.',
      image: '/api/placeholder/300/200',
      slug: 'sellado-fosas-fisuras'
    },
    {
      id: 'fluoride-treatment',
      title: 'Tratamiento con Flúor',
      category: 'Odontología Pediátrica',
      description: 'Tratamiento con flúor para dientes fuertes.',
      image: '/api/placeholder/300/200',
      slug: 'tratamiento-fluor'
    }
  ];

  // Función de búsqueda
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtener categorías
  const categories = [...new Set(allTreatments.map(treatment => treatment.category))];

  return (
    <>
      <SEOHead 
        title="Nuestros Tratamientos - Hospitadent"
        description="Descubre nuestros tratamientos dentales integrales: odontología estética, implantes, ortodoncia, cirugía y más. Métodos de tratamiento modernos para tu sonrisa perfecta."
        keywords="tratamientos dentales, implantes, ortodoncia, odontología estética, cirugía dental, Hospitadent España"
        url="https://hospitadent.com/es/nuestros-tratamientos"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-blue-600">tratamientos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Descubre nuestros tratamientos dentales integrales con tecnología de vanguardia y especialistas experimentados
            </p>
            
            {/* Caja de búsqueda */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar tratamiento o categoría..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Tratamientos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                <span className="font-semibold">{filteredTreatments.length}</span> tratamiento{filteredTreatments.length !== 1 ? 's' : ''} encontrado{filteredTreatments.length !== 1 ? 's' : ''} para "{searchTerm}"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-6xl text-blue-400 opacity-60 group-hover:scale-110 transition-transform duration-500">
                      🦷
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {treatment.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      ID: {treatment.slug}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTreatments.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron tratamientos</h3>
              <p className="text-gray-600 mb-6">
                Intenta con otros términos de búsqueda o revisa todos nuestros tratamientos.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Ver todos los tratamientos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu sonrisa perfecta?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Agenda una cita hoy y recibe asesoramiento de nuestros expertos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tk.emsal.com.tr/hospitadent/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              📞 Agendar cita
            </a>
            <a
              href="tel:4449922"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              ☎️ Llamar
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Treatments; 