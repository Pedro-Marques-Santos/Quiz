import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    max-width: 500px;
    min-width: 200px;
  }

  h1 {
    font-size: 1.4em;
  }

  background-size: cover;
  background-position: center;
  background-image: url(${background});
  filter: grayscale(0.1);

  @media (max-width: 900px) {
    h1 {
      padding: 5px;
      font-size: 1.2em;
      text-align: justify;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    img {
      width: 80%;
    }
    h1 {
      font-size: 1em;
    }
  }
`;

export const Button = styled.div`
  width: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;

  :hover {
    text-decoration: underline;
  }
`;
