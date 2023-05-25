import { motion } from "framer-motion";
import { titleAnim, pageAnimation } from "../animation";
import styled from "styled-components";

export const ContactUsPage = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send me a message</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send me a message</h3>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h3>Send me a message</h3>
          </Social>
        </Hide>
      </div>
    </ContactStyled>
  );
};

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  h3 {
    margin: 2rem 0;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background: #23d997;
`;
const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
`;

const Hide = styled.div`
  overflow: hidden;
`;
