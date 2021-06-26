// import React from "react";

// export default function ContactInfo() {
//   return <div></div>;
// }

import React from "react";
// import styled from "styled-components";
// import { MdEmail, MdLocalPhone } from "react-icons/md";
// import ContactForm from "./ContactForm";
// import ContactInfoItem from "./ContactInfoItem";
// import SectionTitle from "./SectionTitle";

export default function ContactInfo() {
  return (
    <div className="container">
      {/* <SectionTitle heading="contact" subheading="get in touch" /> */}
      <div className="contactSection__wrapper">
        <div className="left">
          <h1>+91 9736992561</h1>
          <h1>utkarsh_katiyar@outlook.com</h1>
          <h1>Agra(U.P.), India</h1>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
