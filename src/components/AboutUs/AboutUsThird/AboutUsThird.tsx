"use client";
import Image from "next/image";
import flower from "../../../../public/images/flower.svg";
import "./AboutUsThird.css";
import CallbackButton from "@/components/CallbackButton/CallbackButton";

const AboutUsThird: React.FC = (): JSX.Element => {
  return (
    <div className="lg:max-w-7xl mx-auto flex justify-center">
      <div className="flex flex-col items-center px-10">
        <div className="bg-block sm:w-full p-10 pb-16">
          <div className="flex justify-between items-center">
            <Image src={flower} alt="flower" />
          </div>

          <h3 className="font-bold text-lg mb-6 md:text-3xl text-center tracking-wider leading-loose">
            Відкрийте двері до мрій! <br />
            При замовленні послуги &quot;Комплексний благоустрій&quot;
            <br />- витончений ландшафтний проект у подарунок!
          </h3>
        </div>

        <div className="flex flex-col content-center justify-center">
          <p className=" lg:max-w-4xl mt-8 mb-2  md:mt-14 text-lg md:text-2xl lg:text-4xl text-center bottom-text">
            Зв’яжіться з нами сьогодні, щоб дізнатися більше про наші послуги.
          </p>
          <CallbackButton className="text-lg flex justify-center mt-8 mb-10" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsThird;
