import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Wave = () => {
  return (
    <StyledSvg
      viewBox="0 0 1771 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathoffset: 1 }}
        animate={{ pathLength: 1, pathoffset: 0 }}
        transition={{ duration: 3 }}
        d="M6 225C185.5 101 578.5 -133.5 826 131C1087.77 410.755 1312 327 1504 247.5C1670.83 164 2044 23.8001 2202 131"
        stroke="#23D977"
        strokeWidth="20"
        strokeOpacity="0.5"
      />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;
