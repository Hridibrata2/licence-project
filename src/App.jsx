import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import SocialIcons from "./components/SocialIcons";
import LogoMarquee from "./components/LogoMarquee";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <HowItWorks />
      <StatsSection />
      <LogoMarquee />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <SocialIcons />

    </div>
  );
}
