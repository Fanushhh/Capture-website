import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
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

const StyledToggle = styled(motion.div)`
  h4 {
    &:hover {
      color: #23d997;
      transition: all 0.5s ease;
    }
  }
`;
