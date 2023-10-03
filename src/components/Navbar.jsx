import { useState } from "react";
import logo from "../assets/bag.jpeg";
import { BiMenu } from "react-icons/bi";
import Aos from "aos";
Aos.init();

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <nav>
      <div className="lg:flex hidden w-full lg:px-16 lg:items-center lg:justify-between lg:py-10">
        <div id="brand">
          <img
            src={logo}
            className="lg:h-8 lg:w-24 object-cover"
            alt="BAG-logo"
          />
        </div>
            <div className="flex justify-between w-1/2">
            <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
              HOW IT WORKS
            </span>
            <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
              PRICING
            </span>
            <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
              FAQS
            </span>
            <span className="font-[550] text-[#1A66FF] hover:text-[#1B4E93] cursor-pointer">
              ABOUT US
            </span>
          </div>


        <div>
          <button className="bg-[#1B4E93] lg:border-2 border-[#1B4E93] px-4 py-2 rounded-full text-white font-bold hover:bg-[#e7f3ff] hover:border-2 hover:border-[#1A66FF] hover:text-[#1A66FF]">
            GET STARTED
          </button>
        </div>
      </div>

      <div className="flex flex-col my-10 mx-6  lg:hidden shadow-xl">
        <div className="flex w-full items-center justify-between">
        <img src={logo} className="rounded-md h-8 w-24 object-cover" alt="BAG-logo" />
        <BiMenu onClick={() => setShowNav(!showNav)} className="text-2xl text-gray-700" />
        </div>
        {showNav && (
            <div className="flex flex-col items-center justify-between h-28 py-2" data-aos="fade-down">
            <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
                HOW IT WORKS
              </span>
              <span className="font-[550] text-[#1A66FF] hover:text-[#1B4E93] cursor-pointer">
                ABOUT US
              </span>
              <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
                PRICING
              </span>
              <span className="font-[550] text-gray-900 hover:text-[#1B4E93] cursor-pointer">
                FAQS
              </span>
              
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
