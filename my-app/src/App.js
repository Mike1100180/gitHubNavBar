import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import End from './End';
import Info from './Info';
import BioData from './BioData';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/end" element={<End />} />
          <Route path="/info" element={<Info />} />
          <Route path="/BioData" element={<BioData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
