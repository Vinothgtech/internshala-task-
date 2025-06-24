import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // 💡 Create this CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login', { email, password });
      navigate('/tasks');
    } catch (error) {
      setMsg(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      
      {msg && <p className="error">{msg}</p>}

      {/* Forgot Password link */}
      <p className="forgot-link">
        {/* <Link to="/forgot-password">Forgot Password?</Link> */}
      </p>
        <p>
        Don't have an account?{' '}
        <Link to="/signup">
          <button className="signup-button">Signup</button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
