import AboutSection from "../components/AboutSection";
import { FAQ } from "../components/FAQ";
import { ServiceSection } from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const AboutMePage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <FAQ />
    </motion.div>
  );
};
