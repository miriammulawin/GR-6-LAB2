import { useState } from 'react'

import Header from './Header.jsx'
import Home from './Home.jsx'
import MissionVision from './Mission_Vision.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'
import About from './ABout.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mission-vision" element={<MissionVision />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App
