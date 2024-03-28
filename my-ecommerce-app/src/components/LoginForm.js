import React, { useState } from 'react';

const LoginForm = (switchToSignup) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim() !== '' && password.trim() !== '') {
      console.log('Logging in...');
    } else {
      console.log('Please enter your username and password.');
    }
};

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={switchToSignup}>Switch to Signup</button>
        </form>
  );
};

export default LoginForm;