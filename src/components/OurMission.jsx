import React from "react";
import team from "../assets/team.jpg";
const OurMission = () => {
  return (
    <section
      className="flex lg:justify-between h-[660px] mb-16 lg:pt-12 lg:px-16"
      id="mission"
    >
      <div className="lg:w-[45%]">
        <img
          className="md:flex w-full hidden h-full object-cover"
          src={team}
          alt="team"
          style={
            {
                zIndex: 1,
            }
          }
        />
      </div>
      <div className="md:w-1/2 w-full px-8 lg:mb-16">
        <h3 className="pt-4 text-center text-2xl lg:my-8"><b className="text-[#1A66FF]">OUR</b> <b className="text-[#FF9F1A]">MISSION</b></h3>
        <p className="text-justify text-[18px] text-gray-600" style={{fontWeight: 556, lineHeight: 1.6}} >
          At BAG, we envision a world where every young talent, regardless of
          background or resources, has a clear pathway to professional success.
          We believe that by simulating real-world job scenarios, we are giving
          students and recent graduates a unique platform to hone crucial skills
          that are often overlooked in conventional academic settings. Building
          upon this vision, we are dedicated to erasing societal constraints
          based on socio-economic origins. Our innovative approach empowers
          talents with technical prowess and nurtures creativity, resilience,
          and problem-solving acumen. Through dynamic simulations, we shape
          adaptable professionals ready for modern careers. In our inclusive
          community, students find inspiration and mentorship from seasoned
          professionals, fortifying their journey toward professional success.
        </p>
        <div className="py-12 flex lg:justify-start justify-center">
        <button className="rounded-md border-2 border-[#1A66FF] px-12 text-[#1A66FF] py-2 hover:border-[#1A66FF] hover:bg-[#000629] font-bold">
          Learn more
        </button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
