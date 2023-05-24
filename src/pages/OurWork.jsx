import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>Mountain top</h2>
        <div className="line"></div>
        <Link to="/work/the-mountains">
          <img
            src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80"
            alt="first project with mountains"
          />
        </Link>
      </Movie>
      <Movie>
        <h2>Skyline</h2>
        <div className="line"></div>
        <Link to="skylines">
          <img
            src="https://images.unsplash.com/photo-1507961455425-0caef37ef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
            alt="first project with skylines"
          />
        </Link>
      </Movie>
      <Movie>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img
            src="https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="first project with good times"
          />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
