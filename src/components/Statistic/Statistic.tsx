import './Statistic.css';

const Statistic: React.FC = (): JSX.Element => {
  return (
    <section className="py-10 md:py-28 statistic">
      <div className="mx-auto items-center px-10 md:max-w-7xl flex flex-col gap-20 sm:gap-0 sm:flex-row justify-between ">
        <div className="flex flex-col items-center justify-center">
          <p className="  text-lg md:text-2xl">Працюємо</p>
          <span className=" text-lightOrange text-center mt-4 text-4xl">
            8 років
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-lightOrange text-4xl text-center">
            Високий
            <br /> рівень довіри
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-lg md:text-2xl">Виконано більше</p>
          <span className=" text-center mt-4 text-lightOrange text-4xl">
            110 проектів
          </span>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
