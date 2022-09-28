
import './App.css';
import Navbar from '../src/components/navbar';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from '../src/components/Footer';
import Signup from './components/signup';
import Privatecomponent from './components/privatecomponent';
import Login from './components/login';

function App() {
  return (
    <div className="App">
     <h1>E- Dashboard</h1> 
      <header className="App-header">
        <BrowserRouter>
       <div><Navbar /> </div> 
        <Routes>
          <Route element={<Privatecomponent/>}>
          <Route path="/home" element = {<h1>home component</h1>}></Route>
          <Route path="/update" element = {<h1>Product update component</h1>}></Route>
          <Route path="/add" element = {<  h1>Product add component</h1>}></Route>
          <Route path="/profile" element = {<h1>Product profile component</h1>}></Route>
          <Route path="/logout" element = {<h1>Product logout component</h1>}></Route>  
          </Route>
          <Route  path="/signup" element = {<Signup />}></Route>
          <Route  path="/login" element = {<Login />}></Route>
        </Routes>
        </BrowserRouter>
        <Footer />
      
      </header>

    </div>
  );
}

export default App;
