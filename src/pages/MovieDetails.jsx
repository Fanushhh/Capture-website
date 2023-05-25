import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { ScrollTop } from "../components/scrollTop";

export const MovieDetailPage = () => {
  const history = useParams();
  const [movies, movieState] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === history.id
    );
    setMovie(currentMovie[0]);
  }, [movies, history]);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const Details = styled(motion.div)`
  color: white;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    flex-direction: column;
    margin: 0;
  }
`;

const AwardStyle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 70%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
  @media (max-width: 1300px) {
    padding: 0;
    width: 100%;
    text-align: center;
    .line {
      width: 100%;
    }
  }
`;

const Headline = styled.div`
  min-height: 90vh;

  padding-top: 20vh;

  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    min-height: 0;
    padding: 2rem 0;
    h2 {
      position: static;
      transform: none;
      text-align: center;
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    img {
      height: 50vh;
    }
  }
`;

const ImageDisplay = styled.div`
  min-height: 50%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 1300px) {
    img {
      height: 50vh;
    }
  }
`;
