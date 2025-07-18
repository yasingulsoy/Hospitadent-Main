import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';

const InstagramEmbed = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-2">
        {/* Başlık */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-center text-[#0f4f78]">
            {t('instagram.title')}
          </h2>
        </div>

        {/* Instagram Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Instagram Post 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/C8XxXxXxXxX/embed"
                className="w-full h-96"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              />
            </div>

            {/* Instagram Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/C8YyYyYyYyY/embed"
                className="w-full h-96"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              />
            </div>

            {/* Instagram Post 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/C8ZzZzZzZzZ/embed"
                className="w-full h-96"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              />
            </div>
          </div>
        </div>

        {/* Instagram'a Git Butonu */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/hospitadent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#2bb3ea] hover:to-[#0f4f78] transition-all duration-300 transform hover:scale-105"
          >
            <FaInstagram className="mr-2" />
            {t('instagram.followUs')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbed; 