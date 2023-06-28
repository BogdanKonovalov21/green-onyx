import Image from 'next/image';

import { SliderProps } from '@/interfaces/ImageSliderProps';
import styles from '../Portfolio.module.scss';

import leftArrow from '../../../../public/images/icons/left-arrow.png';
import rightArrow from '../../../../public/images/icons/right-arrow.png';

const showStatus = {
  hide: styles.hide,
  show: styles.show,
};

const ImageSlider: React.FC<SliderProps> = ({
  images,
  currentIndex,
  setCurrentIndex,
}): JSX.Element => {
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

  return (
    <div className="hidden md:flex md:justify-center mx-auto w-full">
      <div className="flex mx-auto items-center gap-10">
        <button
          onClick={prevSlide}
          className="bg-lightOrange rounded-full w-12 h-12 flex justify-center items-center z-10 relative"
          style={{ zIndex: 10 }}
        >
          <Image src={leftArrow} alt="left arrow" width={20} height={20} />
        </button>
        <div className="slide-wrapper relative" style={{ zIndex: 5 }}>
          <div className="slide flex gap-5 w-96 h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? showStatus.show : showStatus.hide
                }`}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
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
          className="bg-lightOrange rounded-full w-12 h-12 flex justify-center items-center z-10 relative"
        >
          <Image src={rightArrow} alt="right arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
