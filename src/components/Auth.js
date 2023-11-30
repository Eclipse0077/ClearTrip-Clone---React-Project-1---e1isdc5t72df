import React, { useState } from 'react';
import axios from 'axios';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function for user login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://academics.newtonschool.co/api/v1/bookingportals/login',
        { email, password }
      );
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Function for user registration
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'https://academics.newtonschool.co/api/v1/bookingportals/signup',
        { email, password }
      );
      
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="auth">
      <h2>Login or Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Auth;

