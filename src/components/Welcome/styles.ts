import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    width: 500px;
  }

  h1 {
    font-size: 1.4em;
  }

  background-size: cover;
  background-position: center;
  background-image: url(${background});
  filter: grayscale(0.1)
`

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
`