"use client";
import { useState } from "react";
import ContactUsDesctop from "./ContactUsDesctop/ContactUsDesctop";
import ContactUsMobile from "./ContactUsMobile/ContactUsMobile";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contactUs">
      <ContactUsDesctop
        name={{ name, setName }}
        mobile={{ mobile, setMobile }}
        message={{ message, setMessage }}
      />
      <ContactUsMobile
        name={{ name, setName }}
        mobile={{ mobile, setMobile }}
        message={{ message, setMessage }}
      />
    </div>
  );
};

export default ContactUs;
