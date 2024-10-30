import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [user,setUser]=useState({uname:"",pwd:""})
  const updateUser=(event)=>{
    const name=event.target.name;
    const pwd=event.target.value;
    setUser({...user,[name]:pwd})
  }
  
  const navigate=useNavigate();
    function check(){
      if(user.uname=='admin'&&user.pwd==123){
        navigate('/home')
      }
      else{
        alert('Invalid username or password')
      }
    }
  return (
    
    <div>
      <input type="text" placeholder="username" name='uname' value={user.uname} onChange={updateUser}/>
      <input type="password" placeholder="password" name='pwd' value={user.pwd} onChange={updateUser}/>
      <button onClick={check}>Submit</button>



    </div>
  )
}
