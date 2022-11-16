import { Answer, RadioBox } from "./styles";

export function QuestionRadioBox() {

  return (
    <>
      <RadioBox>
        <Answer>
          <div>A</div>
          <h6>Salvador</h6>
        </Answer>
      </RadioBox>
      <RadioBox>
        <Answer>
          <div>B</div>
          <h6>Brasília</h6>
        </Answer>
      </RadioBox>
      <RadioBox>
        <Answer>
          <div>C</div>
          <h6>Rio de Janeiro</h6>
        </Answer>
      </RadioBox>
      <RadioBox>
        <Answer>
          <div>D</div>
          <h6>São Paulo</h6>
        </Answer>
      </RadioBox>
    </>
  );
}