import styled from "styled-components";

interface RadioBoxProps {
  answer: string;
  option: string | number;
  answerSelected: string | number | undefined;
}


export const RadioBox = styled.div<RadioBoxProps>`
  cursor: pointer;
  padding-left: 19px;
  padding-right: 19px;
  margin-bottom: 25px;

  border: 1px solid var(--lightblue);
  color: var(--lightblue);

  height: 45px;
  border-radius: 12px;

  font-size: 20px;
  font-weight: 500;
  line-height: 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.25s;
  :hover {
    color: var(--light1);
    border: 1px solid var(--yellow);
    background: var(--yellow);
  }

  background: ${(props) => props.answerSelected && props.option === props.answer ? "var(--lightblue)" : ""};
  color: ${(props) => props.answerSelected && props.option === props.answer ? "white" : ""};
  border: 1px solid ${(props) => props.answerSelected && props.option !== props.answer ? "red" : ""};

`;

export const Answer = styled.div`
  display: flex;
  align-items: center;

  h6 {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    margin-left: 40px;
  }
`