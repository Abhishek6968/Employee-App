import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export const Add = () => {
    const [employeeData, setEmployeeData] = useState({
        employeeID: '',
        name: '',
        designation: '',
        salary: '',
        department: '',
        location: ''
      });
   
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        if(location.state!=null){
            setEmployeeData({
                ...employeeData,
                employeeID: location.state.data.employeeID,
                name: location.state.data.name,
                designation: location.state.data.designation,
                salary: location.state.data.salary,
                department: location.state.data.department,
                location: location.state.data.location
            })

                   
            } 
    },[location.state]);
function handleChange(event){
    const {value,name}=event.target;
    setEmployeeData((prevData)=>{
        return{
            ...prevData,
            [name]:value
        }
        
    })
}


function sendData(){
    if (location.state!=null){
        axios.put('http://localhost:4002/home/update/'+location.state.data._id,employeeData)
        .then((res)=>{
            alert('Data Updated');
            navigate('/');
        })
        .catch((err)=>console.log(err))
    }
    else {
        axios.post('http://localhost:4002/home/add',employeeData)
        .then((res)=>{
            alert('Data Added');
            navigate('/');
        })
        .catch((err)=>console.log(err))
    }
}


  return (
    <div>
    
    <TextField
          id="outlined-basic"
          label="Employee ID"
          variant="outlined"
          onChange={handleChange}
          name="employeeID"
          value={employeeData.employeeID}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          name="name"
          value={employeeData.name}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Designation"
          variant="outlined"
          onChange={handleChange}
          name="designation"
          value={employeeData.designation}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Salary"
          variant="outlined"
          onChange={handleChange}
          name="salary"
          value={employeeData.salary}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Department"
          variant="outlined"
          onChange={handleChange}
          name="department"
          value={employeeData.department}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={handleChange}
          name="location"
          value={employeeData.location}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={sendData} sx={{ mt: 2 }}>
          Submit
        </Button>
    </div>
  )
}
