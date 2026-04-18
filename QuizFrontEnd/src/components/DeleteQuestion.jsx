import React, { useState } from 'react';
import API_BASE_URL from '../constants';

function DeleteQuestion() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  function handleDelete() {
    if (!id) {
      setMessage("Please enter an ID.");
      return;
    }
    fetch(`${API_BASE_URL}/question/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.text();
      })
      .then((msg) => setMessage(msg))
      .catch(() => setMessage("No question found with that ID."));
  }

  return (
    <div>
      <h2>Enter ID:</h2>
      <br />
      <input
        className="inputStyle"
        type="number"
        value={id}
        placeholder="Enter question ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btnStyle" onClick={handleDelete}>
        Delete
      </button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteQuestion;
