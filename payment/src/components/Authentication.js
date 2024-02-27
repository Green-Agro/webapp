import React, { useState } from 'react';
import axios from 'axios';
import './authentication.css';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    try {
      const response = await axios.post('http://164.160.187.141:7000/api/iam/la/deactivate', {
        username,
        password,
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      // Handle error states or display error messages to the user
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form className="login" onSubmit={handleLogin}>
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
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
            <input type="submit" value="Log In" />
            <div className="links">
              <a href="#">Forgot password</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;