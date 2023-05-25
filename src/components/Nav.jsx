import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">1. About</NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "" }}
          />
        </li>
        <li>
          <NavLink to="/contact-us">2. Contact me</NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact-us" ? "100%" : "" }}
          />
        </li>
        <li>
          <NavLink to="/work">3. My work</NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 0%;
  @media (max-width: 1300px) {
    bottom: -30%;
  }
`;
const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;

  #logo {
    font-size: 2rem;
    font-family: "Lobster", sans-serif;
    font-weight: lighter;
    color: #23d997;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  li {
    position: relative;
  }

  @media (max-width: 1300px) {
    padding: 1rem;
    flex-direction: column;
    #logo {
      display: block;
      text-align: center;
    }
    ul {
      justify-content: center;
      li {
        padding: 1rem 0;
      }
      a {
        display: inline-block;
        font-size: 0.9rem;
      }
    }
  }
`;
