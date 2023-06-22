import { useState, useEffect } from "react";
import Image from "next/image";
import swipeUp from "../../../../public/images/swipe-up.svg";
import "./HeroSection.css";
import CallbackButton from "@/components/CallbackButton/CallbackButton";

const HeroSection: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(false);
    }
  };
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-no-repeat hero-section px-9"
      id="home"
    >
      <div className="text-white flex flex-col items-center justify-center mt-48 ">
        <span className="text-lg text-center uppercase leading-10">
          Green Onyx - експерт у сфері ландшафтного дизайну
        </span>
        <h1 className="text-4xl lg:text-6xl text-center mt-11 mb-4 uppercase max-w-6xl">
          Дизайн зелених мрій, які стають реальністю!
        </h1>
      </div>
      <CallbackButton className="text-lg mt-16 mb-14 lg:mb-56" />

      {isVisible && (
        <Image
          src={swipeUp}
          alt="swipe up"
          className="lg:hidden mb-8 animate-bounce"
        />
      )}
    </section>
  );
};

export default HeroSection;
