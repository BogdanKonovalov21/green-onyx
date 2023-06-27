import Image from 'next/image';

import { SliderProps } from '@/interfaces/ImageSliderProps';

import leftArrow from '../../../../public/images/icons/left-arrow.png';
import rightArrow from '../../../../public/images/icons/right-arrow.png';

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
    <div className="hidden md:block mx-auto">
      <div className="flex gap-10 items-center ">
        <button
          onClick={prevSlide}
          className="bg-lightOrange rounded-full w-12 h-12 flex justify-center items-center"
        >
          <Image src={leftArrow} alt="left arrow" width={20} height={20} />
        </button>
        <div className="slide-wrapper">
          <div className="slide max-h-96 max-w-3xl flex gap-5">
            <Image src={images[currentIndex]} alt="Slide 1" />
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
