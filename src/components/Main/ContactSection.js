import React from "react";
import Me from "../../assets/images/me.jpg";

function ContactSection() {
  return (
    <div class="antialiased relative text-gray-600">
      <div class="absolute w-full min-h-screen">
        <div class="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12 text-white text-center"></div>
      </div>
      <div class="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div class="relative max-w-4xl">
          <div class="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div class="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div class="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 class="text-lg">Here's my</h2>
                <h1 class="pt-1 text-5xl font-bold text-gray-800">
                  Contact Info
                </h1>
              </div>
              <div class="flex flex-col space-y-6">
                <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="call"
                    class="text-xl text-teal-300"
                  ></ion-icon>
                  <span class="select-all">+91 9736992561</span>
                </div>
                <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="mail"
                    class="text-xl text-teal-300"
                  ></ion-icon>
                  <span class="select-all">utkarsh_katiyar@outlook.com</span>
                </div>
                <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="location"
                    class="text-xl text-teal-300"
                  ></ion-icon>
                  <span class="select-all">
                    235, Paschimpuri, Agra(U.P.), India
                  </span>
                </div>
                <div>
                  <a
                    class="bg-cyan-700 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full"
                    href="/contact"
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Me}
              alt=""
              class="flex-shrink-0 w-80 rounded-full border-6 border-white shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
