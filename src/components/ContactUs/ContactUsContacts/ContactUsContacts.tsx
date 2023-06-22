import Image from "next/image";
import calling from "../../../../public/images/icons/Calling.svg";
import massage from "../../../../public/images/icons/Message.svg";
import location from "../../../../public/images/icons/Location.svg";

const ContactUsContacts: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 lg:gap-12 mt-5 mb-12 md:mb-20 lg:mt-24">
      <div className="flex items-center gap-6">
        <div className="flex justify-center content-center rounded-full bg-white w-12 md:w-16 h-12 md:h-16 contact-icon lg:border-0">
          <Image src={calling} alt="icon" className="w-5 md:w-7" />
        </div>
        <p className="text-base md:text-2xl">
          Телефон:
          <br /> <a href="tel:+380961435372">+38 (096) 143 - 53 - 72</a>
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex justify-center content-center rounded-full bg-white w-12 md:w-16 h-12 md:h-16 contact-icon lg:border-0">
          <Image src={massage} alt="icon" className="w-5 md:w-7" />
        </div>
        <p className="text-base md:text-2xl underline md:no-underline">
          Електронна адреса:
          <br />{" "}
          <a href="mailto:greenonyx18@gmail.com">greenonyx18@gmail.com</a>
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex justify-center content-center rounded-full bg-white w-12 md:w-16 h-12 md:h-16 contact-icon lg:border-0">
          <Image src={location} alt="icon" className="w-5 md:w-7" />
        </div>
        <div>
          <p className="text-base md:text-2xl">
            Географія послуг:
            <br /> Київ та Київська область
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContacts;
