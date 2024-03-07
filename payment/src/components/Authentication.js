import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './authentication.css';
import Illustration from '../assets/Illustration.png';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    try {
      const response = await axios.post('https://api.lersha.com/api/iam/la/deactivate', {
        username,
        password,
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        toast.success('Login Successful', { autoClose: 3000 });
      }
    } catch (error) {
      console.log(error);
      toast.error('Error occurred. Please try again.',error, { autoClose: 3000 });
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
      <ToastContainer />
      {isLoggedIn ? (
        <div className="success">
          <div>   <img src={Illustration} alt="sucessful"/> </div>
          <h2>you have  deactivated your account sucessfuly!</h2>
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