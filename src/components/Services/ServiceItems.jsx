import React from "react";

const ServiceItems = ({item:{img,title,desc}}) => {
  return (
    <div className="text-center bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-200 hover:border-blue-400 hover:-translate-y-1 h-full w-full flex flex-col justify-between items-center">
      <img src={img} className="mx-auto h-14 mb-4" alt={title} />
      <h3 className="text-xl font-semibold leading-10 text-blue py-2 uppercase">
        <span className="text-primary font-bold font-[Montserrat] capitalize">{title}</span>
      </h3>
      <p className="leading-7 text-gray-600 text-base min-h-[56px]">{desc}</p>
    </div>
  );
};

export default ServiceItems;
