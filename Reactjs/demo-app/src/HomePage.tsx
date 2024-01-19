import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("You are on Login Page!")
    navigate('/Login');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/Login');
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/Login');
    }
  }, [navigate]);

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
     
      <>
        <Link to="/ProductList">
          <button>Product</button>
        </Link>
      </>
      <button onClick={handleLogout}>Logout</button>
      <h1>Welcome to the HomePage of the website!</h1>
      <p>This is Home Page</p>
    </div>
  );
};

export default HomePage;
