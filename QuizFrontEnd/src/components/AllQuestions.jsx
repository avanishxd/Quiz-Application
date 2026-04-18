import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import API_BASE_URL from '../constants';

function AllQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/question/allQuestions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div>
      <h3>All Questions:</h3>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))
      )}
    </div>
  );
}

export default AllQuestions;
