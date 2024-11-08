import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Pages
import Home from './pages/Home';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Registe from './pages/Registe';
import Admin from './pages/admin';

//STtyle
import './App.css';
import './index.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registe />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;