import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { instagramPosts, formatInstagramPost } from '../../data/instagramPosts';

const InstagramFeed = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const loadInstagramPosts = () => {
      try {
        setLoading(true);
        const formattedPosts = instagramPosts.map(formatInstagramPost);
        setPosts(formattedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadInstagramPosts();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2bb3ea] mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('instagram.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">{t('instagram.error')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-2">
        {/* Başlık */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-center text-[#0f4f78]">
            {t('instagram.title')}
          </h2>
        </div>

        {/* Yatay Kaydırılabilir Instagram Gönderileri - Tam Genişlik */}
        <div className="relative w-full">
          {/* Sol Kaydırma Butonu */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Sağ Kaydırma Butonu */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Kaydırılabilir Container - Minimal Padding */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} />
            ))}
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

// Instagram Gönderi Kartı - Sadece Resim
const InstagramPostCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(post.permalink, '_blank')}
    >
      {/* Resim */}
      <img
        src={post.mediaUrl}
        alt={post.caption}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center`}>
        <div className={`transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <FaInstagram className="text-white text-3xl" />
        </div>
      </div>

      {/* Video İkonu */}
      {post.mediaType === 'VIDEO' && (
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 001.447.894l2-2a1 1 0 000-1.788l-2-2z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed; 