import React from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5vupg69",
        "template_ec1kqli",
        e.target,
        "user_4Q2D5fw8yqUdAbmXSCugV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div class="antialiased bg-gray-100">
        <div class="w-full min-h-screen flex justify-center items-center">
          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-cyan-700 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
            <div class="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
              <div class="">
                <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p class="text-cyan-100 text-sm pt-2">
                  Hi, My name is Utkarsh Katiyar. If you want to connect, then
                  you can fill this form.
                </p>
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
              </div>
              <div class="flex space-x-4 text-lg">
                <a href="/#" class="hover:text-teal-300">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/#" class="hover:text-teal-300">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/#" class="hover:text-teal-300">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="/#" class="hover:text-teal-300">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </div>
            <div class="relative z-10">
              <div class="absolute -top-28 -right-28 z-0 bg-teal-400 w-40 h-40 rounded-full"></div>
              <div class="absolute -bottom-16 -left-28 z-0 bg-teal-400 w-40 h-40 rounded-full"></div>
              <div class="relative z-10 w-full md:w-80 h-full bg-white p-8 text-gray-600 rounded-xl shadow-lg">
                <form
                  action=""
                  class="flex flex-col space-y-4"
                  onSubmit={sendEmail}
                >
                  <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                      <label for="" class="text-sm">
                        Your name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                        id=""
                        cols="10"
                        rows="2"
                        placeholder="Your message"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                      <input
                        type="submit"
                        className="btn btn-info"
                        class="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                        value="Send Message"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
