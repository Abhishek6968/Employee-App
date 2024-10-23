import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Home = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4002/home/view')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  },[]);
  return (
    <div>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Desgination</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Location</TableCell>
          
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
