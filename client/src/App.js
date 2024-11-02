import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Pages
import Home from './pages/Home';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login'
import Registe from './pages/Registe'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;