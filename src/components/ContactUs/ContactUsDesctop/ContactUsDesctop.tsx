/* eslint-disable react/no-unescaped-entities */
"use client";
import ContactUsContacts from "../ContactUsContacts/ContactUsContacts";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import ContactUsFormProps from "@/interfaces/ContactUsFormProps";
import "./ContactUsDesctop.css";

const ContactUsDesctop: React.FC<ContactUsFormProps> = (props): JSX.Element => {
  return (
    <section className="contact-us hidden lg:block">
      <div className="max-w-7xl mx-5 md:mx-auto py-32 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white">
          <h2 className="text-5xl">Зв'яжіться з нами</h2>
          <ContactUsContacts />
        </div>
        <ContactUsForm {...props} />
      </div>
    </section>
  );
};

export default ContactUsDesctop;
