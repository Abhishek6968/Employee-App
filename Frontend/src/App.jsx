import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Login } from './Components/Login'
import { Home } from './Components/Home'

import {Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App
