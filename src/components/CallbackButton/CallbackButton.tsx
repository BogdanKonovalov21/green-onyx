import { Link } from "react-scroll";

interface Props {
  className: string;
}

const CallbackButton: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <div className={className}>
      <Link to="contactUs" smooth={true} duration={1000} spy={true}>
        <button className="rounded-2xl h-20 w-80 md:w-96 font-bold text-lg md:text-xl hero-button cursor-pointer">
          Отримайте Вашу безкоштовну пропозицію
        </button>
      </Link>
    </div>
  );
};

export default CallbackButton;
