
  import React from 'react';
  import { Link,useNavigate} from 'react-router-dom'; 
  
  
  const HomePage: React.FC = () => {
    const navigate=useNavigate()
  const handleLoginClick=() =>{
    
    console.log("You are on Login Page!")
    navigate('/Login');
    
  };
  
    return (
      <div>

          <button onClick={handleLoginClick}>Login</button>
        <>
        <Link to="/ProductList">
          <button>Product</button>
        </Link></>
        <h1>Welcome to the HomePage of the website!</h1>
        <p>This is Home Page</p>
        
      </div>
    );
  };

  export default HomePage;






