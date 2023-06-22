import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import arrow from "../../../../../public/images/arrow.svg";

interface Card {
  title: string;
  text: string;
  image: string;
}

interface Props {
  index: number;
  card: Card;
  flippedStates: boolean[];
  handleCardFlip: (index:number) => void;
}

const ServiceCard: React.FC<Props> = ({
  index,
  card,
  flippedStates,
  handleCardFlip,
}): JSX.Element => {
  return (
    <ReactCardFlip
      key={index + 1}
      isFlipped={flippedStates[index]}
      flipDirection="horizontal"
      containerClassName="blockItem"
    >
      <div className="flex flex-col items-center gap-5">
        <Image src={card.image} alt="image" className="max-h-40" />
        <p className="text-3xl leading-8 text-center">{card.title}</p>
        <button
          className="text-lg underline"
          onClick={() => handleCardFlip(index)}
        >
          Читати більше
        </button>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="w-full">
          <Image
            className="cursor-pointer"
            src={arrow}
            alt="arrow"
            onClick={() => handleCardFlip(index)}
          />
        </div>
        <p className="text-xl max-w-xs">{card.text}</p>
      </div>
    </ReactCardFlip>
  );
};

export default ServiceCard;
