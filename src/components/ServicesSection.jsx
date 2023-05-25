import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPaperclip,
  faMoneyBill,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { About, Description, Image } from "../styles";
import { styled } from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

export const ServiceSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>

        <Cards>
          <Card>
            <div className="icon">
              <FontAwesomeIcon color="#23d997" size="2x" icon={faClock} />
              <h3>Fast</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon color="#23d997" size="2x" icon={faPaperclip} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon color="#23d997" size="2x" icon={faMoneyBill} />
              <h3>Cost effective</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon color="#23d997" size="2x" icon={faPeopleGroup} />
              <h3>Eternal support</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80"
          alt="laptop image"
        />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0;
  }
  @media (max-width: 1300px) {
    p {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1300px) {
    .icon {
      justify-content: center;
    }
  }
`;
