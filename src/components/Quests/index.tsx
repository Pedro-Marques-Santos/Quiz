import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";

import { QuestionRadioBox } from "../QuestionRadioBox";
import { ContainerQuests, ContentButton, Question } from "./styles";

interface ICurrentQuestion {
  question: string;
}

export function Quests() {

  const quizState = useContext(QuizContext);
  const currentQuestion =
    quizState?.state.questions[quizState.state.currentQuestion] as unknown as ICurrentQuestion;

  return (
    <ContainerQuests>
      <Question>{currentQuestion.question}</Question>
      <QuestionRadioBox />
      <ContentButton>
        <div>Anterior</div>
        <div onClick={() => quizState?.dispatch({ type: "CHANGE_QUESTION" })}>Próxima</div>
      </ContentButton>
    </ContainerQuests>
  );
}