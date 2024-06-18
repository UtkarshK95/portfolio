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
    <div className="text-gray-600 body-font pb-6">
      <Slider {...settings}>
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
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
      </Slider>
    </div>
  );
};

export default Testimonials;
