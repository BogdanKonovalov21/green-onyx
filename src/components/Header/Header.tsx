"use client";
import Image from "next/image";
import { Element, Link, Events } from "react-scroll";
import logo from "../../../public/images/Rectangle.svg";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

import "./Header.css";

const Header: React.FC = (): JSX.Element => {
  const menuList = [
    { label: "Головна", link: "home" },
    { label: "Послуги", link: "services" },
    { label: "Про нас", link: "company" },
    { label: "Наша робота", link: "portfolio" },
    { label: "Зв'яжіться з нами", link: "contactUs" },
  ];

  return (
    <header className="fixed flex justify-center items-center w-full top-0 header py-9 z-50">
      <div className="absolute top-4 left-9 h-full">
        <Image src={logo} alt="Logo" width={100} height={70} />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex text-white gap-10 lg:gap-14">
          {menuList.map(({ link, label }, index) => {
            const offset = link === "services" ? 40 : 0;
            return (
              <li key={index}>
                <Link
                  to={link}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={`text-lg mb-8 cursor-pointer relative link `}
                  offset={offset}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <HeaderMobile />
    </header>
  );
};

export default Header;
