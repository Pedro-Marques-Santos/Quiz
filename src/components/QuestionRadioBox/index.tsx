import { useEffect, useState } from "react";
import { Answer, RadioBox } from "./styles";

export function QuestionRadioBox() {

  const [stateQuestion, setStateQuestion] = useState('default');
  // const [q1, setQ1] = useState(false);
  // const [q2, setQ2] = useState(false);
  // const [q3, setQ3] = useState(false);
  // const [q4, setQ4] = useState(false);


  useEffect(() => {
    if (stateQuestion !== 'correct') {

    }
  }, [stateQuestion])

  console.log(stateQuestion)

  return (
    <>
      <RadioBox
        onClick={() => setStateQuestion('correct')}
        isTrue={stateQuestion === 'correct'}
      >
        <Answer>
          <div>A</div>
          <h6>Salvador</h6>
        </Answer>
        <div className="material-symbols-outlined">task_alt</div>
      </RadioBox>
      <RadioBox
        onClick={() => setStateQuestion('incorrect')}
        isTrue={stateQuestion === 'incorrect'}>
        <Answer>
          <div>B</div>
          <h6>Brasília</h6>
        </Answer>
        <div className="material-symbols-outlined">cancel</div>
      </RadioBox>
      <RadioBox
        onClick={() => setStateQuestion('incorrect')}
        isTrue={stateQuestion === 'incorrect'}>
        <Answer>
          <div>C</div>
          <h6>Rio de Janeiro</h6>
        </Answer>
        <div className="material-symbols-outlined">cancel</div>
      </RadioBox>
      <RadioBox
        onClick={() => setStateQuestion('incorrect')}
        isTrue={stateQuestion === 'incorrect'}>
        <Answer>
          <div>D</div>
          <h6>São Paulo</h6>
        </Answer>
        <div className="material-symbols-outlined">cancel</div>
      </RadioBox>
    </>
  );
}