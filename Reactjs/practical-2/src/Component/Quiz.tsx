import React, { useState } from "react";
import "./Quiz.css";
import Quizdata from "./Quizdata";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option: string) => {
    if (Quizdata[currentQuestion].correctAnswer === option) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Quizdata.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Quizdata.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRestartClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  
  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h2>Your Score: {score}</h2>
          <button onClick={handleRestartClick}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{Quizdata[currentQuestion].question}</p>
          <ul>
            {Quizdata[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextClick}>Next</button>
        </div>
      )}
    </div>
  );
};
export default Quiz;

