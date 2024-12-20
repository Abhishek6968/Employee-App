import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2e3b55' }}> {/* Custom background color */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}
          >
            Employee Application
          </Typography>
          <Link to={'/home'}><Button color="inherit" sx={{ fontWeight: 'bold', mx: 1 }}>Home</Button></Link>
          <Link to={'/add'}><Button color="inherit" sx={{ fontWeight: 'bold', mx: 1 }}>Add</Button></Link>

          <Link to={'/'}><Button color="inherit" variant="outlined" sx={{ fontWeight: 'bold', borderColor: 'white', mx: 1 }}>Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>  )
}
