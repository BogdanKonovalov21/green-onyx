import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

import { SliderProps } from '@/interfaces/ImageSliderProps';
import styles from '../Portfolio.module.scss';

import leftArrow from '../../../../public/images/icons/left-arrow.png';
import rightArrow from '../../../../public/images/icons/right-arrow.png';

const showStatus = {
  hide: styles.hide,
  show: styles.show,
};

const ImageSliderMobile: React.FC<SliderProps> = ({
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) =>
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
          className="bg-lightOrange mt-10 rounded-full w-6 h-6 flex justify-center items-center z-40"
        >
          <Image src={leftArrow} alt="left arrow" width={8} height={8} />
        </button>
        <div className="slide-wrapper">
          <div className="slide flex gap-5 w-60 h-60">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? showStatus.show : showStatus.hide
                } `}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill={true}
                  objectFit="contain"
                  priority={true}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-lightOrange mt-10 rounded-full w-6 h-6 flex justify-center items-center z-40"
        >
          <Image src={rightArrow} alt="right arrow" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderMobile;
