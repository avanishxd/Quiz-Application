import React from 'react';

function QuestionTemplate({ question, setQuestion, handleSubmit, buttonLabel, showIdInput, handleIdChange }) {
  return (
    <div style={{ backgroundColor: '#E6D8C3', padding: '20px', borderRadius: '8px', display: 'inline-block' }}>
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      {showIdInput && (
        <>
          <h4>Enter ID:</h4>
          <input
            type="number"
            name="id"
            placeholder="Question ID"
            value={question.id || ''}
            onChange={handleIdChange}
            required
          /><br /><br />
        </>
      )}
      <br /><br /><br />
      <h4>Enter Question:</h4>
      <textarea
        name="question"
        placeholder="Enter question"
        value={question.question}
        onChange={e => setQuestion({ ...question, question: e.target.value })}
        required
        rows={3}
        cols={60}
        maxLength={250}
        style={{ resize: "vertical", width: "500px", boxSizing: "border-box", overflowWrap: "break-word" }}
      /><br /><br /><br />
      <h4>Select Question Category:</h4>
      <select
        style={{backgroundColor:'#a77850ff', padding:'10px 20px', color:'white', fontWeight:'bold', textAlign:'center'}}
        name="category"
        value={question.category}
        onChange={e => setQuestion({ ...question, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        <option value="Java">Java</option>
        <option value="SQL">SQL</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select><br /><br /><br />
      <h4>Enter Options:</h4>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontWeight: "1000", textAlign: "center" }}>
        <input
          type="text"
          name="option1"
          placeholder="Option 1"
          value={question.option1}
          onChange={e => setQuestion({ ...question, option1: e.target.value })}
          required
          style={{ width:"350px", marginBottom:"7px" }}
        />
        <input
          type="text"
          name="option2"
          placeholder="Option 2"
          value={question.option2}
          onChange={e => setQuestion({ ...question, option2: e.target.value })}
          required
          style={{ width:"350px", marginBottom:"7px" }}
        />
        <input
          type="text"
          name="option3"
          placeholder="Option 3"
          value={question.option3}
          onChange={e => setQuestion({ ...question, option3: e.target.value })}
          required
          style={{ width:"350px", marginBottom:"7px" }}
        />
        <input
          type="text"
          name="option4"
          placeholder="Option 4"
          value={question.option4}
          onChange={e => setQuestion({ ...question, option4: e.target.value })}
          required
          style={{ width:"350px", marginBottom:"7px" }}
        />
      </div>
      <br /><br />
      <h4>Enter Correct Answer:</h4>
      <input
        type="text"
        name="answer"
        placeholder="Correct Answer"
        value={question.answer}
        onChange={e => setQuestion({ ...question, answer: e.target.value })}
        required
      /><br /><br />
      <h4>Select Difficulty:</h4>
      <select
        style={{backgroundColor:'#a77850ff', padding:'10px 20px', color:'white', fontWeight:'bold', textAlign:'center'}}
        name="difficulty"
        value={question.difficulty}
        onChange={e => setQuestion({ ...question, difficulty: e.target.value })}
        required
      >
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select><br /><br />
      <button type="submit" style={{padding:'10px 20px', backgroundColor:'#842A3B', color:'white'}}>{buttonLabel}</button>
    </form>
    </div>
  );
}

export default QuestionTemplate;
