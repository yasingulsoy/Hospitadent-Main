import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components';

const Staff = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    // Sayfanın yüksekliğini zorla hesapla
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78]">
            İdari Kadro
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              Yönetim Kurulu
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              Hospitadent'in başarılı yönetim kadrosu, sektörde uzun yıllara dayanan deneyimleri ve vizyoner yaklaşımlarıyla şirketin büyümesine öncülük ediyor.
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              Genel Müdürlük
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Genel Müdür:</strong> Şirketin genel stratejilerini belirleyen ve tüm operasyonları yöneten deneyimli liderimiz.
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Operasyon Müdürü:</strong> Günlük operasyonları koordine eden ve hizmet kalitesini sürekli iyileştiren uzman yöneticimiz.
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Finans Müdürü:</strong> Finansal sürdürülebilirliği sağlayan ve büyüme stratejilerini destekleyen finans uzmanımız.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              Departman Yöneticileri
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>İnsan Kaynakları Müdürü:</strong> Çalışan memnuniyetini ve gelişimini öncelik edinen HR uzmanımız.
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Pazarlama Müdürü:</strong> Marka değerini artıran ve müşteri deneyimini iyileştiren pazarlama stratejilerini yöneten uzmanımız.
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Teknoloji Müdürü:</strong> Dijital dönüşümü yöneten ve teknolojik altyapıyı sürekli geliştiren IT uzmanımız.
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>Kalite Müdürü:</strong> Hizmet kalitesini sürekli izleyen ve iyileştiren kalite yönetim uzmanımız.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              Şube Yöneticileri
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              Her şubemizde deneyimli yöneticilerimiz, yerel ihtiyaçları anlayarak en iyi hizmeti sunmak için çalışıyor. 22 şubemizin her birinde uzman yönetici kadromuz bulunuyor.
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              Danışma Kurulu
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              Sektörde uzmanlaşmış danışmanlarımız, şirketin stratejik kararlarında rehberlik ediyor ve sürekli gelişim için değerli öneriler sunuyor.
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              Hospitadent'in idari kadrosu, güçlü liderlik, deneyim ve vizyon ile şirketin başarısını sürdürüyor ve gelecekteki büyüme hedeflerine ulaşmak için çalışıyor.
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Staff; 