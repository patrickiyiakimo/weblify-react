// import React, { useState } from "react";
// import * as Yup from "yup";

// const LogIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validationSchema
//       .validate(formData, { abortEarly: false })
//       .then(() => {
//         console.log("Form data:", formData);
//         setErrors({});
//       })
//       .catch((error) => {
//         const validationErrors = {};
//         error.inner.forEach((err) => {
//           validationErrors[err.path] = err.message;
//         });
//         setErrors(validationErrors);
//       });
//   };

//   return (
//     <div>
//       <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
//         <div>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className={`block border-2 rounded-md w-96 py-3 mt-24 ${
//                 errors.email ? "border-red-500" : "border-gray-500"
//               }`}
//             />
//             {errors.email && <p className="text-red-500">{errors.email}</p>}

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your Password"
//               className={`block border-2 rounded-md w-96 py-3 mt-8 ${
//                 errors.password ? "border-red-500" : "border-gray-500"
//               }`}
//             />
//             {errors.password && (
//               <p className="text-red-500">{errors.password}</p>
//             )}

//             <button
//               type="submit"
//               className="btn mt-8 w-96 md:px-20 rounded-md text-white hover:text-gray-600 bg-blue-300"
//             >
//               Log In
//             </button>
//           </form>
//         </div>
//         <div>
//           <img
//             src="/images/undraw_Programming_re_kg9v (1).png"
//             alt="programmer's image"
//             className="md:w-3/4 md:ml-40"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;











// import React, { useState } from "react";
// import * as Yup from "yup";

// const Login = () => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Form validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrors({});
//     setError(null);

//     try {
//       await validationSchema.validate(formData, { abortEarly: false });
//       await postData();
//     } catch (error) {
//       if (error.name === "ValidationError") {
//         const validationErrors = {};
//         error.inner.forEach((err) => {
//           validationErrors[err.path] = err.message;
//         });
//         setErrors(validationErrors);
//       } else {
//         setError(error.message);
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const postData = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/api/userLogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (!res.ok) {
//         throw new Error(result.error || "Network response was not ok");
//       }

//       setResponse(result.message);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`block border-2 rounded-md w-96 py-3 mt-8 ${
//               errors.email ? "border-red-500" : "border-gray-500"
//             }`}
//           />
//           {errors.email && <p className="text-red-500">{errors.email}</p>}

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className={`block border-2 rounded-md w-96 py-3 mt-8 ${
//               errors.password ? "border-red-500" : "border-gray-500"
//             }`}
//           />
//           {errors.password && <p className="text-red-500">{errors.password}</p>}

//           <button
//             type="submit"
//             className="btn mt-8 w-96 md:px-20 rounded-md text-white hover:text-gray-600 bg-blue-300"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Logging In..." : "Log In"}
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//         {response && <p className="text-green-500 mt-4">{response}</p>}
//       </div>
//       <div>
//         <img
//           src="/images/undraw_Programming_re_kg9v (1).png"
//           alt="programmer's image"
//           className="md:w-3/4 md:ml-40"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setError(null);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      await postData();
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch("http://localhost:8000/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.text(); // Read response as text for debugging
        throw new Error(errorData || "Network response was not ok");
      }

      const result = await res.json();
      setResponse(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`block border-2 rounded-md w-96 py-3 mt-8 ${
              errors.email ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={`block border-2 rounded-md w-96 py-3 mt-8 ${
              errors.password ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <button
            type="submit"
            className="btn mt-8 w-96 md:px-20 rounded-md text-white hover:text-gray-600 bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {response && <p className="text-green-500 mt-4">{response}</p>}
      </div>
      <div>
        <img
          src="/images/undraw_Programming_re_kg9v (1).png"
          alt="programmer's image"
          className="md:w-3/4 md:ml-40"
        />
      </div>
    </div>
  );
};

export default Login;
