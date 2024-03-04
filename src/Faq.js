// import React, { useState } from "react";

// const Faq = () => {
//   const [faq, setFaq] = useState([
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 1,
//     },
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 2,
//     },
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 3,
//     },
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 4,
//     },
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 5,
//     },
//     {
//       question: "What is a URL Shortener?",
//       answer:
//         "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
//       id: 6,
//     },
//   ]);

//   const [isAnswerVisible, setAnswerVisible] = useState(false);

//   const handleToggle = () => {
//     setAnswerVisible(!isAnswerVisible);
//   };

//   return (
//     <div className="faq">
//       <h1>FAQ</h1>
//       <p>Frequently Asked Questions</p>
//       <span>
//         <button onClick={handleToggle}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className={`w-6 h-6 ${isAnswerVisible ? "rotate" : ""}`}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d={
//                 isAnswerVisible
//                   ? "m4.5 15.75 7.5-7.5 7.5 7.5"
//                   : "m19.5 8.25-7.5 7.5-7.5-7.5"
//               }
//             />
//           </svg>
//         </button>
//       </span>
//       {faq.map((item) => (
//         <div key={item.id}>
//           <h3>{item.question}</h3>
//           {isAnswerVisible && (
//             <span>
//               <p>{item.answer}</p>
//             </span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";

const Faq = () => {
  const initialFaqState = [
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 1,
    },
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 2,
    },
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 3,
    },
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 4,
    },
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 5,
    },
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 6,
    },
  ];

  const [faq, setFaq] = useState(initialFaqState);

  const handleToggle = (id) => {
    setFaq((prevFaq) =>
      prevFaq.map((item) =>
        item.id === id
          ? { ...item, isAnswerVisible: !item.isAnswerVisible }
          : item
      )
    );
  };

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <p>Frequently Asked Questions</p>
      {faq.map((item) => (
        <div key={item.id}>
          <span>
            <button onClick={() => handleToggle(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${item.isAnswerVisible ? "rotate" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    item.isAnswerVisible
                      ? "m4.5 15.75 7.5-7.5 7.5 7.5"
                      : "m19.5 8.25-7.5 7.5-7.5-7.5"
                  }
                />
              </svg>
            </button>
          </span>
          <h3>{item.question}</h3>
          {item.isAnswerVisible && (
            <span>
              <p>{item.answer}</p>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
