import styled from "styled-components";

export const ContainerQuests = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const Question = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
  color: var(--blue);
  font-size: 20px;
  text-align: justify;
  font-weight: 700;
  line-height: 28px;
  @media (max-height: 700px) {
    margin-top: 0;
    font-size: 15px;
  }
`;

interface ContentButtonProps {
  whatCurrentQuestion: number | undefined;
}

export const ContentButton = styled.div<ContentButtonProps>`
  display: flex;
  justify-content: end;

  div {
    cursor: pointer;
    margin-right: 12px;
    height: 50px;
    width: 110px;
    left: 804px;
    top: 723px;
    border-radius: 12px;
    background: var(--red2);

    :hover {
      transition: 0.4s;
      background: var(--red2-hover);
    }

    :nth-child(2) {
      display: flex;
      margin-right: 0px;
      background: var(--yellow);
      :hover {
        transition: 0.4s;
        background: var(--yellow-hover);
      }
    }

    display: none;
    justify-content: center;
    align-items: center;

    font-size: 17px;
    font-weight: 700;
    line-height: 27px;
    color: var(--light1);
  }
`;
