import React, { useState } from 'react';

function UserLogin({ setUser, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // API call and get JWT token
      // set user and store JWT token
      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        setUser({ email: data.email, token: data.token });
        localStorage.setItem('user', JSON.stringify({ email: data.email, token: data.token }));
        history.push('/');
      }
    } catch (error) {
     /*......*/
  }


}

export default UserLogin;
