import React from 'react';
import '../styles/QuizQuestion.css';

const QuizQuestion = ({ question, selectedAnswer, onSelectAnswer }) => {
  const handleClick = (option) => {
    onSelectAnswer(option.value, option.next);
  };

  return (
    <div className="quiz-question">
      <h2>{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div 
            key={index}
            className={`option ${selectedAnswer === option.value ? 'selected' : ''}`}
            onClick={() => handleClick(option)}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              checked={selectedAnswer === option.value}
              onChange={() => handleClick(option)}
            />
            <label>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
