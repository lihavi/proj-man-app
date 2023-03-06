import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:9292/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:9292/projects/${id}`, {
        method: 'DELETE',
      });
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="projects-container">
      <h1>List of Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-date">Created on {project.created_at}</p>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
