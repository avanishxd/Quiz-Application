import React from 'react';
import '../App.css'; 

function QuestionCard({ question }) {
  return (
    <div className="question-card">
      <h4>{question.id}. {question.question}</h4>
      <p><strong>Category:</strong> {question.category}</p>
      <p><strong>Difficulty:</strong> {question.difficulty}</p>
      <div className="options">
        <p> [1] {question.option1}</p>
        <p> [2] {question.option2}</p>
        <p> [3] {question.option3}</p>
        <p> [4] {question.option4}</p>
      </div>
      <p className="answerBox"><strong>Answer: </strong>{question.answer}</p>
    </div>
  );
}

export default QuestionCard;
