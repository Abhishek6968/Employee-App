// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom';

// export const PrivateRoutes = () => {    
//     const token=localStorage.getItem('token');
//     let verifyUser=false;
//     if(token){
//         verifyUser=true;

//     }

//   return (
//     verifyUser?<Outlet/>:<Navigate to={'/'} />
//   )
// }
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  // Check if a valid token is stored in local storage
  const token = localStorage.getItem('token');

  // Set verifyUser based on the existence of a token
  const verifyUser = token ? true : false;

  // Render the Outlet component if authenticated, otherwise redirect to the login page
  return verifyUser ? <Outlet /> : <Navigate to="/" />;
};
