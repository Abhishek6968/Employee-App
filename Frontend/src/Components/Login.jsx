import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [user, setUser] = useState({ name: '', password: '' });
  
  const updateUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  
  const navigate = useNavigate();

  const check = (event) => {
    axios.post('http://localhost:4002/user/login', user)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.usertoken) {
          localStorage.setItem('token', res.data.usertoken);
          navigate('/home');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Login failed. Please try again.');
      });
  };
  const register=()=>{
    navigate('/reg');
  }

  return (
    <div>
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
      <button onClick={check}>Login</button>
      <button onClick={register}>Register</button>

    </div>
  );
};
