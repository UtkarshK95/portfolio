import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    try {
      await emailjs.sendForm(
        "service_hukq31e",
        "template_l1egrob",
        formRef.current,
        "BWt78xRzanE889_VG"
      );
      toast.success("Message Sent", toastConfig);
      console.log("SUCCESS!");
    } catch (error) {
      toast.error("Failed to send message", toastConfig);
      console.log("FAILED...", error.text);
    }
    event.target.reset();
  };

  return (
    <div className="antialiased bg-gray-100">
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white shadow-lg rounded-xl overflow-hidden max-w-4xl w-full p-8 sm:p-12 space-y-6 md:space-x-12 md:space-y-0 md:items-stretch">
          <ContactInfo />
          <ContactForm formRef={formRef} onSubmit={sendEmail} />
        </div>
      </div>
      <ToastContainer {...toastContainerProps} />
    </div>
  );
};

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const toastContainerProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: true,
};

const ContactInfo = () => (
  <div className="py-4 flex-grow flex flex-col space-y-8 md:justify-between">
    <div>
      <h1 className="font-bold text-4xl text-green-500 tracking-wide">
        Contact Me
      </h1>
      <h2 className="pt-8">Hello! I'm Utkarsh Katiyar.</h2>
      <h2 className="pt-8">
        🚀 Ready to connect? Drop me a line with your details or just say hi!
      </h2>
      <h3 className=" pt-8">📧 Email: utkarsh_katiyar@outlook.com</h3>
      <h3 className=" pt-4">📍 Location: Bengaluru, Karnataka, India</h3>
      <h2 className="pt-8">Looking forward to hearing from you!</h2>
    </div>
  </div>
);

const ContactForm = ({ formRef, onSubmit }) => (
  <div className="relative z-10">
    <div className="absolute -top-28 -right-28 bg-green-500 rounded-full w-40 h-40"></div>
    <div className="absolute -bottom-16 -left-28 bg-green-500 rounded-full w-40 h-40"></div>
    <div className="relative z-10 bg-white text-gray-600 rounded-xl shadow-lg p-8 w-full md:w-80">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col space-y-4"
      >
        {formFields.map((field) => (
          <FormInput key={field.id} {...field} />
        ))}
        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-info inline-block self-end hover:bg-green-500 text-white bg-gray-500 font-bold rounded-lg px-6 py-2 uppercase text-sm"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

const formFields = [
  {
    id: "name",
    label: "Your name",
    type: "text",
    placeholder: "Name",
    name: "from_name",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Email Address",
    name: "user_email",
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject",
    name: "subject",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message",
    name: "message",
  },
];

const FormInput = ({ id, label, type, placeholder, name }) => (
  <div className="form-group pt-2 mx-auto col-8">
    <label htmlFor={id} className="text-sm">
      {label}
    </label>
    <input
      type={type !== "textarea" ? type : undefined}
      as={type === "textarea" ? "textarea" : "input"}
      className="form-control ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900"
      placeholder={placeholder}
      id={id}
      name={name}
      required
      rows={type === "textarea" ? "2" : undefined}
    />
  </div>
);

export default ContactSection;
