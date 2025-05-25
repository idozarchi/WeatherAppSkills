import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
