import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full py-6 text-white text-center grid grid-cols-2 gap-2 place-content-evenly">
      <div className="w-full flex items-center justify-left">
        <div className="pl-12 py-2 md:py-4 ">
          <button
            type="submit"
            className="py-10 px-9 text-sm font-semibold tracking-wide rounded-md text-[#002D74] bg-blue-50 focus:outline-none"
          ></button>
        </div>
        <p className="pl-7 py-2 ">GET Your Tickets Now!</p>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className=" float-right py-4 px-9 text-sm font-semibold tracking-wide rounded-full text-[#002D74] bg-blue-50 focus:outline-none"
        >
          See More
        </button>
      </div>
    </footer>
  );
};

export default Footer;
