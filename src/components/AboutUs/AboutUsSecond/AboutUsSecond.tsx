import Image from "next/image";
import photo from "../../../../public/images/photo.png";

const AboutUsSecond: React.FC = (): JSX.Element => {
  return (
    <div className="px-10 my-10 lg:my-0 about-us-second">
      <div
        className="flex flex-col
      gap-9"
      >
        <p className="text-2xl leading-9">
          Ми глибоко цінуємо вашу довіру і прагнемо забезпечити вам найвищу
          якість кожного елементу. Наше завдання - зробити ваш простір
          бездоганним, надаючи вам незабутні враження та естетичне задоволення,
          що триватиме протягом років.
        </p>
        <p className="text-2xl leading-9">
          Нехай ваш ландшафт стане виразом вашого стилю та розкриє вашу
          внутрішню гармонію. Довіртеся нам, як незаперечним експертам в галузі
          елітного ландшафтного дизайну, і ми перетворимо вашу мрію на
          реальність, прокладаючи шлях до вишуканого життя в навколишньому
          просторі.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSecond;
