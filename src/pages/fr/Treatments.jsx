import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const { t } = useTranslation();

  const treatmentCategories = [
    {
      id: 'cosmetic',
      title: 'Dentisterie Esthétique',
      icon: '✨',
      treatments: [
        'Hollywood Smile',
        'Design du Sourire',
        'Blanchiment des Dents',
        'Esthétique Rose',
        'Facette Laminate',
        'Couronne Zircone',
        'Couronne Porcelaine',
        'Facette Lumineers',
        'Couronne Emax',
        'Obturation Esthétique',
        'Bisectomie',
        'Traitement Dentaire au Laser',
        'Obturation Inlay',
        'Obturation Onlay',
        'Diamant Dentaire',
        'Tatouage Dentaire',
        'Bijou Dentaire',
        'Traitement Bonding'
      ]
    },
    {
      id: 'missing-teeth',
      title: 'Dents Manquantes',
      icon: '🦷',
      treatments: [
        'Bridge Dentaire',
        'Prothèse Dentaire',
        'Prothèse Fixe',
        'Prothèse à Clip',
        'Traitement Dentaire Complet'
      ]
    },
    {
      id: 'implant',
      title: 'Implant',
      icon: '🦿',
      treatments: [
        'Traitement Implant Dent Unique',
        'Traitement Implant Bouche Complète',
        'Traitement Implant Multi-Dents',
        'Implant en 1 Jour',
        'All on Four',
        'All on Six',
        'Technique Box'
      ]
    },
    {
      id: 'general',
      title: 'Traitements Dentaires Généraux',
      icon: '🏥',
      treatments: [
        'Examen Dentaire',
        'Couronne Dentaire',
        'Obturation Dentaire',
        'Traitement de Canal',
        'Extraction Dentaire',
        'Extraction Dent Incluse',
        'Extraction Dent de Sagesse',
        'Traitement Dent Cassée'
      ]
    },
    {
      id: 'preventive',
      title: 'Traitements Dentaires Préventifs',
      icon: '🛡️',
      treatments: [
        'Traitement Mauvaise Haleine',
        'Traitement Sensibilité Dentaire',
        'Traitement Bruxisme',
        'Traitement Grincement des Dents',
        'Traitement Ronflement'
      ]
    },
    {
      id: 'orthodontics',
      title: 'Orthodontie',
      icon: '🦷',
      treatments: [
        'Traitement Appareil Dentaire',
        'Traitement Bracket Transparent',
        'Traitement Invisalign',
        'Traitement Appareil Invisible'
      ]
    },
    {
      id: 'pedodontics',
      title: 'Pédodontie / Dentisterie Pédiatrique',
      icon: '👶',
      treatments: [
        'Application Fluor',
        'Scellement de Sillon',
        'Traitement Orthodontique Pédiatrique',
        'Traitement Carie du Biberon',
        'Traitement Mainteneur d\'Espace'
      ]
    },
    {
      id: 'periodontology',
      title: 'Parodontologie',
      icon: '🦷',
      treatments: [
        'Traitement Gencive',
        'Traitement Curetage',
        'Traitement Lambeau',
        'Inflammation Gencive | Gingivite',
        'Détartrage Dentaire'
      ]
    },
    {
      id: 'special',
      title: 'Traitements Dentaires Spéciaux',
      icon: '⭐',
      treatments: [
        'Dentisterie Numérique et Design Dentaire',
        'Application Anesthésie Sans Aiguille',
        'Sédation et Anesthésie Générale',
        'Application Digue Dentaire',
        'Tumeur de la Mâchoire',
        'Traitement Fracture Mâchoire',
        'Spa Dentaire',
        'Examen 10 X 10'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Nos Traitements - Hospitadent"
        description="Tous les traitements et services dentaires offerts chez Hospitadent. Dentisterie esthétique, implants, orthodontie et plus."
        keywords="traitements dentaires, dentisterie esthétique, implants, orthodontie, pédodontie, parodontologie, hospitadent"
        url="https://hospitadent.com/fr/traitements"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Nos Traitements
            </h1>
            <p className="text-xl text-gray-600 text-center mt-4 max-w-3xl mx-auto">
              Traitements dentaires complets avec technologie moderne et personnel expert
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Treatment Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {treatmentCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
                  <div className="p-8">
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">
                        {category.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-[#004876]">
                        {category.title}
                      </h2>
                    </div>
                    
                    {/* Treatments List */}
                    <div className="space-y-3">
                      {category.treatments.map((treatment, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#2bb3ea] rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-[#004876] text-sm">
                            {treatment}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Details Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Voir les Détails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Déterminons le Traitement le Plus Adapté pour Vous
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Prenez rendez-vous pour une consultation gratuite avec nos dentistes experts
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
                    href="/fr/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Nous Contacter
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