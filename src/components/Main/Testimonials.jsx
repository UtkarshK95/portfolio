import React from "react";

function Testimonials() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <p className="leading-relaxed">
                Proactive in completing tasks assigned to him with eagerness to
                learn and understand
              </p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HARSHA CHANDRAN
              </h2>
              <p className="text-gray-500">
                Product Consultant - Full Stack Developer, TheMathCompany
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <p className="leading-relaxed">
                I had the pleasure of working with Utkarsh in the same project.
                He is an easy going person. He is always available to help us
                when needed. He is very determined, intelligent and always aims
                for high quality work. His contributions are really valuable to
                our project. He is fast to respond and He is my go-to person
                when I need advice.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Asha Deepika
              </h2>
              <p className="text-gray-500">Systems Engineer - Infosys</p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <p className="leading-relaxed">
                Utkarsh did an exceptional job in our recent project that we
                both worked upon. He is a very productive person and is a
                multi-skilled person with vast knowledge. Utkarsh is careful,
                proactive, self motivated and intelligent team player. It’s a
                pleasure working with Utkarsh
              </p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Shubhendra Srivastava
              </h2>
              <p className="text-gray-500">Senior Systems Engineer - Infosys</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
