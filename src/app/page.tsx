import Head from "next/head";
import HeroSectionWithUnderBlock from "@/components/HeroSectionWithServices/HeroSectionWithUnderBlock";
import AboutUs from "@/components/AboutUs/AboutUs";
import Statistic from "@/components/Statistic/Statistic";
import Portfolio from "@/components/Portfolio/Portfolio";
// import Subscription from "@/components/Subscription/Subscription";
import AboutUsMobile from "@/components/AboutUs/AboutUsMobile/AboutUsMobile";
import ContactUs from "@/components/ContactUs";
import FixedButton from "@/components/FixedButton/FixedButton";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <main>
        <HeroSectionWithUnderBlock />
        <FixedButton />
        <AboutUs />
        <AboutUsMobile />
        <Statistic />
        <Portfolio />
        {/* <Subscription /> */}
        <ContactUs />
      </main>
    </>
  );
}
