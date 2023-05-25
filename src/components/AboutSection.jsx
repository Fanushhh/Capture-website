import { About, Image, Description, Hide } from "../styles";
import { Wave } from "./Wave";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <About className="description">
      <Description>
        <div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span className="highlight">dream website</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact me for any web development task you want to tackle or if you
          just wanna talk.
        </motion.p>
        <Link to="/contact-us">
          <motion.button variants={fade}>Contact me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt="about me image"
        />
      </Image>
      <Wave />
    </About>
  );
}
