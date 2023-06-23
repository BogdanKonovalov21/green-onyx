import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

import leftArrow from '../../../../public/images/icons/left-arrow.png';
import rightArrow from '../../../../public/images/icons/right-arrow.png';

const ImageSliderMobile = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div className="block md:hidden " {...swipeHandlers}>
      <div className="flex gap-3 items-center">
        <button
          onClick={prevSlide}
          className="bg-lightOrange rounded-full w-6 h-6 flex justify-center items-center"
        >
          <Image src={leftArrow} alt="left arrow" width={8} height={8} />
        </button>
        <div className="slide-wrapper">
          <div className="slide flex gap-5">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-96 h-48"
            />
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-lightOrange rounded-full w-6 h-6 flex justify-center items-center"
        >
          <Image src={rightArrow} alt="right arrow" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderMobile;
