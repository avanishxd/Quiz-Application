import React, { useState } from 'react';
import AllQuestions from './AllQuestions'; 
import QuestionById from './QuestionById';
import QuestionByCategory from './QuestionByCategory';
import CreateQuestion from './CreateQuestion';
import UpdateQuestion from './UpdateQuestion';
import DeleteQuestion from './DeleteQuestion';
import Heading from './Heading';

function Homepage() {
  const [view, setView] = useState('');

  return (
    <div style={{ padding: "20px", color: "black" }}>
      <Heading/>
      <h1>Choose an option below:</h1>
      <br/>
      <div className="optionButtons">
        <button className="btnStyle" onClick={() => setView("create")}>Create Question</button>
        <button className="btnStyle" onClick={() => setView("all")}>View All Questions</button>
        <button className="btnStyle" onClick={() => setView("byId")}>Find by ID</button>
        <button className="btnStyle" onClick={() => setView("byCategory")}>Find by Category</button>
        <button className="btnStyle" onClick={() => setView("update")}>Update Question</button>
        <button className="btnStyle" onClick={() => setView("delete")}>Delete Question</button>
      </div>
      <br/><br/>
      {view === 'all' && <AllQuestions />}
      {view === 'byId' && <QuestionById />}
      {view === 'byCategory' && <QuestionByCategory />}
      {view === 'create' && <CreateQuestion />}
      {view === 'update' && <UpdateQuestion/>}
      {view === 'delete' && <DeleteQuestion/>}
    </div>
  );
}

export default Homepage;
