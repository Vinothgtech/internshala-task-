import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskList from './components/TaskList';
// import ForgotPassword from './components/ForgotPassword';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskList />} />
       {/* <Route path="/forgot-password" element={<Forg-otPassword />} />     */}
         </Routes> 
    </Router>
  );
}

export default App;
