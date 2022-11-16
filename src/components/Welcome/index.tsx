import { Button, Container } from "./styles";
import imgwelcome from "../../assets/Copyright-pana-img.png"
import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";

export function Welcome() {

  const quizState = useContext(QuizContext);

  return (
    <Container>
      <img src={imgwelcome} alt="" />
      <div>
        <h1>Quiz de questões sobre a história do Brasil</h1>
        <Button onClick={() => quizState?.dispatch({ type: "CHANGE_STETA" })}>Iniciar Quiz</Button>
      </div>
    </Container>
  )
}