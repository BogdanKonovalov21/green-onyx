"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/images/portfolio/image1.png";
import image2 from "../../../public/images/portfolio/image2.jpg";
import image3 from "../../../public/images/portfolio/image3.jpg";
import image4 from "../../../public/images/portfolio/image4.jpg";
import styles from "./Portfolio.module.scss";

const showStatus = {
  hide: styles.hide,
  show: styles.show,
};

const Portfolio: React.FC = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [show, setShow] = useState("");

  const portfolioData = [
    {
      text: `Перегляньте деякі з наших минулих проектів ландшафтного дизайну.`,
      image: image1,
      alt: "About image 1",
    },
    {
      text: `Перегляньте деякі з наших минулих проектів ландшафтного дизайну.`,
      image: image2,
      alt: "About image 2",
    },
    {
      text: `Перегляньте деякі з наших минулих проектів ландшафтного дизайну.`,
      image: image3,
      alt: "About image 3",
    },
    {
      text: `Перегляньте деякі з наших минулих проектів ландшафтного дизайну.`,
      image: image4,
      alt: "About image 4",
    },
  ];

  const checkActive = (id: number): string =>
    selectedImage === id ? `font-bold relative ${styles.active}` : "";

  const changeElement = (): void => {
    if (show === showStatus.hide) return;

    setShow(showStatus.hide);
    setTimeout(() => {
      if (selectedImage === portfolioData.length - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage((prevValue) => prevValue + 1);
      }
      setShow(showStatus.show);
    }, 400);
  };

  const selectElement = (index: number): void => {
    if (show === showStatus.hide) return;
    if (selectedImage === index) return;

    setShow(showStatus.hide);
    setTimeout(() => {
      setSelectedImage(index);
      setShow(showStatus.show);
    }, 400);
  };

  return (
    <section className={styles.container} id="portfolio">
      <div className="xl:container px-5 mx-auto md:px-0 py-10 xl:pt-24 xl:pb-28 grid md:grid-cols-2">
        <div className="flex flex-col justify-between md:py-10 md:ml-10 z-10">
          <div className="md:mr-10">
            <p className="text-2xl">Наша робота</p>
            <h2
              className={`text-2xl md:text-xl lg:text-2xl xl:text-3xl h-48 mt-7 ${show}`}
            >
              {portfolioData[selectedImage].text}
            </h2>
          </div>
          <button
            className={`text-xl w-24 uppercase text-left pb-1 md:visible invisible ${styles.button}`}
            onClick={changeElement}
            disabled={show === showStatus.hide}
          >
            Далі
          </button>
        </div>
        <div className="flex items-center relative mx-auto justify-end md:justify-center flex-row-reverse md:flex-row md:pb-0 pb-10">
          <div className={`md:pr-10 ${show}`}>
            <Image
              src={portfolioData[selectedImage].image}
              alt={portfolioData[selectedImage].alt}
            />
          </div>
          <div className="text-xl -translate-x-5 absolute md:relative md:px-0 flex flex-col gap-7">
            {portfolioData.map(
              (el, index: number): JSX.Element => (
                <div
                  key={index}
                  onClick={() => selectElement(index)}
                  className={`${styles.numeric} ${checkActive(index)}`}
                >
                  {index >= 9 ? "" : 0}
                  {index + 1}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
