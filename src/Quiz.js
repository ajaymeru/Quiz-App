import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions, nextQuestion, incrementScore, resetQuiz } from './quizSlice';

const Quiz = () => {
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, score, status, error } = useSelector((state) => state.quiz);

    useEffect(() => {
        if (status === 'idle') {
            // Handle the case where no category is selected yet
        }
    }, [status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="error-message">Error: {error}</div>;
    }

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="score-container">
                <h2>Your Score: {score}</h2>
                <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answers = Object.entries(currentQuestion.answers).filter(([key, value]) => value !== null);

    return (
        <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{currentQuestion.question}</p>
            <div className="answers-container">
                {answers.map(([key, answer]) => (
                    <button
                        key={key}
                        onClick={() => {
                            if (currentQuestion.correct_answers[key + '_correct'] === 'true') {
                                dispatch(incrementScore());
                            }
                            dispatch(nextQuestion());
                        }}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
