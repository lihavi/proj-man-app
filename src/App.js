import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm';
import Projects from './components/Projects';
import AddProjectForm from './components/AddProjectForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/addprojectform" element={<AddProjectForm />} />
      </Routes>
    </Router>
  );
}

export default App;
