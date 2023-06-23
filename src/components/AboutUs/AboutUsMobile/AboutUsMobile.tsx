'use client';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import AboutUsFirst from '../AboutUsFirst/AboutUsFirst';
import AboutUsSecond from '../AboutUsSecond/AboutUsSecond';
import AboutUsThird from '../AboutUsThird/AboutUsThird';

import '../AboutUs.css';

const AboutUsMobile: React.FC = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <section
      className="flex flex-col items-center pt-10 lg:hidden"
      id="companyMobile"
    >
      <h2 className="font-bold text-4xl mb-14 px-10">Про нашу компанію</h2>
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
        {isOpened ? 'Читати менше' : 'Читати більше'}
      </button>
    </section>
  );
};

export default AboutUsMobile;
