
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import ProductList from './ProductList';
import UpdateForm from './UpdateForms';
import AddDataPage from './AddData';

const App: React.FC = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/UpdateForms" element={<UpdateForm/>} />
        <Route path="/AddData" element={<AddDataPage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>   
    </div>
  );
};

export default App;
