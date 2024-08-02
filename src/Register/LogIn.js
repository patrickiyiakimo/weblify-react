import React from 'react'

const LogIn = () => {
  return (
      <div>
          <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
      <div>
        <input
          type="text"
          name="text"
          placeholder="Enter your email"
          className="block border-gray-500 border-2 rounded-md w-96 py-3 mt-8"
        />
        <input
          type="text"
          name="text"
          placeholder="Enter your Password"
          className="block border-gray-500 border-2 rounded-md w-96 py-3 mt-8"
        />
        <button className="btn mt-8 w-96  md:px-20 rounded-md text-white  hover:text-gray-600 bg-blue-300">
          Log In
        </button>
      </div>
      <div>
        <img
          src="/images/undraw_Programming_re_kg9v (1).png"
          alt="programmer's image"
          className=" md:w-3/4 md:ml-40"
        />
          </div>
          </div>
          </div>
  )
}

export default LogIn