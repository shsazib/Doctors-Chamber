import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Department from './Pages/Department/Department';
import Doctors from './Pages/Doctors/Doctors';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';

const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="department" element={<Department />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;