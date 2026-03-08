import React from "react";
import Slider from "react-slick";
import data from "../../utils/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 mt-4">
      {/* Background bubbles */}
      <div className="absolute -top-10 -right-10 bg-green-500 rounded-full w-36 h-36 opacity-20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 bg-green-500 rounded-full w-36 h-36 opacity-20 blur-2xl pointer-events-none" />

      <div className="relative z-10 px-8 py-6">
        <Slider {...settings}>
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="pb-6">
              <div className="text-center">
                <p className="text-gray-300 leading-relaxed text-sm italic">"{testimonial.quote}"</p>
                <span className="inline-block h-0.5 w-10 rounded bg-green-500 mt-5 mb-3"></span>
                <h2 className="text-white font-semibold text-sm tracking-wide">{testimonial.name}</h2>
                <p className="text-gray-500 text-xs mt-1">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
