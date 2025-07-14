import React from "react";
import { FaHandshake, FaAward, FaGlobe, FaChild } from "react-icons/fa";
import kurumlar from "../../assets/about-img.jpg";
import oduller from "../../assets/pic-1.png";
import sosyal from "../../assets/pic-2.png";
import kids from "../../assets/pic-3.png";

const gridData = [
  {
    title: "Anlaşmalı Kurumlar",
    img: kurumlar,
    icon: <FaHandshake className="w-5 h-5 ml-2" />,
    link: "/partners"
  },
  {
    title: "Ödüller",
    img: oduller,
    icon: <FaAward className="w-5 h-5 ml-2" />,
    link: "/awards"
  },
  {
    title: "Sosyal Sorumluluk",
    img: sosyal,
    icon: <FaGlobe className="w-5 h-5 ml-2" />,
    link: "/social-responsibility"
  },
  {
    title: "Kids Planet",
    img: kids,
    icon: <FaChild className="w-5 h-5 ml-2" />,
    link: "/kids-planet"
  }
];

const InfoGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {gridData.map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col items-center justify-between p-0">
              <div className="w-full h-48 bg-blue-100 flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full rounded-t-3xl" />
              </div>
              <a href={item.link} className="mt-6 mb-8 px-6 py-2 bg-[#0f4f78] text-white font-semibold rounded-full flex items-center gap-2 text-base shadow hover:bg-blue-900 transition-all">
                {item.title} {item.icon} <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
