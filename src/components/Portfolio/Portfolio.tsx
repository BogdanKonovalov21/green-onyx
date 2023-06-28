'use client';
import { useState } from 'react';
import styles from './Portfolio.module.scss';

import ImageSlider from './ImageSlider/ImageSlider';
import {
  gatneImages,
  tarasivkaImages,
  shevchenkoveImages,
  katyzhankaImages,
  zabutchaImages,
  gavrilivkaImages,
} from './images';
import ImageSliderMobile from './ImageSlider/ImageSliderMobile';

const showStatus = {
  hide: styles.hide,
  show: styles.show,
};

const Portfolio: React.FC = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [show, setShow] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioData = [
    {
      text: `Влаштування рулонного газону с. Гатне`,
      shortText: 'с. Гатне',
      alt: 'About image 1',
      images: gatneImages,
    },
    {
      text: `Комплексний благоустрій с. Гаврилівка.`,
      shortText: 'с. Гаврилівка',
      alt: 'About image 2',
      images: gavrilivkaImages,
    },
    {
      text: `Комплексний благоустрій с. Забуччя.`,
      shortText: 'с. Забуччя',
      alt: 'About image 3',
      images: zabutchaImages,
    },
    {
      text: `Комплексний благоустрій с. Катюжанка.`,
      shortText: 'с. Катюжанка',
      alt: 'About image 4',
      images: katyzhankaImages,
    },
    {
      text: `Комплексний благоустрій с. Тарасівка.`,
      shortText: 'с. Тарасівка',
      alt: 'About image 4',
      images: tarasivkaImages,
    },
    {
      text: `Комплексний благоустрій с. Шевченкове.`,
      shortText: 'с. Шевченкове',
      alt: 'About image 4',
      images: shevchenkoveImages,
    },
  ];

  const checkActive = (id: number): string =>
    selectedImage === id ? `font-bold relative ${styles.active}` : '';

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
      <div className=" md:max-w-7xl px-10 mx-auto flex flex-col content-center py-10 xl:pt-24 xl:pb-28">
        <h2 className="font-bold text-5xl mb-14 ">Наша робота</h2>

        <p
          className={`text-2xl md:text-xl lg:text-2xl xl:text-3xl my-14 md:my-7 ${show}`}
        >
          {portfolioData[selectedImage].text}
        </p>

        <div className="flex justify-center items-center relative mx-auto  flex-col-reverse md:flex-row md:pb-0 pb-10">
          <div
            className={`flex justify-center items-center sm:max-w-sm ${show}`}
          >
            <ImageSlider
              images={portfolioData[selectedImage].images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <ImageSliderMobile
              images={portfolioData[selectedImage].images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          <div
            className={`${styles.numericContainer} text-xl translate-y-24 xs:translate-y-36 md:translate-y-24 lg:-translate-y-0 md:translate-x-52 lg:translate-x-56 absolute md:relative md:px-0 flex flex-row md:flex-col gap-7 z-40`}
          >
            {portfolioData.map(
              (el, index: number): JSX.Element => (
                <div
                  key={index}
                  onClick={() => {
                    selectElement(index);
                    setCurrentIndex(0);
                  }}
                  className={`${styles.numeric} ${checkActive(index)}`}
                >
                  <p>
                    {index >= 9 ? '' : 0}
                    {index + 1}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="">
          <button
            className={`text-xl w-24 uppercase text-left pb-1 md:visible invisible ${styles.button}`}
            onClick={changeElement}
            disabled={show === showStatus.hide}
          >
            Далі
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
