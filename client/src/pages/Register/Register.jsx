import './Register.css'
import Button from 'react-bootstrap/esm/Button'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const url = "http://localhost:5000/server"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(url + "/auth/register", {
        username,
        email,
        password,
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
            <input type="text" placeholder='Enter your Username' className='registerInputUser' onChange={(e) => setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email' className='registerInput' onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' className='registerPassword' onChange={(e) => setPassword(e.target.value)}/>
            <Button className="registerButton" variant="success" type="submit">Register Now!</Button>
        </form>
        <Button className='loginButton' variant='info'>
            Login
        </Button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    </div>
  )
}

/*import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
} */