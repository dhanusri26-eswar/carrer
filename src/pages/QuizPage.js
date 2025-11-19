import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import { getStartQuestion, getQuestionById } from '../data/quizQuestions';
import '../styles/QuizPage.css';

const QuizPage = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(getStartQuestion());
  const [answers, setAnswers] = useState({});
  const [questionPath, setQuestionPath] = useState(['start']);
  const navigate = useNavigate();

  // Get user data for filtering colleges later
  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  const handleAnswer = (value, nextQuestionId) => {
    // Store answer with question ID
    setAnswers({
      ...answers,
      [currentQuestionId]: value
    });

    // If there's a next question, go to it
    if (nextQuestionId) {
      const nextQuestion = getQuestionById(nextQuestionId);
      setCurrentQuestion(nextQuestion);
      setCurrentQuestionId(nextQuestionId);
      setQuestionPath([...questionPath, nextQuestionId]);
    } else {
      // No more questions, calculate results
      const result = calculateDetailedResult();
      navigate('/results', { 
        state: { 
          result,
          userMarks: userData.mark12,
          cutoff: userData.cutoff
        } 
      });
    }
  };

  const handlePrevious = () => {
    if (questionPath.length > 1) {
      const newPath = [...questionPath];
      newPath.pop(); // Remove current
      const previousId = newPath[newPath.length - 1];
      
      setCurrentQuestionId(previousId);
      setCurrentQuestion(getQuestionById(previousId));
      setQuestionPath(newPath);
    }
  };

  const calculateDetailedResult = () => {
    // Get the primary career path from first answer
    const careerPath = answers['start'];
    
    // Get more specific details from subsequent answers
    const details = {
      primaryPath: careerPath,
      specificField: answers[Object.keys(answers)[1]] || '',
      specialization: answers[Object.keys(answers)[2]] || '',
      preference: answers[Object.keys(answers)[3]] || '',
      timeline: answers['final'] || '',
      allAnswers: answers
    };

    return details;
  };

  const progress = ((questionPath.length) / 5) * 100; // Approximate progress

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Career Assessment Quiz</h1>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {questionPath.length} of ~5
          </p>
        </div>

        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={answers[currentQuestionId]}
          onSelectAnswer={handleAnswer}
        />

        <div className="quiz-navigation">
          <button 
            className="nav-button"
            onClick={handlePrevious}
            disabled={questionPath.length === 1}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
