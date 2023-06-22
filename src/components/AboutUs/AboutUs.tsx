import AboutUsFirst from "./AboutUsFirst/AboutUsFirst";
import AboutUsSecond from "./AboutUsSecond/AboutUsSecond";
import AboutUsThird from "./AboutUsThird/AboutUsThird";

const AboutUs: React.FC = (): JSX.Element => {
  return (
    <section className="mt-10 pb-28 hidden lg:block" id="company">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col items-start content-start gap-4">
          <h2 className="font-bold text-5xl mb-14 px-10">Про нашу компанію</h2>
        </div>
        <div className="grid grid-cols-2 mb-5">
          <AboutUsFirst />
          <AboutUsSecond />
        </div>

        <AboutUsThird />
      </div>
    </section>
  );
};

export default AboutUs;
