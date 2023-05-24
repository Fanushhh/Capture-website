import { styled } from "styled-components";

export default function AboutSection() {
  return (
    <About className="description">
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span className="highlight">dream website</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact me for any web development task you want to tackle or if you
          just wanna talk.
        </p>
        <button>Contact me</button>
      </Description>
      <Image className="profile-image">
        <img
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt="about me image"
        />
      </Image>
    </About>
  );
}

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  gap: 2rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
