"use client";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import ServicesSectionMobile from "./ServicesSectionMobile/ServicesSectionMobile";

const HeroSectionWithServices: React.FC = (): JSX.Element => {
  return (
    <section className="relative">
      <HeroSection />
      <ServicesSection />
      <ServicesSectionMobile />
    </section>
  );
};

export default HeroSectionWithServices;
