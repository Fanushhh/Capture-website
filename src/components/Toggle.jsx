import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <StyledToggle
      layout
      className="question"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)``;