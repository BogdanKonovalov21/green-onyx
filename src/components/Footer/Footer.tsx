import Image from "next/image";
import facebook from "../../../public/images/icons/facebook.svg";
import instagram from "../../../public/images/icons/instagram.svg";
import twitter from "../../../public/images/icons/twitter.svg";
import google from "../../../public/images/icons/google.svg";

const Footer: React.FC = (): JSX.Element => {
  return (
    <nav className="bg-black text-white text-sm text-opacity-50 hidden md:block">
      <div className="mx-auto max-w-7xl py-8 flex justify-between">
        <ul className="flex gap-5 lg:gap-10">
          <li>
            <a href="#"></a>Cookie Policy
          </li>
          <li>
            <a href="#"></a>Your Privacy
          </li>
          <li>
            <a href="#"></a>Terms of Use
          </li>
        </ul>

        <p className="text-center">
          © Copyright 2023 Green Onyx. All Rights Reserved.
        </p>

        <ul className="flex gap-5 lg:gap-10">
          <li>
            <a href="#">
              <Image src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={google} alt="google+" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
