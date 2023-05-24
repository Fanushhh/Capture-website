import { styled } from "styled-components";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About</a>
        </li>
        <li>
          <a href="#">2. Services</a>
        </li>
        <li>
          <a href="#">3. FAQ</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
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
`;
