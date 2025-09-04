import './Login.css'
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/context"

// Login Page
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Handle login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // send login request to backend
      const res = await axios.post("http://localhost:5000/server/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // success: store user in context and localStorage
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/"); // redirect to home
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("Wrong username or password");
    }
  };
  return (
    <div className="login">
      <div className="loginCard">
      <div className="loginHeader">
      <span className="loginIcon">👤</span>
      <h2 className="loginHeading">Log In to Your Account</h2>
      <p className="loginSub">login to your account…</p>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <div className="passwordField">
        <input
          type={showPassword ? "text" : "password"}
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <span className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>👁</span>
        </div>
        <button className="loginButton" variant="info" type="submit" disabled={isFetching}>
          {isFetching ? "Loading..." : "Login"}
        </button>
        </form>
        <Link className="registerLink" to="/register">
          Register Now!
        </Link>
        </div>
    </div>
  )
}
