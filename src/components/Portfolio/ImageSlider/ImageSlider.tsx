import { useState } from 'react';
import Image from 'next/image';

import leftArrow from '../../../../public/images/icons/left-arrow.png';
import rightArrow from '../../../../public/images/icons/right-arrow.png';

const ImageSlider = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="hidden md:block mx-auto">
      <div className="flex gap-10 items-center ">
        <button
          onClick={prevSlide}
          className="bg-lightOrange rounded-full w-12 h-12 flex justify-center items-center"
        >
          <Image src={leftArrow} alt="left arrow" width={20} height={20} />
        </button>
        <div className="slide-wrapper">
          <div className="slide flex gap-5">
            <Image
              src={images[currentIndex]}
              alt="Slide 1"
              className="w-96 h-48"
            />
            <Image
              src={images[currentIndex + 1]}
              alt="Slide 2"
              className="w-96 h-48"
            />
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-lightOrange rounded-full w-12 h-12 flex justify-center items-center"
        >
          <Image src={rightArrow} alt="right arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
