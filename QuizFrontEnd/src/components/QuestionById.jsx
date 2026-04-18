import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import '../App.css';
import API_BASE_URL from '../constants';

function QuestionById() {
  const [id, setId] = useState('');
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!id) {
      setError("Please enter an ID.");
      setQuestion(null);
      return;
    }

    fetch(`${API_BASE_URL}/question/findQuestion/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Question not found");
        }
        return res.json();
      })
      .then((data) => {
        setQuestion(data);
        setError('');
      })
      .catch((err) => {
        setError("No question found with that ID.");
        setQuestion(null);
      });
  };

  return (
    <div>
      <h2>Find Question by ID:</h2><br/>
      <input className="inputStyle"
        type="number"
        value={id}
        placeholder="Enter question ID"
        onChange={(e) => setId(e.target.value)}
        
      />
      <button className="btnStyle" onClick={handleSearch}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {question && <QuestionCard question={question} />}
      </div>
    </div>
  );
}

export default QuestionById;
