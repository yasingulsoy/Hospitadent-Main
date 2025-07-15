import React from "react";

const ServiceItems = ({item:{img,title,desc}}) => {
  return (
    <div className="text-center bg-blue-50 p-4 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200 hover:border-blue-400 hover:-translate-y-1 h-full w-full flex flex-col justify-between items-center">
      <img src={img} className="mx-auto h-10 md:h-14 mb-2 md:mb-4" alt={title} style={{filter: 'invert(19%) sepia(97%) saturate(1812%) hue-rotate(170deg) brightness(97%) contrast(101%)'}} />
      <h3 className="text-sm md:text-xl font-semibold leading-6 md:leading-10 text-[#0f4f78] py-1 md:py-2 uppercase">
        <span className="text-[#0f4f78] font-bold font-[Montserrat] capitalize">{title}</span>
      </h3>
      <p className="leading-5 md:leading-7 text-[#0f4f78] text-xs md:text-base min-h-[40px] md:min-h-[56px]">{desc}</p>
    </div>
  );
};

export default ServiceItems;
