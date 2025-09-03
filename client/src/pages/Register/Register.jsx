import './Register.css'
import Button from 'react-bootstrap/esm/Button'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Register() {
  const url = "http://localhost:5000/server"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(url + "/auth/register", {
        username,
        email,
        password,
        isAdmin,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
        <div className="registerWrapper">
        <span className="registerTitle">
            Register
        </span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
            <input type="text" placeholder='Enter your Username' className='registerInputUser' onChange={(e) => setUsername(e.target.value)} required/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email' className='registerInput' onChange={(e) => setEmail(e.target.value)} required/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' className='registerPassword' onChange={(e) => setPassword(e.target.value)} required/>
            <label className="adminCheckbox">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            Register as Admin
          </label>
            <Button className="registerButton" variant="success" type="submit">Register Now!</Button>
        </form>
        <Button className='loginButton' variant='info' as={Link} to="/login">
            Login
        </Button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    </div>
  )
}