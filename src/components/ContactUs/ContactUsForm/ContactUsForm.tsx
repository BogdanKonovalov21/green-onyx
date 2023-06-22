import axios from "axios";
import ContactUsFormProps from "@/interfaces/ContactUsFormProps";

const ContactUsForm: React.FC<ContactUsFormProps> = ({
  name,
  mobile,
  message,
}): JSX.Element => {
  const { name: nameValue, setName } = name;
  const { mobile: mobileValue, setMobile } = mobile;
  const { message: messageValue, setMessage } = message;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", {
        name: nameValue,
        mobile: mobileValue,
        message: messageValue,
      });
      setName("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Something went wrong. Please try again later.", error);
    }
  };

  return (
    <form
      className="lg:bg-white flex flex-col gap-5 lg:rounded-xl lg:px-14 py-14"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:items-end md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="firstName" className="text-lg font-bold">
            Ім&apos;я
          </label>
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setName(e.target.value)}
            name="firstName"
            placeholder="Ім'я"
            className=" outline-none form-input py-4 px-6"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="mobile" className="text-lg font-bold">
            Номер мобільного
          </label>
          <input
            type="tel"
            value={mobileValue}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="6+ символів"
            className="outline-none form-input py-4 px-6"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 ">
        <label htmlFor="message" className="text-lg font-bold">
          Повідомлення
        </label>
        <textarea
          value={messageValue}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введіть ваше повідомлення"
          rows={5}
          name="message"
          className="outline-none form-input py-4 px-6 w-full resize-none"
        />
      </div>

      <button
        type="submit"
        className="contact-us-form-button mt-6 md:mt-9 w-full py-6 text-xl font-bold"
      >
        Надіслати
      </button>
    </form>
  );
};

export default ContactUsForm;
