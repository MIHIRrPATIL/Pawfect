import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
