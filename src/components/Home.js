import React from "react";
import { Link } from 'react-router-dom';

import "./styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Welcome to Project Management App!</h1>
        <p>  Keep track of your projects and collaborate with your team.</p>
        <Link to="/projects" className="btn btn-primary">
          See Available Projects
        </Link>
      </div>
      <div className="home-features">
        <div className="feature">
       
          <h2>Task Lists</h2>
          <p> Create and manage task lists to stay on top of your work.</p>
        </div>
        <div className="feature">
         
          <h2>Deadline Reminders</h2>
          <p> Set reminders for deadlines and never miss a due date again.</p>
        </div>
    
      </div>
    </div>
  );
}


export default Home;
