import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import KidsZone from './components/kids/KidsZone';
import AdultsZone from './components/adults/AdultsZone';
import BFPZone from './components/bfp/BFPZone';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids" element={<KidsZone />} />
        <Route path="/adults" element={<AdultsZone />} />
        <Route path="/bfp" element={<BFPZone />} />
      </Routes>
    </div>
  );
}

export default App;
