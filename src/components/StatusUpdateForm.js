import React, { useState } from 'react';

function StatusUpdateForm({ projectId, onAddStatusUpdate }) {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`http://127.0.0.1:9292/projects/${projectId}/status-updates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
    .then(response => response.json())
    .then(data => {
      onAddStatusUpdate(data);
      setStatus('');
    })
    .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Status Update</h3>
      <label>
        Status:
        <input type="text" value={status} onChange={(event) => setStatus(event.target.value)} />
      </label>
      <button type="submit">Add Status Update</button>
    </form>
  );
}

export default StatusUpdateForm;
