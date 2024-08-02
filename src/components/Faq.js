import React from 'react'

const Faq = () => {
  return (
    <div className="font-abc text-gray-700 mb-20">
      <div>
        <h1 className="text-center text-6xl font-bold p-5">FAQ</h1>
        <p className="text-center text-2xl font-semibold pb-10">
          Frequently Asked Questions
        </p>
      </div>
      <div className="">
        <div className="collapse collapse-arrow bg-gray-700 text-gray-300 rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-700 text-gray-300 rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-700 text-gray-300 rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-700 text-gray-300 rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-700 text-gray-300 rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq