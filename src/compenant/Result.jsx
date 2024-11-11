import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineSmsFailed } from "react-icons/md";
function Result({ valid }) {
  const Success = () => {
    return (
      <div className="bg-green-100 h-screen w-full grid place-items-center">
        <div className="border-4 bg-green-600 py-10 px-14 rounded-full border-green-600">
          <IoMdDoneAll className="text-8xl text-gray-100 " />
          <h5 className="text-center text-3xl text-gray-100 font-bold">
            Yeah!
          </h5>
        </div>
      </div>
    );
  };
  const Failed = () => {
    return (
      <div className="bg-red-50 h-screen w-full grid place-items-center">
        <div className="border-4 bg-red-600 py-10 px-14 rounded-lg border-red-600">
          <MdOutlineSmsFailed className="text-8xl text-gray-100 " />
          <h5 className="text-center text-3xl text-gray-100 font-bold">
            Failed!
          </h5>
        </div>
      </div>
    );
  };
  return <div className="h-screen w-full">{valid ? <Success /> : <Failed />}</div>;
}

export default Result;
