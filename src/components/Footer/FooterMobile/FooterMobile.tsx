import Image from "next/image";
import facebook from "../../../../public/images/icons/facebook.svg";
import instagram from "../../../../public/images/icons/instagram.svg";
import twitter from "../../../../public/images/icons/twitter.svg";
import google from "../../../../public/images/icons/google.svg";
import logo from "../../../../public/images/Rectangle.svg";

import "../Footer.css";

const FooterMobile: React.FC = (): JSX.Element => {
  return (
    <nav className="footer-mobile text-white underline md:hidden py-6 px-14">
      <Image src={logo} alt="logo" className="mb-5" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-6">
          <a href="#" className="text-base ">
            Privacy policy
          </a>
          <p className="text-base leading-8">
            © Copyright 2023 WWWW All Rights Reserved.
          </p>
        </div>

        <div className="flex justify-end items-center">
          <ul className="grid grid-cols-2 gap-7">
            <li>
              <a href="#">
                <Image src={instagram} alt="instagram" width={40} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={google} alt="google+" width={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FooterMobile;
