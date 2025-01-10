import React from "react";

function ServicesSection({ title, services }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 mb-2 ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-sm md:text-base">{title}</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 rounded-lg flex-col gap-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer flex lg:pt-20 flex-col items-full"
          >
            {/* <img
               src={`/images/${service.imageUrl}`}
              alt={service.name}
              className="w-full object-contain mb-2 object-cover rounded-lg"
            /> */}
            <div className="text-4xl mb-2 ">
              {service.icon}
              <p className="text-xs md:text-sm font-medium">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
