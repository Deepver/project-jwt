import React from 'react'
import {useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('User');
        if (auth) {
                navigate("/")
    }
    
}, [navigate])

    const handleLogin = async () => {
        
        let result = await fetch("http://localhost:2000/api/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if(JSON.stringify(result.user) == null ){alert("User not found ")}
        console.log(result);
        if (result) {
            localStorage.setItem('User', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        } else {
            alert("Please enter connect details")
        }
    
    }
        return (
            <div>
                <h1>Login</h1>
                <input type="text" className="input-box" placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" className="input-box" placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} className="btn" type="button">Login</button>
            </div>
        )

        }


export default Login




    
  
    
   
         
        