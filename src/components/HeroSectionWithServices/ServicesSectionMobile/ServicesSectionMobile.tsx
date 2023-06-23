import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import grass1 from '../../../../public/images/grass1.svg';
import grass2 from '../../../../public/images/grass2.svg';
import grass3 from '../../../../public/images/grass3.svg';
import closed from '../../../../public/images/closed.svg';

interface ImgProps {
  state: boolean | undefined;
}

const Img: React.FC<ImgProps> = ({ state }) => {
  return (
    <Image
      src={closed}
      alt="closed"
      className={`w-3 ${state ? 'rotate-90' : ''}`}
    />
  );
};

const ServicesSectionMobile: React.FC = (): JSX.Element => {
  const accordionList = [
    {
      title: 'Ландшафтне проектування',
      text: 'Ми розробляємо унікальні ландшафтні проекти, враховуючи ваші побажання та особливості ділянки, щоб створити гармонійне та естетичне середовище.',
      image: grass1,
    },
    {
      title: 'Влаштування газону',
      text: 'Ми забезпечуємо професійне влаштування газону, включаючи підготовку грунту, посів трави та догляд за нею, щоб ваш газон виглядав здоровим і доглянутим.',
      image: grass2,
    },
    {
      title: 'Автоматичний полив',
      text: "Наші послуги включають установку та налаштування автоматичних систем поливу, які забезпечують оптимальний рівень зрошення для рослин, зекономлюючи воду та забезпечуючи їх здоров'я.",
      image: grass3,
    },
    {
      title: 'Сервісне обслуговування ділянки',
      text: "Ми пропонуємо регулярне сервісне обслуговування вашої ділянки, включаючи кошення газону, обрізку дерев та кущів, видалення бур'яну та загальний догляд, щоб зберегти її красу та порядок.",
      image: grass1,
    },
    {
      title: 'Влаштування тротуарної плитки',
      text: 'Ми здійснюємо професійне влаштування тротуарної плитки, надаючи вам вибір різноманітних дизайнів та матеріалів, що відповідають вашим потребам та стилю.',
      image: grass2,
    },
    {
      title: 'Посадка рослин',
      text: 'Наші досвідчені садівники проводять професійну посадку рослин, враховуючи їх вимоги до ґрунту та клімату, щоб створити красивий та здоровий ландшафт.',
      image: grass3,
    },
    {
      title: 'Благоустрій території',
      text: "Ми забезпечуємо комплексний благоустрій території, включаючи встановлення світлових приладів, декоративних елементів, альтанок та інших об'єктів, що створюють затишок та комфорт.",
      image: grass1,
    },
  ];

  return (
    <section className="block lg:hidden" id="servicesMobile">
      <Accordion allowMultipleExpanded allowZeroExpanded>
        {accordionList.map((item, index) => {
          return (
            <AccordionItem className="mobileBlockItem" key={index}>
              <AccordionItemHeading className="h-28  flex content-center">
                <AccordionItemButton className="w-full flex content-center items-center">
                  <div className="w-full flex justify-center gap-10 items-center px-5">
                    <div className="flex justify-between w-32">
                      <Image
                        src={item.image}
                        alt="grass"
                        width={70}
                        height={70}
                        className="h-20 w-16"
                      />
                      <AccordionItemState>
                        {({ expanded }) => <Img state={expanded} />}
                      </AccordionItemState>
                    </div>
                    <p className="text-2xl w-80">{item.title}</p>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={`mb-10 px-6 AccordionItemPanel`}>
                <p className="text-xl">{item.text}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default ServicesSectionMobile;
