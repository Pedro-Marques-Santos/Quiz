import styled from "styled-components";

export const ContainerQuests = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const Question = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--blue);
  font-size: 24px;
  text-align: justify;
  font-weight: 700;
  line-height: 36px;
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
    height: 56px;
    width: 116px;
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

    //display: ${(props) => props.whatCurrentQuestion === 0 ? "none" : "flex"};
    display: none;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: var(--light1);

  }
`;