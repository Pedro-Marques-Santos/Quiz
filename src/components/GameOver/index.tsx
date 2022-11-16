import { Container, ContainerCard, ImgEnd, ButtonEnd } from "./styles";
import imgEnd from "../../assets/undraw_winners_ao2o 2.svg"

import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";

export function GameOver() {

  const quizState = useContext(QuizContext);

  return (
    <Container>
      <ContainerCard>
        <h1>QUIZ</h1>
        <ImgEnd>
          <img src={imgEnd} alt="" />
        </ImgEnd>
        <h4>Resultado</h4>
        <h5>Você acertou {quizState?.state.score} questões!</h5>
        <ButtonEnd onClick={() => quizState?.dispatch({ type: "NEW_GAME" })}>Reiniciar</ButtonEnd>
      </ContainerCard>
    </Container>
  );
}