// import React, { useState } from 'react';
// import axios from 'axios';
// import './ForgotPassword.css'; // Use same styles as login/signup

// function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('http://localhost:5000/api/forgot-password', { email });
//       setMessage(`Reset link: ${res.data.resetLink}`);
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Error occurred');
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send Reset Link</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default ForgotPassword;
