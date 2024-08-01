import React from "react";

const Hero = () => {
  return (
    <div className="font-abc text-gray-700 mt-28 md:flex flex-row-reverse  pb-32 ">
      <div>
        <img
          src="/images/undraw_Programming_re_kg9v (1).png"
          alt="programmer's image"
          className="mt-10 md:w-3/4 md:ml-40"
        />
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-4xl ml-10 md:text-6xl md:ml-28">
          More than just shorter links
        </h1>
        <p className="ml-10 md:ml-28">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className="btn mt-10 ml-20 px-20 text-white hover:text-gray-600 md:ml-28 md:px-6 rounded-full bg-blue-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
