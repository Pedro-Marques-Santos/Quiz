import { createContext, ReactNode, useReducer } from 'react';
import questions from '../data/questions';

interface QuizProviderProps {
  children: ReactNode;
}

interface ReducerAction {
  type: string;
  playload?: {
    aswer: string,
    element: string | number
  };
}

type TQuizContextProps = {
  dispatch(value: ReducerAction): void;
  state: IInitialState;
}

interface Questions {
  question: string;
  options: string[];
  answer: string;
}

interface IInitialState {
  gameStage: string;
  questions: Questions[];
  currentQuestion: number;
  score: number;
  aswerSelected: string | number | undefined;
}

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0
} as IInitialState

const quizReducer = (state: IInitialState, action: ReducerAction) => {

  switch (action.type) {
    case "CHANGE_STETA":
      return {
        ...state, // recupera o gameStage anterior e altera o seu valor, isso para manter as questions, se n retorn sem as questions
        gameStage: STAGES[1]
      };

    case "REODER_QUESTIONS":
      const reaorderQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reaorderQuestions
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      // se n existir um array no data question
      if (!questions[nextQuestion]) {
        endGame = true;
      }
      // se for true o endGame vai retornar FIM de jogo, se nao state se mantem o mesmo
      return {
        ...state,
        currentQuestion: nextQuestion,
        aswerSelected: undefined,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      }

    case "NEW_GAME":
      console.log(state)
      return initialState;

    case "CHECK_ANSWER":
      if (state.aswerSelected) return state;

      const aswer = action.playload?.aswer;
      const option = action.playload?.element;
      let correctAnswer = 0;

      if (aswer === option) correctAnswer = 1;
      return {
        ...state,
        score: state.score + correctAnswer,
        aswerSelected: option
      }

    default:
      return state;
  }
}

export const QuizContext = createContext<TQuizContextProps | null>(null)

export function QuizProvider({ children }: QuizProviderProps) {

  const [state, dispathcreducer] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch: dispathcreducer }}>
      {children}
    </QuizContext.Provider>
  );
}