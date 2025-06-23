import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // <-- Add this if not already there


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      navigate('/tasks');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
     <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column' },
  input: { padding: '10px', margin: '10px 0' },
  button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none' }
};

export default Login;
