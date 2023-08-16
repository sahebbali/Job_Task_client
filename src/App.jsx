// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
// import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Singup from './pages/sing-up/singup';
import Faq from './pages/FAQ/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<Singup/>} />
         <Route path="/faq"  element={<Faq/>} />

      </Routes>
    </Router>
   
  )
}

export default App
