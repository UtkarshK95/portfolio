import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

function ContactSection() {
  function sendEmail(e) {
    e.preventDefault();
    toast.success("Message Sent", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-gray-900 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden">
            <div class="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
              <div class="">
                <h1 class="font-bold text-4xl tracking-wide text-green-500">
                  Contact Me
                </h1>
                <p class="text-white text-sm pt-2">
                  Hi, My name is Utkarsh Katiyar.
                  <br />
                  Send me a message with your info.
                </p>
              </div>
              <div class="flex flex-col space-y-6">
                {/* Phone Number */}
                {/* <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="call"
                    class="text-xl text-green-500"
                  ></ion-icon>
                  <span class="select-all">+91 9.........</span>
                </div> */}
                <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="mail"
                    class="text-xl text-green-500"
                  ></ion-icon>
                  <span class="select-all">utkarsh_katiyar@outlook.com</span>
                </div>
                <div class="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="location"
                    class="text-xl text-green-500"
                  ></ion-icon>
                  <span class="select-all">Agra(U.P.), India</span>
                </div>
              </div>
              <div class="flex space-x-4 text-lg">
                <a
                  href="https://github.com/UtkarshK95"
                  class="hover:text-green-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://twitter.com/UtkarshK07"
                  class="hover:text-green-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>

                <a
                  href="https://instagram.com/utkarsh.katiyar07"
                  class="hover:text-green-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/utkarsh-katiyar/"
                  class="hover:text-green-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
            <div class="relative z-10">
              <div class="absolute -top-28 -right-28 z-0 bg-green-500 w-40 h-40 rounded-full"></div>
              <div class="absolute -bottom-16 -left-28 z-0 bg-green-500 w-40 h-40 rounded-full"></div>
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
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <label for="" class="text-sm">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        class="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                        id=""
                        cols="10"
                        rows="2"
                        placeholder="Your message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                      <input
                        type="submit"
                        className="btn btn-info"
                        class="inline-block self-end hover:bg-green-500 text-white bg-gray-500 font-bold rounded-lg px-6 py-2 uppercase text-sm"
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default ContactSection;
