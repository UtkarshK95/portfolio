import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const ContactSection = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message Sent", toastConfig);
      event.target.reset();
    } catch (error) {
      toast.error(`Failed to send: ${error?.text || error?.message || "Unknown error"}`, toastConfig);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="relative bg-gray-900 text-white overflow-hidden flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      {/* Background bubbles */}
      <div className="absolute top-10 right-16 bg-green-500 rounded-full w-52 h-52 opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-16 bg-green-500 rounded-full w-52 h-52 opacity-30 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl px-8 py-12 gap-12 items-start">
        <ContactInfo />
        <ContactForm formRef={formRef} onSubmit={sendEmail} isSending={isSending} />
      </div>

      <ToastContainer {...toastConfig} newestOnTop={false} rtl={false} pauseOnFocusLoss={false} />
    </div>
  );
};

const ContactInfo = () => (
  <div className="flex-1 flex flex-col space-y-6">
    <div>
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-1">Get in touch</p>
      <h1 className="font-bold text-4xl text-green-500 tracking-wide">Let's Talk</h1>
    </div>
    <p className="text-gray-300 leading-relaxed">
      Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
    </p>
    <div className="flex flex-col space-y-3 text-gray-400 text-sm">
      <a href="mailto:utkarsh_katiyar@outlook.com" className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
        <span>📧</span>
        <span>utkarsh_katiyar@outlook.com</span>
      </a>
      <span className="flex items-center gap-2">
        <span>📍</span>
        <span>Bengaluru, Karnataka, India</span>
      </span>
      <a href="https://www.linkedin.com/in/utkarsh-katiyar/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
        <span>💼</span>
        <span>linkedin.com/in/utkarsh-katiyar</span>
      </a>
    </div>
    <p className="text-gray-500 text-sm">I typically respond within 24 hours.</p>
  </div>
);

const ContactForm = ({ formRef, onSubmit, isSending }) => (
  <div className="bg-gray-800 border border-gray-700 text-gray-300 rounded-xl shadow-lg p-8 w-full md:w-80 flex-shrink-0">
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col space-y-4">
      {formFields.map((field) => (
        <FormInput key={field.id} {...field} />
      ))}
      <div className="pt-3">
        <button
          type="submit"
          disabled={isSending}
          className="inline-block text-white bg-gray-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed font-bold rounded-lg px-6 py-2 uppercase text-sm transition-colors duration-200"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  </div>
);

const formFields = [
  { id: "name", label: "Your name", type: "text", placeholder: "Name", name: "from_name" },
  { id: "email", label: "Email Address", type: "email", placeholder: "Email Address", name: "user_email" },
  { id: "subject", label: "Subject", type: "text", placeholder: "Subject", name: "subject" },
  { id: "message", label: "Message", type: "textarea", placeholder: "Your message", name: "message" },
];

const FormInput = ({ id, label, type, placeholder, name }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-sm text-gray-400">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required
        rows={3}
        className="bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        className="bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    )}
  </div>
);

export default ContactSection;
