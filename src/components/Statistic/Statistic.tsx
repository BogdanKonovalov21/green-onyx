import "./Statistic.css";

const Statistic: React.FC = (): JSX.Element => {
  return (
    <section className="mx-auto py-10 md:py-28 statistic">
      <div className="mx-auto grid grid-cols-2 items-center px-6 md:max-w-7xl md:flex md:justify-between ">
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
