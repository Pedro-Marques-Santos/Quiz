import { QuestionRadioBox } from "../QuestionRadioBox";
import { ContainerQuests, ContentButton, Question } from "./styles";

export function Quests() {
  return (
    <ContainerQuests>
      <Question>Qual é a primeira capital do Brasil?</Question>
      <QuestionRadioBox />
      <ContentButton>
        <div>Anterior</div>
        <div>Próxima</div>
      </ContentButton>
    </ContainerQuests>
  );
}