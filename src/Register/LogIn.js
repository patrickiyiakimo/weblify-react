import React, { useState } from "react";
import * as Yup from "yup";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log("Form data:", formData);
        setErrors({});
      })
      .catch((error) => {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div>
      <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block border-gray-500 border-2 rounded-md w-96 py-3 mt-24"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="block border-gray-500 border-2 rounded-md w-96 py-3 mt-8"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <button
              type="submit"
              className="btn mt-8 w-96 md:px-20 rounded-md text-white hover:text-gray-600 bg-blue-300"
            >
              Log In
            </button>
          </form>
        </div>
        <div>
          <img
            src="/images/undraw_Programming_re_kg9v (1).png"
            alt="programmer's image"
            className="md:w-3/4 md:ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
