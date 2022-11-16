import { useContext, useEffect } from "react";

import { QuizContext } from "../../context/Quiz";

import { Welcome } from "../Welcome";
import { Dashboard } from "../Dashboard";
import { GameOver } from "../GameOver";

export function Contentquiz() {

  const quizState = useContext(QuizContext);

  useEffect(() => {
    quizState?.dispatch({ type: "REODER_QUESTIONS" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!quizState) {
    return <></>
  }

  console.log(quizState.state)

  return (
    <>
      {quizState.state.gameStage === "Start" && <Welcome />}
      {quizState.state.gameStage === "Playing" && <Dashboard />}
      {quizState.state.gameStage === "End" && <GameOver />}
    </>
  );
}