
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import ProductList from './ProductList';

const App: React.FC = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
