import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactUsPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hide"
      animate="show"
      exit="exit"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};
