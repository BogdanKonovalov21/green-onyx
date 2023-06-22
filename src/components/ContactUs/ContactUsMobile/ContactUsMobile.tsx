import ContactUsContacts from "../ContactUsContacts/ContactUsContacts";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import ContactUsFormProps from "@/interfaces/ContactUsFormProps";

const ContactUsMobile: React.FC<ContactUsFormProps> = (props) => {
  return (
    <section className="flex flex-col lg:hidden px-5">
      <h2 className="text-4xl mt-9">Contact Us</h2>
      <ContactUsForm {...props} />
      <ContactUsContacts />
    </section>
  );
};

export default ContactUsMobile;
