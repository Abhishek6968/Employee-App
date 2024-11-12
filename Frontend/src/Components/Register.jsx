import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const [user, setUser] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const updateUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const register = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const res = await axios.post('http://localhost:4002/user/register', user);
      alert(res.data.message); // Inform user of successful account creation
      navigate('/'); // Redirect to login page after successful registration
    } catch (err) {
      console.error(err);
      // Check if response contains a message and alert the user
      const errorMsg = err.response?.data?.message || 'Please try again.';
      alert(errorMsg);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        placeholder="username" 
        name="name" 
        value={user.name} 
        onChange={updateUser} 
      /><br/>
      <input 
        type="password" 
        placeholder="password" 
        name="password" 
        value={user.password} 
        onChange={updateUser} 
      /><br/>
      <button onClick={register}>Register</button>
    </div>
  );
};
