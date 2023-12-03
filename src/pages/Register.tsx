import React, { useState } from 'react';

//import FormatPaintIcon from '@mui/icons-material/FormatPaint.js';
//import { Visibility, VisibilityOff } from '@mui/icons-material';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Validate username and password
    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
      // Perform further actions like sending data to the server for authentication
    } else {
      alert('Please enter username and password');
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
   // <FormatPaintIcon></FormatPaintIcon>>
    <form onSubmit={handleSubmit} action="/check" method="POST">
      <h1>Login</h1>
      <div>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type={password ? 'text' : 'password'}
          id="password"
          placeholder='Password'
          //value={password}
           onChange={handlePasswordChange}
        />
        {/* {showPassword ? (
          <VisibilityOff onClick={togglePasswordVisibility} />
        ) : (
          <Visibility onClick={togglePasswordVisibility} />
        )} */}
      </div>
      <div className='center'>
      <button type="submit" className="submit btn btn-light">
        Register
      </button></div>
    </form>
  );
};

export default LoginForm;
