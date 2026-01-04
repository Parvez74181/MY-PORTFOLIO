import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import HeroSection from "@/components/Sections/HeroSection";
import SelectedWorkSection from "@/components/Sections/SelectedWorkSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import TechStackSection from "@/components/Sections/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
