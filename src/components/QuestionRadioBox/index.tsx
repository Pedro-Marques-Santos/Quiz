import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";
import { Answer, RadioBox } from "./styles";

interface ICurrentQuestion {
  question: string;
  answer: string;
  options: [];
}

export function QuestionRadioBox() {

  const quizState = useContext(QuizContext);

  const currentQuestion =
    quizState?.state.questions[quizState.state.currentQuestion] as unknown as ICurrentQuestion;

  const onSelectOption = (element: string | number) => {
    quizState?.dispatch({
      type: "CHECK_ANSWER",
      playload: { aswer: currentQuestion.answer, element }
    });
  };

  if (!quizState) {
    return <></>
  }

  function alfabetoQuest(element: string | number) {
    const index = currentQuestion.options.indexOf(element as never);
    if (index === 0) {
      return 'A';
    }
    if (index === 1) {
      return 'B';
    }
    if (index === 2) {
      return 'C';
    }
    if (index === 3) {
      return 'D';
    }
  }

  return (
    <>
      {
        currentQuestion.options.map((element: string | number) =>
          <RadioBox
            className="correct"
            key={element}
            option={element}
            answer={currentQuestion.answer}
            answerSelected={quizState.state.aswerSelected}
            onClick={() => onSelectOption(element)}>
            <Answer>
              <div>{alfabetoQuest(element)}</div>
              <h6>{element}</h6>
            </Answer>
          </RadioBox>
        )
      }
    </>
  );
}