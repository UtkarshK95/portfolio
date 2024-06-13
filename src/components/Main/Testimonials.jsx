import React from "react";
import data from "../../utils/data.json";

const Testimonials = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 w-full mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">{testimonial.quote}</p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
