import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Projects from './components/Projects';
import AddProjectForm from './components/AddProjectForm';
import MemberForm from './components/MemberForm';
import StatusUpdateForm from './components/StatusUpdateForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/addprojectform" element={<AddProjectForm />} />
        <Route path="/memberform" element={< MemberForm />}/>
        <Route path="/statusupdateform" element={< StatusUpdateForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
