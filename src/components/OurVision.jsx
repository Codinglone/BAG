import React from "react";

const OurVision = () => {
  return (
    <section
      className="mt-56 mb-8 lg:mt-0 lg:py-0"
      data-aos="fade-up"
      data-aos-duration="1500"
      id="vision"
    >
      <h3 className="pt-8 text-center text-2xl lg:text-4xl lg:my-8">
        <b className="text-[#1A66FF]">OUR</b>{" "}
        <b className="text-[#FF9F1A]">VISION</b>
      </h3>
      <div
        className="bg-[#000629] lg:px-48 px-8 py-8 mt-8 lg:pt-24"
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <p
          className="text-justify text-[18px] text-white"
          style={{ fontWeight: 556, lineHeight: 1.6 }}
        >
          At BAG, we envision a world where every young talent, regardless of
          background or resources, has a clear pathway to professional success.
          We believe that by simulating real-world job scenarios, we are giving
          students and recent graduates a unique platform to hone crucial skills
          that are often overlooked in conventional academic settings.
          <br />
          <br />
          Our mission extends beyond skill-building. We are also committed to
          forging strong industry partnerships, ensuring that the training we
          offer aligns with the evolving demands of the global job market. With
          each simulation, we hope to create a dynamic and inclusive space where
          individuals can experiment, learn, and grow without fear of failure,
          and where their achievements are celebrated and translated into
          tangible career opportunities.
          <br />
          <br />
          By bridging the skills gap, BAG aims to catalyze socio-economic growth
          in Rwanda, empowering the next generation of professionals to drive
          innovation, foster community development, and make impactful
          contributions to the global workforce. Our multifaceted approach
          encompasses not only skill development but also a commitment to
          inclusivity, innovation, and the advancement of individuals as they
          embark on their journeys toward professional success.
        </p>
        <div className="flex py-8 justify-center">
          <button className="rounded-md border-2 border-white px-12 text-white py-2 hover:border-[#000629] hover:bg-blue-700 font-bold">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
