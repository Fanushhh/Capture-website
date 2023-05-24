import { About, Description, Hide } from "../styles";
import { styled } from "styled-components";

export const FAQ = () => {
  return (
    <StyledFAQ>
      <h2>
        Frequently <span>asked</span> questions
      </h2>
      <div className="questions">
        <div className="question">
          <h4>How do I start?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod?
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What's the payment method?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod?
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What is the delivery time of the project?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod?
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What products do you offer?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quod?
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
    </StyledFAQ>
  );
};

const StyledFAQ = styled(About)`
  display: block;

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem Orem;
    width: 100%;
  }

  .question {
    padding: 2rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
