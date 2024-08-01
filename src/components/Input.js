import React from "react";

const Input = () => {
  return (
    <div className="font-abc pb-20">
      <div className="bg-blue bg-gray-900 rounded-md ml-5 mr-10 md:ml-40  md:mr-40 p-10 flex-nowrap">
        <input type="text" name="text" placeholder="Shorten a link here ..." className="md:ml-8 py-3 w-full md:w-3/4 rounded-md "/>
        <button className="btn mt-3 text-white w-full md:w-40 md:ml-3 md:px-6 rounded-md bg-blue-300">
          Shorten It!
        </button>
      </div>
    </div>
  );
};

export default Input;
