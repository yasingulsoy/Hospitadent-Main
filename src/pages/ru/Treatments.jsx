import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Эстетическая стоматология
    {
      id: 'hollywood-smile',
      title: 'Голливудская улыбка',
      category: 'Эстетическая стоматология',
      description: 'Получите улыбку своей мечты с идеальным дизайном улыбки.',
      image: '/api/placeholder/300/200',
      slug: 'gollivudskaya-ulybka'
    },
    {
      id: 'smile-design',
      title: 'Дизайн улыбки',
      category: 'Эстетическая стоматология',
      description: 'Персонализированный эстетический дизайн улыбки с цифровым планированием.',
      image: '/api/placeholder/300/200',
      slug: 'dizayn-ulybki'
    },
    {
      id: 'teeth-whitening',
      title: 'Отбеливание зубов',
      category: 'Эстетическая стоматология',
      description: 'Быстрые и безопасные процедуры отбеливания зубов современными методами.',
      image: '/api/placeholder/300/200',
      slug: 'otbelivanie-zubov'
    },
    {
      id: 'pink-aesthetics',
      title: 'Розовая эстетика',
      category: 'Эстетическая стоматология',
      description: 'Идеальная улыбка с эстетикой десен.',
      image: '/api/placeholder/300/200',
      slug: 'rozovaya-estetika'
    },
    {
      id: 'laminate-veneer',
      title: 'Ламинированные виниры',
      category: 'Эстетическая стоматология',
      description: 'Эстетичные и тонкие фарфоровые виниры.',
      image: '/api/placeholder/300/200',
      slug: 'laminatnye-viniry'
    },
    {
      id: 'zirconium-crown',
      title: 'Циркониевые коронки',
      category: 'Эстетическая стоматология',
      description: 'Естественно выглядящие, долговечные и эстетичные решения зубных коронок.',
      image: '/api/placeholder/300/200',
      slug: 'tsirkonievye-koronki'
    },
    {
      id: 'porcelain-crown',
      title: 'Фарфоровые коронки',
      category: 'Эстетическая стоматология',
      description: 'Долговечные и естественно выглядящие фарфоровые зубные коронки.',
      image: '/api/placeholder/300/200',
      slug: 'farforovye-koronki'
    },
    {
      id: 'lumineers-veneer',
      title: 'Виниры Lumineers',
      category: 'Эстетическая стоматология',
      description: 'Тонкая и прозрачная система фарфоровых виниров.',
      image: '/api/placeholder/300/200',
      slug: 'viniry-lumineers'
    },
    {
      id: 'emax-crown',
      title: 'Коронки Emax',
      category: 'Эстетическая стоматология',
      description: 'Зубные коронки Emax с высокой эстетикой и долговечностью.',
      image: '/api/placeholder/300/200',
      slug: 'koronki-emax'
    },
    {
      id: 'aesthetic-filling',
      title: 'Эстетическая пломба',
      category: 'Эстетическая стоматология',
      description: 'Естественно выглядящие эстетические зубные пломбы.',
      image: '/api/placeholder/300/200',
      slug: 'esteticheskaya-plomba'
    },
    {
      id: 'bisectomy',
      title: 'Бисектомия',
      category: 'Эстетическая стоматология',
      description: 'Хирургическая процедура для эстетики десен.',
      image: '/api/placeholder/300/200',
      slug: 'bisektomiya'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Лазерное лечение зубов',
      category: 'Эстетическая стоматология',
      description: 'Стоматологические процедуры с современной лазерной технологией.',
      image: '/api/placeholder/300/200',
      slug: 'lazernoe-lechenie-zubov'
    },
    {
      id: 'inlay-filling',
      title: 'Вкладка Inlay',
      category: 'Эстетическая стоматология',
      description: 'Точная и эстетичная техника пломбирования.',
      image: '/api/placeholder/300/200',
      slug: 'vkladka-inlay'
    },
    {
      id: 'onlay-filling',
      title: 'Вкладка Onlay',
      category: 'Эстетическая стоматология',
      description: 'Комплексная реставрация пломбы.',
      image: '/api/placeholder/300/200',
      slug: 'vkladka-onlay'
    },
    {
      id: 'dental-diamond',
      title: 'Зубной бриллиант',
      category: 'Эстетическая стоматология',
      description: 'Процедура установки бриллиантов на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-brilliant'
    },
    {
      id: 'dental-tattoo',
      title: 'Зубная татуировка',
      category: 'Эстетическая стоматология',
      description: 'Декоративное нанесение татуировки на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnaya-tatuirovka'
    },
    {
      id: 'dental-jewelry',
      title: 'Зубные украшения',
      category: 'Эстетическая стоматология',
      description: 'Процедура установки украшений на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnye-ukrasheniya'
    },
    {
      id: 'bonding-treatment',
      title: 'Лечение бондингом',
      category: 'Эстетическая стоматология',
      description: 'Эстетичные процедуры бондинга для небольших дефектов зубов.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-bondingom'
    },

    // Отсутствующие зубы
    {
      id: 'dental-bridge',
      title: 'Зубной мост',
      category: 'Отсутствующие зубы',
      description: 'Фиксированный мост для отсутствующих зубов.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-most'
    },
    {
      id: 'denture',
      title: 'Зубной протез',
      category: 'Отсутствующие зубы',
      description: 'Решения для съемных зубных протезов.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-protez'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Фиксированный протез',
      category: 'Отсутствующие зубы',
      description: 'Применение фиксированных зубных протезов.',
      image: '/api/placeholder/300/200',
      slug: 'fiksirovannyy-protez'
    },
    {
      id: 'snap-on-denture',
      title: 'Протез на защелках',
      category: 'Отсутствующие зубы',
      description: 'Система зубных протезов на защелках.',
      image: '/api/placeholder/300/200',
      slug: 'protez-na-zashchelkakh'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Полное лечение полости рта',
      category: 'Отсутствующие зубы',
      description: 'Комплексное стоматологическое лечение для всей полости рта.',
      image: '/api/placeholder/300/200',
      slug: 'polnoe-lechenie-polosti-rta'
    },

    // Имплантат
    {
      id: 'single-tooth-implant',
      title: 'Имплантат одного зуба',
      category: 'Имплантат',
      description: 'Лечение имплантатом для одного зуба.',
      image: '/api/placeholder/300/200',
      slug: 'implantat-odnogo-zuba'
    },
    {
      id: 'full-mouth-implant',
      title: 'Имплантат всей полости рта',
      category: 'Имплантат',
      description: 'Лечение имплантатом для всей полости рта.',
      image: '/api/placeholder/300/200',
      slug: 'implantat-vsey-polosti-rta'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Имплантат нескольких зубов',
      category: 'Имплантат',
      description: 'Лечение имплантатом для нескольких зубов.',
      image: '/api/placeholder/300/200',
      slug: 'implantat-neskolkikh-zubov'
    },
    {
      id: 'one-day-implant',
      title: 'Имплантат за 1 день',
      category: 'Имплантат',
      description: 'Лечение имплантатом за один день.',
      image: '/api/placeholder/300/200',
      slug: 'implantat-za-1-den'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'Имплантат',
      description: 'Техника имплантата All on Four.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'Имплантат',
      description: 'Техника имплантата All on Six.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Техника Box',
      category: 'Имплантат',
      description: 'Техника имплантата Box.',
      image: '/api/placeholder/300/200',
      slug: 'tekhnika-box'
    },

    // Общие стоматологические процедуры
    {
      id: 'dental-examination',
      title: 'Стоматологический осмотр',
      category: 'Общие стоматологические процедуры',
      description: 'Комплексный стоматологический осмотр.',
      image: '/api/placeholder/300/200',
      slug: 'stomatologicheskiy-osmotr'
    },
    {
      id: 'crown-veneer',
      title: 'Зубная коронка',
      category: 'Общие стоматологические процедуры',
      description: 'Что такое зубная коронка и как она изготавливается.',
      image: '/api/placeholder/300/200',
      slug: 'zubnaya-koronka'
    },
    {
      id: 'dental-filling',
      title: 'Зубная пломба',
      category: 'Общие стоматологические процедуры',
      description: 'Как делается зубная пломба и какие у нее типы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnaya-plomba'
    },
    {
      id: 'root-canal-treatment',
      title: 'Лечение корневого канала',
      category: 'Общие стоматологические процедуры',
      description: 'Как делается лечение корневого канала и больно ли это.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-kornevogo-kanala'
    },
    {
      id: 'tooth-extraction',
      title: 'Удаление зуба',
      category: 'Общие стоматологические процедуры',
      description: 'Что такое удаление зуба и как это делается.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-zuba'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Удаление ретинированного зуба',
      category: 'Общие стоматологические процедуры',
      description: 'Что такое удаление ретинированного зуба.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-retinirovannogo-zuba'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'Удаление зуба мудрости',
      category: 'Общие стоматологические процедуры',
      description: 'Удаление зубов мудрости.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-zuba-mudrosti'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Лечение сломанного зуба',
      category: 'Общие стоматологические процедуры',
      description: 'Что такое лечение сломанного зуба.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-slomannogo-zuba'
    },

    // Профилактические стоматологические процедуры
    {
      id: 'bad-breath',
      title: 'Неприятный запах изо рта',
      category: 'Профилактические стоматологические процедуры',
      description: 'Что такое неприятный запах изо рта и как это лечится.',
      image: '/api/placeholder/300/200',
      slug: 'nepriyatnyy-zapakh-izo-rta'
    },
    {
      id: 'tooth-sensitivity',
      title: 'Чувствительность зубов',
      category: 'Профилактические стоматологические процедуры',
      description: 'Что такое чувствительность зубов и как это лечится.',
      image: '/api/placeholder/300/200',
      slug: 'chuvstvitelnost-zubov'
    },
    {
      id: 'teeth-grinding',
      title: 'Скрежетание зубами',
      category: 'Профилактические стоматологические процедуры',
      description: 'Что такое скрежетание зубами и как это лечится.',
      image: '/api/placeholder/300/200',
      slug: 'skrezhetanie-zubami'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Лечение скрежетания',
      category: 'Профилактические стоматологические процедуры',
      description: 'Что такое лечение скрежетания и как это делается.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-skrezhetaniya'
    },
    {
      id: 'snoring-treatment',
      title: 'Лечение храпа',
      category: 'Профилактические стоматологические процедуры',
      description: 'Что такое лечение храпа и как это применяется.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-khrapa'
    },

    // Ортодонтия
    {
      id: 'braces-treatment',
      title: 'Лечение брекетами',
      category: 'Ортодонтия',
      description: 'Что такое лечение брекетами и как это применяется.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-breketami'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Лечение прозрачными брекетами',
      category: 'Ортодонтия',
      description: 'Ортодонтическое лечение с прозрачными брекетами.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-prozrachnymi-breketami'
    },
    {
      id: 'invisalign-treatment',
      title: 'Лечение Invisalign',
      category: 'Ортодонтия',
      description: 'Лечение Invisalign с прозрачными капами.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-invisalign'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Лечение невидимыми брекетами',
      category: 'Ортодонтия',
      description: 'Невидимое ортодонтическое лечение.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-nevidimymi-breketami'
    },

    // Детская стоматология
    {
      id: 'fluoride-application',
      title: 'Применение фтора',
      category: 'Детская стоматология',
      description: 'Применение фтора для защиты зубов.',
      image: '/api/placeholder/300/200',
      slug: 'primenenie-ftora'
    },
    {
      id: 'fissure-sealant',
      title: 'Герметизация фиссур',
      category: 'Детская стоматология',
      description: 'Защита зубных фиссур.',
      image: '/api/placeholder/300/200',
      slug: 'germetizatsiya-fissur'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Детское ортодонтическое лечение',
      category: 'Детская стоматология',
      description: 'Что такое детское ортодонтическое лечение.',
      image: '/api/placeholder/300/200',
      slug: 'detskoe-ortodonticheskoe-lechenie'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Бутылочный кариес',
      category: 'Детская стоматология',
      description: 'Что такое бутылочный кариес.',
      image: '/api/placeholder/300/200',
      slug: 'butylochnyy-karies'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Лечение удерживателем пространства',
      category: 'Детская стоматология',
      description: 'Что такое лечение удерживателем пространства.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-uderzhivatelem-prostranstva'
    },

    // Пародонтология
    {
      id: 'gum-treatment',
      title: 'Лечение десен',
      category: 'Пародонтология',
      description: 'Лечение заболеваний десен.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-desen'
    },
    {
      id: 'curettage-treatment',
      title: 'Лечение кюретажем',
      category: 'Пародонтология',
      description: 'Что такое лечение кюретажем.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-kyuretazhem'
    },
    {
      id: 'flap-treatment',
      title: 'Лечение лоскутом',
      category: 'Пародонтология',
      description: 'Хирургическое лечение десен.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-loskuтом'
    },
    {
      id: 'gingivitis',
      title: 'Гингивит',
      category: 'Пародонтология',
      description: 'Воспаление десен и гингивит.',
      image: '/api/placeholder/300/200',
      slug: 'gingivit'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Чистка зубного камня',
      category: 'Пародонтология',
      description: 'Что такое чистка зубного камня и как это делается.',
      image: '/api/placeholder/300/200',
      slug: 'chistka-zubnogo-kamnya'
    },

    // Специальные стоматологические процедуры
    {
      id: 'digital-dentistry',
      title: 'Цифровая стоматология',
      category: 'Специальные стоматологические процедуры',
      description: 'Цифровая стоматология и дизайн зубов.',
      image: '/api/placeholder/300/200',
      slug: 'tsifrovaya-stomatologiya'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'Анестезия без иглы',
      category: 'Специальные стоматологические процедуры',
      description: 'Применение анестезии без иглы.',
      image: '/api/placeholder/300/200',
      slug: 'anesteziya-bez-igly'
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'Седация и общая анестезия',
      category: 'Специальные стоматологические процедуры',
      description: 'Седация и общая анестезия для процедур.',
      image: '/api/placeholder/300/200',
      slug: 'sedatsiya-i-obshchaya-anesteziya'
    },
    {
      id: 'rubber-dam-application',
      title: 'Применение коффердама',
      category: 'Специальные стоматологические процедуры',
      description: 'Применение коффердама для изоляции.',
      image: '/api/placeholder/300/200',
      slug: 'primenenie-kofferdama'
    },
    {
      id: 'jaw-tumor',
      title: 'Опухоль челюсти',
      category: 'Специальные стоматологические процедуры',
      description: 'Лечение опухолей челюсти.',
      image: '/api/placeholder/300/200',
      slug: 'opukhol-chelyusti'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Лечение перелома челюсти',
      category: 'Специальные стоматологические процедуры',
      description: 'Хирургическое лечение переломов челюсти.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-pereloma-chelyusti'
    },
    {
      id: 'dental-spa',
      title: 'Стоматологический спа',
      category: 'Специальные стоматологические процедуры',
      description: 'Расслабляющие услуги стоматологического спа.',
      image: '/api/placeholder/300/200',
      slug: 'stomatologicheskiy-spa'
    },
    {
      id: '10x10-examination',
      title: 'Обследование 10 X 10',
      category: 'Специальные стоматологические процедуры',
      description: 'Комплексное стоматологическое обследование 10x10.',
      image: '/api/placeholder/300/200',
      slug: 'obsledovanie-10x10'
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
        title="Наши Процедуры - Hospitadent"
        description="Все стоматологические процедуры и услуги, предлагаемые Hospitadent. Эстетическая стоматология, имплантаты, ортодонтия и многое другое."
        keywords="стоматологические процедуры, эстетическая стоматология, имплантаты, ортодонтия, детская стоматология, пародонтология, hospitadent"
        url="https://hospitadent.com/ru/наши-процедуры"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Наши Процедуры
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
                      placeholder="Поиск"
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
                      href={`/protsedura/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      Посмотреть Детали
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
                  Результаты Не Найдены
                </h3>
                <p className="text-gray-600 mb-6">
                  Результаты для "{searchTerm}" не найдены. Вы можете попробовать разные ключевые слова.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Показать Все Процедуры
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Давайте Определим Лучшую Процедуру для Вас
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Запишитесь на бесплатную консультацию с нашими стоматологами-экспертами
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
                    Связаться с Нами
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