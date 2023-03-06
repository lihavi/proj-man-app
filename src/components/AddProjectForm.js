import React, { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = { name, title, description };

    fetch('http://127.0.0.1:9292/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject)
    })
    .then(response => response.json())
    .then(data => {
      onAddProject(data);
      setName('');
      setTitle('');
      setDescription('');
    })
    .catch(error => console.error(error));
  };

  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} required />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;
