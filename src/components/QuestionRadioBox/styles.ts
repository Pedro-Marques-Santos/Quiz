import styled from "styled-components";

interface StateQuestion {
  isTrue: boolean;
}

export const RadioBox = styled.div<StateQuestion>`
  cursor: pointer;
  padding-left: 19px;
  padding-right: 19px;
  margin-bottom: 25px;

  border: 2px solid var(--lightblue);
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
    border: 2px solid var(--yellow);
    background: var(--yellow);
  }

  background: ${(props) => props.isTrue ? 'green' : 'white'};

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