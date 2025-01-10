import React from "react";
function Recents({ title, recents = [] }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 mb-6 ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-3 rounded-lg gap-3  lg:h-40">
        {recents.map((recent, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer flex flex-col items-center"
          >
            <i
              className={`${recent.icon} text-4xl mb-2`}
              aria-hidden="true"
            ></i>
            <h3 className="text-sm font-medium mb-1">{recent.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recents;
