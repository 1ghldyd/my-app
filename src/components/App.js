import React, { useState } from "react";
import { QUIZZES } from "../constants";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Container from "./Container";
import AnswerGroup from "./AnswerGroup";
import QuestionSection from "./QuestionSection";
import ResultSection from "./ResultSection";
import GlobalStyle from '../globalStyle';

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const convertedScore = parseInt(score/QUIZZES.length * 100);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score => score + 1);
    };
    if (currentNo === QUIZZES.length - 1) {
      setShowResult(true);
    } else {
      setCurrentNo(currentNo => currentNo + 1);
    };
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      { showResult
      ? <Container>
          <ResultSection convertedScore={ convertedScore }/>
        </Container>
      : <Container>
          <QuestionSection currentNo={ currentNo } />
          <AnswerGroup currentNo={ currentNo } handleClick={ handleClick } />
        </Container>
      }
    </ThemeProvider>
  );
}

export default App;