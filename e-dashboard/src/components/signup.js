import React from "react";
import "../App.css";
import { useState,useEffect  } from "react";
import { useNavigate} from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('User');
    if (auth) {
        navigate('/')
    }
}, [navigate])
  

  const registerUser = async () => {
    console.log(name, email, password);
    let response = await fetch("http://localhost:2000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    response = await response.json();
    console.log(response);
    // localStorage.setItem("User", JSON.stringify(response.data));
    // localStorage.setItem('token',JSON.stringify(response.auth))
    // navigate("/");

  };

  return (
    <div>
      <h3>Registration Page</h3>
      <form>
        <input
          className="input-box"
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input-box"
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="input-box"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="signup-btn" type="button" onClick={registerUser}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
