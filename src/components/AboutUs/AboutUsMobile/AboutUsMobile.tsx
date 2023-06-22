"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import AboutUsFirst from "../AboutUsFirst/AboutUsFirst";
import AboutUsSecond from "../AboutUsSecond/AboutUsSecond";
import AboutUsThird from "../AboutUsThird/AboutUsThird";

import "../AboutUs.css";

const AboutUsMobile: React.FC = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <section
      className="flex flex-col items-center pt-10 lg:hidden"
      id="companyMobile"
    >
      <AboutUsFirst />

      <Collapse isOpened={isOpened}>
        <AboutUsSecond />
        <AboutUsThird />
      </Collapse>

      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className=" my-8 underline text-xl"
      >
        {isOpened ? "Read less" : "Read more"}
      </button>
    </section>
  );
};

export default AboutUsMobile;
