import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = () => {
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
        </li>
        <li>
          <NavLink to="/contact-us">2. Contact me</NavLink>
        </li>
        <li>
          <NavLink to="/work">3. Our work</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

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
