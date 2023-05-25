import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  scrollReveal,
} from "../animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { ScrollTop } from "../components/scrollTop";
export const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movie>
        <motion.h2 variants={fade}>Mountain top</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-mountains">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80"
              alt="first project with mountains"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        animate={controls}
        initial="hidden"
        variants={scrollReveal}
      >
        <motion.h2 variants={fade}>Skyline</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="skylines">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://images.unsplash.com/photo-1507961455425-0caef37ef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              alt="first project with skylines"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        animate={controls2}
        initial="hidden"
        variants={scrollReveal}
      >
        <motion.h2>Good times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="first project with good times"
            />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
