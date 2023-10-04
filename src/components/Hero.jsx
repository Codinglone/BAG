import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="flex flex-col lg:h-[80.4vh]  bg-[#1B4E93] px-16 pt-12"
      style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      data-aos="fade-up"
      id="hero"
    >
      <span className="text-white font-semibold text-center md:text-left lg:text-2xl">
        WHAT WE DO
      </span>
      <div className="lg:pt-4">
        <p
          className="lg:text-[64px] font-bold w-[70%] text-gray-300 hidden lg:block"
          style={{ fontFamily: "Lato", lineHeight: "74px" }}
        >
          Empowering talents to gain work{" "}
          <b className="text-[#FF9F1A]">experience</b> and secure{" "}
          <b className="text-[#FF9F1A]">employment</b> with top African
          companies.
        </p>

        <p
          className="lg:text-[64px] text-[42px] font-bold lg:w-[70%] w-full text-gray-300 lg:hidden block"
          style={{ fontFamily: "Lato", lineHeight: 1 }}
        >
          Empowering talents to gain work{" "}
          <b className="text-[#FF9F1A]">experience</b> and secure{" "}
          <b className="text-[#FF9F1A]">employment</b> with top African
          companies.
        </p>
      </div>
      <div className="flex py-8 justify-center lg:justify-start">
        <Link to="#mission" className="rounded-md border-2 border-white px-12 text-white py-2 hover:border-[#000629] hover:bg-[#000629] font-bold">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Hero;
