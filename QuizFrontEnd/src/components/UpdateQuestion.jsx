import React, { useState } from 'react';
import axios from 'axios';
import QuestionTemplate from './QuestionTemplate';
import API_BASE_URL from '../constants';

function UpdateQuestion({ goBack }) {
  const [question, setQuestion] = useState({
    id: '',
    question: '',
    category: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    difficulty: '',
  });
  const [message, setMessage] = useState('');

  const handleIdChange = e => {
    setQuestion({ ...question, id: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { ...question };
    axios.put(`${API_BASE_URL}/question/update/${question.id}`, payload)
      .then(() => setMessage('Question updated successfully!'))
      .catch(() => setMessage('Failed to update question.'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Update Question</h2>
      {message && <p>{message}</p>}
      <QuestionTemplate
        question={question}
        setQuestion={setQuestion}
        handleSubmit={handleSubmit}
        buttonLabel="Update"
        showIdInput={true}
        handleIdChange={handleIdChange}
      />
    </div>
  );
}

export default UpdateQuestion;
