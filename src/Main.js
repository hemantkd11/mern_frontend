import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import Signup from './components/Registration';
import Login from './components/Signin';
import Errorpage from './components/Errorpage';
import Record from './components/Records'
function Main() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} /> 
        <Route path="/error" element={<Errorpage />} />
        <Route path="/record" element={<Record/>}/>
      </Routes>
    
    
     </>

  );
}

export default Main;
