import { QuizProvider } from "./context/Quiz";

import { GlobalStyle } from "./styles/global";

import { Contentquiz } from "./components/Contentquiz/Contentquiz";

export function App() {
  // nao fiz o useContext aqui pois o QuizProvider ao está em volta do App.tsx

  return (
    <QuizProvider>
      <Contentquiz />
      <GlobalStyle />
    </QuizProvider>
  );
}
