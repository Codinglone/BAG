import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center my-12">
        <h1 className="lg:text-4xl text-lg text-green-500 font-semibold">
          Your feedback was received successfully!
        </h1>
        <button onClick={() => navigate("/#feedback")} className="px-4 py-2 border-2 border-green-500 lg:my-48 my-24 text-green-500 font-bold hover:rounded-lg">
          Any other feedback ?
        </button>
      </div>
    </>
  );
};

export default Success;
