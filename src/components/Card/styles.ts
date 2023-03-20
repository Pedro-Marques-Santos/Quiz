import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 464px;
  border-radius: 24px;
  padding-bottom: 18px;
  background: var(--light1);

  h1 {
    position: relative;
    font-size: 36px;
    top: -50px;
    font-weight: 700;
    line-height: 54px;
    color: var(--light2);
    @media (max-height: 620px) {
      top: 0px;
      padding-left: 28px;
      color: var(--blue);
      font-size: 30px;
    }
  }
`;

export const ImgTop = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  justify-content: end;
  margin-top: -115px;
`;
