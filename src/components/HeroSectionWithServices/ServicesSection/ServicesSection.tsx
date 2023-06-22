import { useState } from "react";
import grass1 from "../../../../public/images/grass1.svg";
import grass2 from "../../../../public/images/grass2.svg";
import grass3 from "../../../../public/images/grass3.svg";
import "./ServicesSection.css";

import ServiceCard from "./ServiceCard/ServiceCard";

const ServicesSection: React.FC = (): JSX.Element => {
  const cards = [
    {
      title: "Ландшафтне проектування",
      text: "Ми розробляємо унікальні ландшафтні проекти, враховуючи ваші побажання та особливості ділянки, щоб створити гармонійне та естетичне середовище.",
      image: grass1,
    },
    {
      title: "Влаштування газону",
      text: "Ми забезпечуємо професійне влаштування газону, включаючи підготовку грунту, посів трави та догляд за нею, щоб ваш газон виглядав здоровим і доглянутим.",
      image: grass2,
    },
    {
      title: "Автоматичний полив",
      text: "Наші послуги включають установку та налаштування автоматичних систем поливу, які забезпечують оптимальний рівень зрошення для рослин, зекономлюючи воду та забезпечуючи їх здоров'я.",
      image: grass3,
    },
    {
      title: "Сервісне обслуговування ділянки",
      text: "Ми пропонуємо регулярне сервісне обслуговування вашої ділянки, включаючи кошення газону, обрізку дерев та кущів, видалення бур'яну та загальний догляд, щоб зберегти її красу та порядок.",
      image: grass3,
    },
    {
      title: "Влаштування тротуарної плитки",
      text: "Ми здійснюємо професійне влаштування тротуарної плитки, надаючи вам вибір різноманітних дизайнів та матеріалів, що відповідають вашим потребам та стилю.",
      image: grass2,
    },
    {
      title: "Посадка рослин",
      text: "Наші досвідчені садівники проводять професійну посадку рослин, враховуючи їх вимоги до ґрунту та клімату, щоб створити красивий та здоровий ландшафт.",
      image: grass1,
    },
    // {
    //   title: "Благоустрій території",
    //   text: "Ми забезпечуємо комплексний благоустрій території, включаючи встановлення світлових приладів, декоративних елементів, альтанок та інших об'єктів, що створюють затишок та комфорт.",
    //   image: grass1,
    // },
  ];

  const [flippedStates, setFlippedStates] = useState(
    Array(cards.length).fill(false)
  );

  const handleCardFlip = (index: number) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const firstRowCards = cards.slice(0, Math.ceil(cards.length / 2));
  const secondRowCards = cards.slice(Math.ceil(cards.length / 2));

  return (
    <section className="mx-auto py-6 hidden lg:block" id="services">
      <div className="px-5">
        <div className="w-full flex items-center justify-center pb-8">
          {firstRowCards.map((card, index) => (
            <ServiceCard
              key={index}
              index={index}
              card={card}
              flippedStates={flippedStates}
              handleCardFlip={handleCardFlip}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          {secondRowCards.map((card, index) => (
            <ServiceCard
              key={index}
              index={index + secondRowCards.length}
              card={card}
              flippedStates={flippedStates}
              handleCardFlip={handleCardFlip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
