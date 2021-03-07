import React from "react";
import styled from "styled-components";
import { QUIZZES } from "../../constants";

// .question-section에 해당하는 CSS를 가져옴
const QuestionSectionWrapper = styled.div`
    margin-bottom: 16px;
`;

// .question-header에 해당하는 CSS를 가져옴
const PageLabel = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
`;

// .question-text에 해당하는 CSS를 가져옴
const QuestionTitle = styled.div`
    font-size: 20px;
    margin-bottom: 8px;
`;

const QuestionSection = ({ currentNo }) => (
    <QuestionSectionWrapper>
        <PageLabel>
            <span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
        </PageLabel>
        <QuestionTitle>{QUIZZES[currentNo].question}</QuestionTitle>
    </QuestionSectionWrapper>
);
export default QuestionSection;