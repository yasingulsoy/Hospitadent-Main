import ImgOne from '../assets/icons/icon-1.svg'
import ImgTwo from '../assets/icons/icon-2.svg'
import ImgThree from '../assets/icons/icon-3.svg'
import ImgFour from '../assets/icons/icon-4.svg'
import ImgFive from '../assets/icons/icon-5.svg'
import ImgSix from '../assets/icons/icon-6.svg'
// ProcessData
import process1 from '../assets/images/process-1.png'
import process2 from '../assets/images/process-2.png'
import process3 from '../assets/images/process-3.png'
// Footer Icons
import {
  faPhone,
  faLocation,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// NavLink Data
export const navLinksData = [
  {
    name: 'navbar.corporate',
    path: '',
    submenu: [
      { name: 'navbar.about', path: 'hakkimizda' },
      { name: 'navbar.administrativeStaff', path: 'idari-kadro' },
      { name: 'navbar.patientSatisfactionVideos', path: 'hasta-memnuniyet-videolari' },
      { name: 'navbar.patientReviews', path: 'hasta-yorumlari' },
      { name: 'navbar.contractedInstitutions', path: 'anlasmali-kurumlar' },
      { name: 'navbar.hrJobApplicationForm', path: 'https://hospitadent.ulakbel.com/WebBasvuru/isbasvuru#/', external: true },
      { name: 'navbar.franchisePartnershipApplication', path: 'https://hospitadent.ulakbel.com/WebBasvuru/franchise-ortaklik-basvurusu', external: true },
      { name: 'navbar.adverseEventNotificationForm', path: 'https://panel.kolaytik.com/team/hospitadent/istenmeyen-olay-bildirim-formu-', external: true },
      { name: 'navbar.hospitadentAcademy', path: 'akademi' },
      { name: 'navbar.hospitadentSocialResponsibility', path: 'hospitadent-sosyal-sorumluluk' },
      { name: 'navbar.ourAwards', path: 'odullerimiz' },
      { name: 'navbar.corporateIdentity', path: 'kurumsal-kimlik' },
    ]
  },
  {
    name: 'navbar.ourBranches',
    path: 'subelerimiz',
    submenu: [
      {
        name: 'navbar.istanbul',
        path: '',
        submenu: [
          { name: 'navbar.mecidiyekoy', path: 'subelerimiz/mecidiyekoy' },
          { name: 'navbar.bagcilar', path: 'subelerimiz/bagcilar' },
          { name: 'navbar.bakirkoy', path: 'subelerimiz/bakirkoy' },
          { name: 'navbar.fatih', path: 'subelerimiz/fatih' },
          { name: 'navbar.camlica', path: 'subelerimiz/camlica' },
          { name: 'navbar.pendik', path: 'subelerimiz/pendik' },
          { name: 'navbar.serifali', path: 'subelerimiz/serifali' },
          { name: 'navbar.cevizlibag', path: 'subelerimiz/cevizlibag' },
          { name: 'navbar.gokturk', path: 'subelerimiz/gokturk' },
        ]
      },
      { name: 'navbar.kayseri', path: 'subelerimiz/kayseri' },
      { name: 'navbar.bodrum', path: 'subelerimiz/bodrum' },
      { name: 'navbar.alanya', path: 'subelerimiz/alanya' },
      { name: 'navbar.antalya', path: 'subelerimiz/antalya' },
      { name: 'navbar.ankara', path: 'subelerimiz/ankara' },
      { name: 'navbar.denizli', path: 'subelerimiz/denizli' },
      { name: 'navbar.kocaeli', path: 'subelerimiz/kocaeli' },
      { name: 'navbar.bursa', path: 'subelerimiz/bursa' },
      { name: 'navbar.germany', path: 'subelerimiz/almanya' },
      { name: 'navbar.netherlands', path: 'subelerimiz/hollanda' },
    ]
  },
  {
    name: 'navbar.ourTreatments',
    path: 'tedavilerimiz',
    submenu: [
      {
        name: 'navbar.cosmeticDentistry',
        path: '',
        submenu: [
          { name: 'navbar.hollywoodSmile', path: 'hollywood-smile' },
          { name: 'navbar.smileDesign', path: 'gulus-tasarimi' },
          { name: 'navbar.teethWhitening', path: 'dis-beyazlatma' },
          { name: 'navbar.pinkAesthetics', path: 'pembe-estetik' },
          { name: 'navbar.laminateVeneer', path: 'lamine-kaplama' },
          { name: 'navbar.zirconiumCrown', path: 'zirkonyum-kaplama' },
          { name: 'navbar.porcelainCrown', path: 'porselen-kaplama' },
          { name: 'navbar.lumineersVeneer', path: 'lumineers-kaplama' },
          { name: 'navbar.emaxCrown', path: 'emax-kaplama' },
          { name: 'navbar.aestheticFilling', path: 'estetik-dolgu' },
          { name: 'navbar.bisectomy', path: 'bisektomi' },
          { name: 'navbar.laserDentalTreatment', path: 'lazerli-tedavi' },
          { name: 'navbar.inlayFilling', path: 'inley-dolgu' },
          { name: 'navbar.onlayFilling', path: 'onley-dolgu' },
          { name: 'navbar.dentalDiamond', path: 'dis-pirlantasi' },
          { name: 'navbar.dentalTattoo', path: 'dis-dovmesi' },
          { name: 'navbar.dentalJewelry', path: 'dis-mucevheri' },
          { name: 'navbar.bondingTreatment', path: 'bonding' },
        ]
      },
      {
        name: 'navbar.missingTeeth',
        path: '',
        submenu: [
          { name: 'navbar.dentalBridge', path: 'kopru-dis' },
          { name: 'navbar.denture', path: 'takma-dis' },
          { name: 'navbar.fixedProsthesis', path: 'sabit-protez' },
          { name: 'navbar.snapOnDenture', path: 'citcitli-protez' },
          { name: 'navbar.fullMouthTreatment', path: 'full-agiz-tedavisi' },
        ]
      },
      {
        name: 'navbar.implant',
        path: '',
        submenu: [
          { name: 'navbar.singleToothImplant', path: 'tek-dis-implant' },
          { name: 'navbar.fullMouthImplant', path: 'full-agiz-implant' },
          { name: 'navbar.multipleToothImplant', path: 'coklu-dis-implant' },
          { name: 'navbar.oneDayImplant', path: '1-gunde-implant' },
          { name: 'navbar.allOnFour', path: 'all-on-four' },
          { name: 'navbar.allOnSix', path: 'all-on-six' },
          { name: 'navbar.boxTechnique', path: 'box-teknik' },
        ]
      },
      {
        name: 'navbar.generalDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.dentalExamination', path: 'dis-muayenesi' },
          { name: 'navbar.crownVeneer', path: 'kuron-kaplama' },
          { name: 'navbar.dentalFilling', path: 'dis-dolgusu' },
          { name: 'navbar.rootCanalTreatment', path: 'kanal-tedavisi' },
          { name: 'navbar.toothExtraction', path: 'dis-cekimi' },
          { name: 'navbar.impactedToothExtraction', path: 'gomulu-dis-cekimi' },
          { name: 'navbar.wisdomToothExtraction', path: '20lik-dis-cekimi' },
          { name: 'navbar.brokenToothTreatment', path: 'kirik-dis-tedavisi' },
        ]
      },
      {
        name: 'navbar.preventiveDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.badBreath', path: 'agiz-kokusu' },
          { name: 'navbar.toothSensitivity', path: 'dis-hassasiyeti' },
          { name: 'navbar.teethGrinding', path: 'dis-sikma' },
          { name: 'navbar.teethGrindingTreatment', path: 'dis-gicirdatma-tedavisi' },
          { name: 'navbar.snoringTreatment', path: 'horlama-tedavisi' },
        ]
      },
      {
        name: 'navbar.orthodontics',
        path: '',
        submenu: [
          { name: 'navbar.bracesTreatment', path: 'dis-teli-tedavisi' },
          { name: 'navbar.clearBracketTreatment', path: 'seffaf-braketli-tedavi' },
          { name: 'navbar.invisalignTreatment', path: 'invisalign-tedavisi' },
          { name: 'navbar.invisibleBracesTreatment', path: 'gorunmez-tel-tedavisi' },
        ]
      },
      {
        name: 'navbar.pedodontics',
        path: '',
        submenu: [
          { name: 'navbar.fluorideApplication', path: 'fluorid-uygulamasi' },
          { name: 'navbar.fissureSealant', path: 'fissur-ortucu' },
          { name: 'navbar.pediatricOrthodonticTreatment', path: 'cocuk-ortodonti-tedavisi' },
          { name: 'navbar.babyBottleToothDecay', path: 'biberon-curugu' },
          { name: 'navbar.spaceMaintainerTreatment', path: 'yer-tutucu-tedavisi' },
        ]
      },
      {
        name: 'navbar.periodontology',
        path: '',
        submenu: [
          { name: 'navbar.gumTreatment', path: 'dis-eti-tedavisi' },
          { name: 'navbar.curettageTreatment', path: 'kuretaj-tedavisi' },
          { name: 'navbar.flapTreatment', path: 'flap-tedavisi' },
          { name: 'navbar.gingivitis', path: 'dis-eti-iltihabi' },
          { name: 'navbar.dentalCalculusCleaning', path: 'dis-tasi-temizligi' },
        ]
      },
      {
        name: 'navbar.specialDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.digitalDentistry', path: 'dijital-dis-hekimligi' },
          { name: 'navbar.needleFreeAnesthesia', path: 'ignesiz-anestezi' },
          { name: 'navbar.sedationAndGeneralAnesthesia', path: 'sedasyon-ve-genel-anestezi' },
          { name: 'navbar.rubberDamApplication', path: 'rubber-dam-uygulamasi' },
          { name: 'navbar.jawTumor', path: 'cene-tumoru' },
          { name: 'navbar.jawFractureTreatment', path: 'cene-kirigi-tedavisi' },
          { name: 'navbar.dentalSpa', path: 'dental-spa' },
          { name: 'navbar.tenByTenExamination', path: '10x10-muayene' },
        ]
      },
    ]
  },
  { name: 'navbar.ourDoctors', path: 'doctors' },
  { name: 'navbar.blog', path: 'blog' },
  { name: 'navbar.contact', path: 'contact' },
];

// ServicesData
export const servicesData = [
  { img: ImgOne, title: 'Gülüş Tasarımı', desc: 'Dijital planlama ile kişiye özel estetik gülüşler.' },
  { img: ImgTwo, title: 'Diş Beyazlatma', desc: 'Modern yöntemlerle hızlı ve güvenli diş beyazlatma uygulamaları.' },
  { img: ImgOne, title: 'Zirkonyum Kaplama', desc: 'Doğal görünümlü, dayanıklı ve estetik diş kaplama çözümleri.' },
  { img: ImgFour, title: 'İmplant Tedavisi', desc: 'Eksik dişler için ömür boyu konfor ve estetik sağlayan implant uygulamaları.' },
  { img: ImgFive, title: 'Ortodonti (Diş Teli)', desc: 'Çocuk ve yetişkinler için şeffaf plak ve klasik diş teli tedavileri.' },
  { img: ImgSix, title: 'Çocuk Diş Hekimliği', desc: 'Çocuklara özel koruyucu ve tedavi edici diş hekimliği hizmetleri.' },
  { img: ImgFour, title: 'Kanal Tedavisi', desc: 'Ağrısız ve hızlı kanal tedavisi ile dişlerinizi kurtarın.' },
  { img: ImgThree, title: 'Diş Eti Tedavisi', desc: 'Diş eti hastalıklarının teşhis ve tedavisinde uzman yaklaşım.' },
  { img: ImgOne, title: 'Protez Diş Tedavileri', desc: 'Sabit ve hareketli protezlerle eksik dişlerin fonksiyon ve estetiğini geri kazandırıyoruz.' },
  { img: ImgFour, title: 'Diş Çekimi', desc: 'Cerrahi ve klasik yöntemlerle ağrısız diş çekimi.' },
  { img: ImgThree, title: 'Diş Taşı Temizliği', desc: 'Diş taşı ve plak temizliği ile sağlıklı diş etleri.' },
  { img: ImgOne, title: 'Lamine Kaplama', desc: 'Estetik ve ince yaprak porselen kaplamalar.' },
  { img: ImgOne, title: 'Porselen Kaplama', desc: 'Dayanıklı ve doğal görünümlü porselen diş kaplamaları.' },
  { img: ImgOne, title: 'Emax Kaplama', desc: 'Yüksek estetik ve dayanıklılığa sahip Emax diş kaplamaları.' },
  { img: ImgThree, title: 'Bonding Uygulaması', desc: 'Dişlerdeki küçük kusurlar için estetik bonding uygulamaları.' },
  { img: ImgThree, title: 'Diş Dolgusu', desc: 'Estetik ve dayanıklı diş dolgusu çözümleri.' },
  { img: ImgSix, title: 'Pedodonti', desc: 'Çocuklara özel diş sağlığı ve tedavi hizmetleri.' },
  { img: ImgThree, title: 'Periodontoloji', desc: 'Diş eti hastalıklarının teşhis ve tedavisi.' },
  { img: ImgFour, title: 'Endodonti', desc: 'Kök kanal tedavisi ve dişin iç yapısının korunması.' },
  { img: ImgFour, title: 'Cerrahi Diş Tedavileri', desc: 'Gömülü diş çekimi ve cerrahi işlemler.' },
  { img: ImgFive, title: 'Diş Sıkma Tedavisi', desc: 'Bruksizm (diş sıkma) için gece plağı ve tedavi.' },
  { img: ImgTwo, title: 'Diş Röntgeni', desc: 'Dijital röntgen ile hızlı ve güvenli teşhis.' },
  { img: ImgFive, title: 'Ağız Kokusu Tedavisi', desc: 'Ağız kokusunun nedenlerinin tespiti ve tedavisi.' },
  { img: ImgOne, title: 'Diş Protezi Onarımı', desc: 'Kırık veya hasarlı diş protezlerinin hızlı onarımı.' }
]

// ProcessData
export const processData = [
  {
    img: process1,
    title: 'Cosmetic Dentistry',
    desc: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Non?'

  },
  {
    img: process2,
    title: 'Pediatric Dentistry',
    desc: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Non?'

  },
  {
    img: process3,
    title: 'Dental Implants',
    desc: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat, Non?'

  },
]

// footerData
export const footerData = [
  {
    icon: faPhone,
    title: 'Phone Number',
    Firstsubtitle: '+123-456-7890',
    Secondsubtitle: '+111-222-3333'
  },
  {
    icon: faLocation,
    title: 'Our Address',
    Firstsubtitle: 'Shiraz, Iran - 1234',

  },
  {
    icon: faClock,
    title: 'Opening Hours',
    Firstsubtitle: '10:00am to 10:00pm',
  },
  {
    icon: faEnvelope,
    title: 'Email Address',
    Firstsubtitle: 'e.saadat72@gmail.com',
    Secondsubtitle: 'e.saadat7293@gmail.com'
  },
]