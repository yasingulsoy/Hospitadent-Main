import ImgOne from '../assets/icon-1.svg'
import ImgTwo from '../assets/icon-2.svg'
import ImgThree from '../assets/icon-3.svg'
import ImgFour from '../assets/icon-4.svg'
import ImgFive from '../assets/icon-5.svg'
import ImgSix from '../assets/icon-6.svg'
// ProcessData
import process1 from '../assets/process-1.png'
import process2 from '../assets/process-2.png'
import process3 from '../assets/process-2.png'
// ClientsData
import Client1 from '../assets/pic-1.png'
import Client2 from '../assets/pic-2.png'
import Client3 from '../assets/pic-3.png'
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
    name: 'Kurumsal',
    path: '',
    submenu: [
      { name: 'Hakkımızda', path: 'about' },
      { name: 'İdari Kadro', path: 'idari-kadro' },
      { name: 'Hasta Memnuniyet Videoları', path: 'hasta-memnuniyet-videolari' },
      { name: 'Hasta Yorumları', path: 'hasta-yorumlari' },
      { name: 'Anlaşmalı Kurumlar', path: 'anlasmali-kurumlar' },
      { name: 'İK İş Başvuru Formu', path: 'https://hospitadent.ulakbel.com/WebBasvuru/isbasvuru#/', external: true },
      { name: 'Franchise – Ortaklık Başvurusu', path: 'https://hospitadent.ulakbel.com/WebBasvuru/franchise-ortaklik-basvurusu', external: true },
      { name: 'İstenmeyen Olay Bildirim Formu', path: 'https://panel.kolaytik.com/team/hospitadent/istenmeyen-olay-bildirim-formu-', external: true },
      { name: 'Hospitadent Akademi', path: 'akademi' },
      { name: 'Hospitadent Sosyal Sorumluluk', path: 'hospitadent-sosyal-sorumluluk' },
      { name: 'Ödüllerimiz', path: 'odullerimiz' },
      { name: 'Kurumsal Kimlik', path: 'kurumsal-kimlik' },
    ]
  },
  {
    name: 'Şubelerimiz',
    path: 'subelerimiz',
    submenu: [
      {
        name: 'İstanbul',
        path: '',
        submenu: [
          { name: 'Mecidiyeköy', path: 'subelerimiz/mecidiyekoy' },
          { name: 'Bağcılar', path: 'subelerimiz/bagcilar' },
          { name: 'Bakırköy', path: 'subelerimiz/bakirkoy' },
          { name: 'Fatih', path: 'subelerimiz/fatih' },
          { name: 'Çamlıca', path: 'subelerimiz/camlica' },
          { name: 'Pendik', path: 'subelerimiz/pendik' },
          { name: 'Şerifali', path: 'subelerimiz/serifali' },
          { name: 'Cevizlibağ', path: 'subelerimiz/cevizlibag' },
          { name: 'Göktürk', path: 'subelerimiz/gokturk' },
        ]
      },
      { name: 'Kayseri', path: 'subelerimiz/kayseri' },
      { name: 'Bodrum', path: 'subelerimiz/bodrum' },
      { name: 'Alanya', path: 'subelerimiz/alanya' },
      { name: 'Antalya', path: 'subelerimiz/antalya' },
      { name: 'Ankara', path: 'subelerimiz/ankara' },
      { name: 'Denizli', path: 'subelerimiz/denizli' },
      { name: 'Kocaeli', path: 'subelerimiz/kocaeli' },
      { name: 'Bursa', path: 'subelerimiz/bursa' },
      { name: 'Almanya', path: 'subelerimiz/almanya' },
      { name: 'Hollanda', path: 'subelerimiz/hollanda' },
    ]
  },
  {
    name: 'Tedavilerimiz',
    path: '',
    submenu: [
      {
        name: 'Kozmetik Diş Hekimliği',
        path: '',
        submenu: [
          { name: 'Hollywood Smile (Gülüş Tasarımı) Nedir?', path: 'hollywood-smile' },
          { name: 'Gülüş Tasarımı (Estetiği) Nedir? Nasıl Yapılır?', path: 'gulus-tasarimi' },
          { name: 'Diş Beyazlatma Nedir? Yöntemleri Nelerdir?', path: 'dis-beyazlatma' },
          { name: 'Pembe Estetik (Diş Eti Estetiği) Nasıl Yapılır?', path: 'pembe-estetik' },
          { name: 'Lamine Diş Kaplama Nedir? Nasıl Yapılır?', path: 'lamine-kaplama' },
          { name: 'Zirkonyum Kaplama Diş Nasıl Yapılır?', path: 'zirkonyum-kaplama' },
          { name: 'Porselen Kaplama Diş Nedir? Nasıl Yapılır?', path: 'porselen-kaplama' },
          { name: 'Lumineers Kaplama Nedir? Nasıl Yapılır?', path: 'lumineers-kaplama' },
          { name: 'Emax Kaplama Nasıl Yapılır? Ömrü Ne Kadar?', path: 'emax-kaplama' },
          { name: 'Estetik Diş Dolgusu Nedir? Nasıl Yapılır?', path: 'estetik-dolgu' },
          { name: 'Bişektomi (Yanak Estetiği) Nedir?', path: 'bisektomi' },
          { name: 'Lazerli Diş Tedavisi', path: 'lazerli-tedavi' },
          { name: 'Inley Dolgu Nedir? Nasıl Uygulanır?', path: 'inley-dolgu' },
          { name: 'Onley Dolgu Nedir? Nasıl Uygulanır?', path: 'onley-dolgu' },
          { name: 'Diş Pırlantası (Diş Kristali) Nedir?', path: 'dis-pirlantasi' },
          { name: 'Diş Dövmesi Nedir? Nasıl Uygulanır?', path: 'dis-dovmesi' },
          { name: 'Diş Mücevheri / Grillz Nedir? Nasıl Yapılır?', path: 'dis-mucevheri' },
          { name: 'Bonding Tedavisi Nedir? Nasıl Uygulanır?', path: 'bonding' },
        ]
      },
      { name: 'Eksik Diş', path: 'eksik-dis' },
      { name: 'İmplant', path: 'implant' },
      { name: 'Genel Diş Tedavileri', path: 'genel-tedaviler' },
      { name: 'Ortodonti', path: 'ortodonti' },
      { name: 'Pedodonti / Çocuk Diş Hekimliği', path: 'pedodonti' },
      { name: 'Periodontoloji', path: 'periodontoloji' },
      { name: 'Özel Diş Tedavileri', path: 'ozel-tedaviler' },
    ]
  },
  { name: 'Hekimlerimiz', path: 'doctors' },
  { name: 'Blog', path: 'blog' },
  { name: 'İletişim', path: 'contact' },
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

// ClientsData
export const clientsData = [
  {
    img: Client1,
    name: 'william',
    desc: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos, Iure? Nemo Est Aspernatur Voluptatum Id, Laboriosam Asperiores Iure Omnis Alias?',
    title: 'satisfied client'
  },
  {
    img: Client2,
    name: 'jennifer',
    desc: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos, Iure? Nemo Est Aspernatur Voluptatum Id, Laboriosam Asperiores Iure Omnis Alias?',
    title: 'satisfied client'
  },
  {
    img: Client3,
    name: 'john deo',
    desc: 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos, Iure? Nemo Est Aspernatur Voluptatum Id, Laboriosam Asperiores Iure Omnis Alias?',
    title: 'satisfied client'
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