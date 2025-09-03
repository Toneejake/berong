import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import KidsZone from './components/kids/KidsZone';
import AdultsZone from './components/adults/AdultsZone';
import BFPZone from './components/bfp/BFPZone';
import Home from './components/Home';

function App() {
 return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<KidsZone />} />
          <Route path="/adults" element={<AdultsZone />} />
          <Route path="/bfp" element={<BFPZone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
