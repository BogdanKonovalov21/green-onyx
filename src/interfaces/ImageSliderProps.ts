export interface Image {
  src: string;
  height: number;
  width: number;
}

export interface SliderProps {
  images: Image[];
  currentIndex: number;
  setCurrentIndex: Function;
}
