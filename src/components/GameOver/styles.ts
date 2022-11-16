import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${background});
`

export const ContainerCard = styled.div`
  width: 464px;
  border-radius: 24px;
  padding-bottom: 18px;
  background: var(--light1);

  h1 {
    position: relative;
    top: -50px;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    color: var(--light2);
  }

  h4 {
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--darkblue);
    margin-top: 33px;
    text-align: center;
  }

  h5 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--darkblue);
  }
`;

export const ImgEnd = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonEnd = styled.div`
  cursor: pointer;
  height: 62px;
  width: 209px;
  border-radius: 12px;
  border: 1px solid red;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--darkblue);
  border: 2px solid var(--darkblue);

  transition: 0.5s;
  :hover {
    border: 2px solid burlywood;
  }
`