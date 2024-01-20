
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const username: string = 'ayush12@gmail.com';
  const password: string = 'ayush123';

  const navigate = useNavigate();
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    if (user === username && pass === password) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/HomePage");
    } else {
      alert('Username or Password is Incorrect');
    }
  }

  return (
    <div>
      <div style={{ marginTop: 50, marginLeft: 100 }}>
        <h2>Welcome to Login</h2>
        <table>
          <tr>
            <th><label>User Name:</label></th>
            <th><input onChange={(e) => setUser(e.target.value)} /><br /></th>
          </tr>
          <tr>
            <th><label>Password:</label></th>
            <th><input type='password' onChange={(e) => setPass(e.target.value)} /><br /></th>
          </tr>
        </table>
        <button style={{ margin: 20 }} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
export default Login;
