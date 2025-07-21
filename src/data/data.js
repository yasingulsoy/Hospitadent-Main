import ImgOne from '../assets/icons/icon-1.svg'
import ImgTwo from '../assets/icons/icon-2.svg'
import ImgThree from '../assets/icons/icon-3.svg'
import ImgFour from '../assets/icons/icon-4.svg'
import ImgFive from '../assets/icons/icon-5.svg'
import ImgSix from '../assets/icons/icon-6.svg'
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
      { name: 'navbar.about', path: typeof window !== 'undefined' && window.location.pathname.startsWith('/ar') ? 'men-nahnu' : 'hakkimizda' },
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
  { img: ImgOne, title: 'Gülüş Tasarımı', desc: '' },
  { img: ImgTwo, title: 'Diş Beyazlatma', desc: '' },
  { img: ImgOne, title: 'Zirkonyum Kaplama', desc: '' },
  { img: ImgFour, title: 'İmplant', desc: '' },
  { img: ImgFive, title: 'Ortodonti', desc: '' },
  { img: ImgSix, title: 'Çocuk Diş Hekimliği', desc: '' },
  { img: ImgFour, title: 'Kanal Tedavisi', desc: '' },
  { img: ImgThree, title: 'Diş Eti Tedavisi', desc: '' },
  { img: ImgOne, title: 'Protez Diş', desc: '' },
  { img: ImgFour, title: 'Diş Çekimi', desc: '' },
  { img: ImgThree, title: 'Diş Taşı Temizliği', desc: '' },
  { img: ImgOne, title: 'Lamine Kaplama', desc: '' },
  { img: ImgOne, title: 'Porselen Kaplama', desc: '' },
  { img: ImgOne, title: 'Emax Kaplama', desc: '' },
  { img: ImgThree, title: 'Bonding', desc: '' },
  { img: ImgThree, title: 'Diş Dolgusu', desc: '' },
  { img: ImgSix, title: 'Pedodonti', desc: '' },
  { img: ImgThree, title: 'Periodontoloji', desc: '' },
  { img: ImgFour, title: 'Endodonti', desc: '' },
  { img: ImgFour, title: 'Cerrahi Diş Tedavileri', desc: '' },
  { img: ImgFive, title: 'Diş Sıkma Tedavisi', desc: '' },
  { img: ImgTwo, title: 'Diş Röntgeni', desc: '' },
  { img: ImgFive, title: 'Ağız Kokusu Tedavisi', desc: '' },
  { img: ImgOne, title: 'Diş Protezi Onarımı', desc: '' },
  // Tedaviler menüsündeki diğer başlıklar da eklenebilir
];

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