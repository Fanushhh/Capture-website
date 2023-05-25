import { About, Description, Hide } from "../styles";
import { styled } from "styled-components";
import { LayoutGroup } from "framer-motion";
import { Toggle } from "./Toggle";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

export const FAQ = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFAQ
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Frequently <span>asked</span> questions
      </h2>
      <div className="questions">
        <LayoutGroup id="a">
          <Toggle title="How do I start?">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                quod?
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup id="b">
          <Toggle title="What's the payment method?">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                quod?
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup id="c">
          <Toggle title="What is the delivery time for a project?">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                quod?
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Toggle>
        </LayoutGroup>
        <LayoutGroup id="d">
          <Toggle title="What products do you offer?">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                quod?
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Toggle>
        </LayoutGroup>
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
    margin: 2rem 0;
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
