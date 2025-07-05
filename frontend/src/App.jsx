import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/components/Login'
import UpdateNews from './UpdateNews';
import Home from './pages/Home'
import Career from './pages/Career'
import News from './pages/News'
import AKTU from './pages/AKTU'
import NavBar from './pages/components/common/NavBar'
import Footer from './pages/components/common/Footer'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Aktuprep" element={<AKTU />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updatenews" element={<UpdateNews />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App