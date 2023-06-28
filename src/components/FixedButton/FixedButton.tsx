'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import calling from '../../../public/images/icons/Calling.svg';

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the visibility state is stored in local storage
    const storedVisibility = localStorage.getItem('scrollComponentVisibility');

    if (storedVisibility) {
      setIsVisible(JSON.parse(storedVisibility));
    } else {
      setIsVisible(true); // Default to visible if no stored visibility state found
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElement = document.getElementById('home');
      const heroSectionHeight = heroElement ? heroElement.clientHeight : 0;
      const triggerPoint = heroSectionHeight - 200;

      if (scrollPosition > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const storeVisibility = () => {
      localStorage.setItem(
        'scrollComponentVisibility',
        JSON.stringify(isVisible)
      );
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', storeVisibility); // Store visibility state before page unload
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', storeVisibility);
    };
  }, [isVisible]);

  return (
    <div>
      {isVisible && (
        <Link
          to="contactUs"
          smooth={true}
          duration={1000}
          spy={true}
          className={`fixed z-40 right-3 bottom-5 cursor-pointer`}
        >
          <div className="w-20 h-20 flex justify-center content-center rounded-full bg-lightOrange contact-icon border-0">
            <Image src={calling} alt="icon" className="w-8" width={100} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default FixedButton;
