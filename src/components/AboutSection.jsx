import { styled } from "styled-components";

export default function AboutSection() {
  return (
    <About className="description">
      <div className="title">
        <div className="hide">
          <h2>I work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span className="highlight">dream website</span> come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <p>
          Contact me for any web development task you want to tackle or if you
          just wanna talk.
        </p>
        <button>Contact me</button>
      </div>
      <div className="profile-image">
        <img
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt="about me image"
        />
      </div>
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
  .profile-image img {
    max-width: 400px;
    width: 100%;
    display: block;
  }
`;
