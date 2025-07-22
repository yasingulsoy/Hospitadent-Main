import React from "react";

const gridData = [
  { title: "Anlaşmalı Kurumlar", link: "/partners" },
  { title: "Ödüller", link: "/awards" },
  { title: "Sosyal Sorumluluk", link: "/social-responsibility" },
  { title: "Kids Planet", link: "/kids-planet" },
];

const InfoGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {gridData.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="flex items-center justify-center min-h-[180px] md:min-h-[220px] lg:min-h-[260px] bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-[#0f4f78] text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-300 hover:bg-gradient-to-tl hover:from-[#2bb3ea]/30 hover:to-[#0f4f78]/10 border-r border-b border-blue-100 last:border-r-0 last:lg:border-b-0 first:rounded-l-3xl last:rounded-r-3xl cursor-pointer select-none text-center shadow-none hover:shadow-xl"
              style={{ aspectRatio: '4/3' }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
