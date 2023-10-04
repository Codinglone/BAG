import { useState } from "react";
import { useForm } from "react-hook-form";

const Feedback = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (data) => {
    console.log(data.fullName)
};

  const onErrors = (errors) => console.error(errors);

  const registerOptions = {
    fullName: { required: "Fullname is required" },
    email: { required: "Email is required" },
    message: { required: "Message is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  return (
    <section className="flex flex-col w-full  items-center" id="feedback" data-aos="fade-up">
      <h3 className="pt-4 text-center text-2xl lg:my-8">
        <b className="text-[#1A66FF]">YOUR</b>{" "}
        <b className="text-[#FF9F1A]">FEEDBACK</b>
      </h3>
      <form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="lg:w-[60%] w-full mx-4 flex flex-col items-center shadow-xl border-blue-500 border-t-2 rounded-md lg:py-8 lg:mb-12"
      >
        <div className="flex lg:px-[50px] lg:flex-row flex-col items-center lg:justify-between w-full ">
          <div className="flex flex-col lg:flex-row my-4">
            <input
              type="text"
              className="border-2 border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
              placeholder="Fullname"
              {...register("fullName", registerOptions.fullName)}
            />
            <small className="text-red-500">
          {errors?.fullName && errors.fullName.message}
        </small>
          </div>

          <div className="flex flex-col lg:flex-row my-4">
            <input
              type="text"
              className="border-2  border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
              placeholder="Email address"
              {...register("email", registerOptions.email)}
            />
            <small className="text-red-500">
          {errors?.email && errors.email.message}
        </small>
          </div>
        </div>
        <div className="flex flex-col w-full px-[50px] my-8">
          <textarea
            placeholder="Your message"
            className="border-2 h-64 max-h-64  border-blue-500 rounded-md py-2 px-8 outline-none text-gray-700"
            {...register("message", registerOptions.message)}
          ></textarea>
          <small className="text-red-500">
          {errors?.message && errors.message.message}
        </small>
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
