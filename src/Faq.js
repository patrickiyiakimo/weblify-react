import React, { useState } from "react";

const Faq = () => {
  const initialFaqState = [
    {
      question: "What is a URL Shortener?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 1,
      isAnswerVisible: false,
    },
    {
      question: "How do I use URL Shortener?",
      answer:
        "Using a URL shortener is simple. Just paste your long URL into the provided input, click the 'Shorten' button, and you'll get a shortened link that you can share.",
      id: 2,
      isAnswerVisible: false,
    },
    {
      question: "Can I customize my short links?",
      answer:
        "Yes, you can customize your short links with a URL shortener that supports custom aliases. This feature allows you to create branded and memorable short URLs.",
      id: 3,
      isAnswerVisible: false,
    },
    {
      question: "Are there analytics for my short links?",
      answer:
        "Many URL shorteners provide analytics features, allowing you to track the performance of your short links. You can see metrics such as click-through rate, geographic location of clicks, and more.",
      id: 4,
      isAnswerVisible: false,
    },
    {
      question: "Is there a limit to the of links I can shorten?",
      answer:
        "The limit to the number of links you can shorten depends on the specific URL shortening service you're using. Check the service's documentation for information on any limitations.",
      id: 5,
      isAnswerVisible: false,
    },
    {
      question: "How secure are shortened URLs?",
      answer:
        "While shortened URLs are generally safe to use, be cautious when clicking on them, especially from untrusted sources. Some malicious actors may use URL shorteners to disguise harmful links.",
      id: 6,
      isAnswerVisible: false,
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
            {/* <button onClick={() => handleToggle(item.id)}> */}
              <svg
                onClick={() => handleToggle(item.id)}
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
            {/* </button> */}
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
