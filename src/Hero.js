

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="content">
//         <ul>
//           <li>
//             <span>
//               <button>Sign Up</button>
//             </span>
//           </li>
//           <li>
//             <span>
//               <button>Log in</button>
//             </span>
//           </li>
//         </ul>
//       </div>
//       <h1>
//         Effortless URL Shortening For <span>Everyone</span>
//       </h1>
//       <p>
//         Effortlessly create short links for social media, marketing and more
//       </p>
//       <form>
//         <input type="text" name="text" placeholder="Enter long url" />
//         <br></br>
//         <button>Shorten Url</button>
//       </form>
//       <span>
//         <p>By using our Url Shortener you agree to our terms and conditions</p>
//       </span>
//     </div>
//   );
// };

// export default Hero;




import React from "react";

const Hero = ({ showSignUp }) => {
  return (
    <div className="hero">
      {/* <div className="content">
        <ul>
          <li>
            <span>
              {showSignUp ? <button>Sign Up</button> : <button>Log In</button>}
            </span>
          </li>
        </ul>
      </div> */}
      <h1>
        Effortless URL Shortening For <span>Everyone</span>
      </h1>
      <p>
        Effortlessly create short links for social media, marketing and more
      </p>
      <form>
        <input type="text" name="text" placeholder="Enter long url" />
        <br></br>
        <button>Shorten Url</button>
      </form>
      <span>
        <p>By using our Url Shortener you agree to our terms and conditions</p>
      </span>
    </div>
  );
};

export default Hero;
