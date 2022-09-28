import React from 'react'; 
import {Link,useNavigate} from 'react-router-dom'
// import './App.css';


const Navbar = ()=>{
        const auth = localStorage.getItem('User');
        const navigate = useNavigate();
        const logout = () => {
            localStorage.clear();
            navigate('/signup')
        }
    return (
      <>
        <ul className="nav-ul">
          {auth ? 
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/update">Updateproduct</Link>
              </li>
              <li>
                <Link to="/add">Addproduct</Link>
              </li>
              <li>
                <Link to="/profile">Profileview</Link>
              </li>
              <li>

                <Link onClick={logout} to="/signup">
                  logout({JSON.parse(auth).name})
                </Link>
              </li>
            </>
           : 
            <>
              <li>
                <Link to="/signup">signup</Link>
              </li>

              <li>
                <Link to="/login">login</Link>
              </li>
            </>
          }
        </ul>
      </>
    );
}


export default Navbar
