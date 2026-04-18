import React, { useState } from 'react';
import axios from 'axios';
import QuestionTemplate from './QuestionTemplate';
import API_BASE_URL from '../constants';

function CreateQuestion({ goBack }) {
  const [question, setQuestion] = useState({
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

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { ...question };
    axios.post('${API_BASE_URL}/question/add', payload)
      .then(() => {
        setMessage('Question created successfully!');
        setQuestion({ question: '', category: '', option1: '', option2: '', option3: '', option4: '', answer: '', difficulty: '' });
      })
      .catch(() => setMessage('Failed to create question.'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Create Question</h2>
      {message && <p>{message}</p>}
      <QuestionTemplate
        question={question}
        setQuestion={setQuestion}
        handleSubmit={handleSubmit}
        buttonLabel="Create"
        showIdInput={false}
      />
    </div>
  );
}

export default CreateQuestion;
