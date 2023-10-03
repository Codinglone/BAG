import React from "react";
import logo from "../assets/bag.jpeg";

const Navbar = () => {
  return (
    <nav className="flex w-full lg:px-16 lg:items-center lg:justify-between lg:py-10">
      <div>
        <img
          src={logo}
          className="lg:h-8 lg:w-24 object-cover"
          alt="BAG-logo"
        />
      </div>
      <div className="flex justify-between w-1/2">
        <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">HOW IT WORKS</span>
        <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">PRICING</span>
        <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">FAQS</span>
        <span className="font-[550] text-[#1A66FF] hover:text-[#1B4E93] cursor-pointer">ABOUT US</span>
      </div>

      <div>
        <button className="bg-[#1B4E93] lg:border-2 border-[#1B4E93] px-4 py-2 rounded-full text-white font-bold hover:bg-[#e7f3ff] hover:border-2 hover:border-[#1A66FF] hover:text-[#1A66FF]">
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
