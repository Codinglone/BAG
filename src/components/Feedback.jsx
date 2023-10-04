import React from "react";

const Feedback = () => {
  return (
    <section className="flex flex-col w-full  items-center">
      <h3 className="pt-4 text-center text-2xl lg:my-8">
        <b className="text-[#1A66FF]">YOUR</b>{" "}
        <b className="text-[#FF9F1A]">FEEDBACK</b>
      </h3>
      <form className="lg:w-[60%] w-full mx-4 flex flex-col items-center shadow-xl border-blue-500 border-t-2 rounded-md lg:py-8 lg:mb-12">
        <div className="flex lg:px-[50px] lg:flex-row flex-col items-center lg:justify-between w-full ">
          <div className="flex my-4">
            <input
              type="text"
              className="border-2 border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
              placeholder="Fullname"
            />
          </div>

          <div className="flex">
            <input
              type="text"
              className="border-2  border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-[50px] my-8">
          <textarea
            placeholder="Your message"
            className="border-2 h-64 max-h-64  border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
          ></textarea>
        </div>

        <div className="lg:py-12 pb-8 flex justify-center px-24">
          <button className="rounded-md border-2 border-[#1A66FF] lg:px-12 px-4 text-[#1A66FF] py-2 hover:bg-[#1A66FF] font-bold shadow-lg hover:text-white">
            SEND FEEDBACK
          </button>
        </div>
      </form>
    </section>
  );
};

export default Feedback;
