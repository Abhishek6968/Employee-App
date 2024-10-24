import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4002/home/view')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  },[]);
  function handleDelete(_id){
    return(
      axios.delete(`http://localhost:4002/home/delete/${_id}`)
      .then((res)=>{
        setData(data.filter(item=>item._id!==_id));
        window.location.reload();

      })
      .catch((err)=>{
        console.log('Error deleting the data',err);
      })
    )
  };
  const navigate=useNavigate()
  function handleEdit(data){
    return( navigate('/Add',{state:{data}})

    )
  }
  return (
    <div>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Desgination</TableCell>
            <TableCell>Salary</TableCell>

            <TableCell>Department</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Actions</TableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.employeeID}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>  <button onClick={()=>handleEdit(row)} >Edit</button> 
              <button onClick={() => handleDelete(row._id)}>Delete</button>  
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
