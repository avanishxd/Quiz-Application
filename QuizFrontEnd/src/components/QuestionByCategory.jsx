import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import API_BASE_URL from '../constants';

function QuestionByCategory() {
  const [category, setCategory] = useState('java');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/question/category/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setError('');
      })
      .catch(() => {
        setQuestions([]);
        setError('Failed to fetch');
      });
  }, [category]);

  return (
    <div>
      <h2>Find Questions by Category:</h2><br/>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px', color: '#842A3B', position: 'relative',border:'2px solid #842A3B', borderRadius:'5px', padding:'5px '}}>
          <input
          
            type="radio"
            value="Java"
            checked={category === 'Java'}
            onChange={(e) => setCategory(e.target.value)}
          />
          Java
        </label>
        <label style={{ marginRight: '20px', color: '#842A3B', position: 'relative',border:'2px solid #842A3B', borderRadius:'5px', padding:'5px '}}>
          <input
            type="radio"
            value="SQL"
            checked={category === 'SQL'}
            onChange={(e) => setCategory(e.target.value)}
          />
          SQL
        </label>
        <label style={{ marginRight: '20px', color: '#842A3B', position: 'relative',border:'2px solid #842A3B', borderRadius:'5px', padding:'5px '}}>
          <input
            type="radio"
            value="HTML"
            checked={category === 'HTML'}
            onChange={(e) => setCategory(e.target.value)}
          />
          HTML
        </label>

        <label style={{ marginRight: '20px', color: '#842A3B', position: 'relative',border:'2px solid #842A3B', borderRadius:'5px', padding:'5px '}}>
          <input
            type="radio"
            value="CSS"
            checked={category === 'CSS'}
            onChange={(e) => setCategory(e.target.value)}
          />
          CSS
        </label>

        <label style={{ marginRight: '20px', color: '#842A3B', position: 'relative',border:'2px solid #842A3B', borderRadius:'5px', padding:'5px '}}>
          <input
            type="radio"
            value="JavaScript"
            checked={category === 'JavaScript'}
            onChange={(e) => setCategory(e.target.value)}
          />
          JavaScript
        </label>
        
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}

export default QuestionByCategory;
