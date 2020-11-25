import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import './App.css';
import TripPackage from './Components/TripPackage/TripPackage';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';




function App() {
  return (
    <div className="App">
     
     
    <Router>



    <nav className="navbar navbar-expand-lg navbar-light bg-warning text-white">
  <a className="navbar-brand" href="#">MyTrip</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/tripPackage">Trip Packages</Link>
      </li>
    </ul>


    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>
   
  </div>
</nav>
{/* 
<Link to="/home">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link> */}


    <switch>
      <Route exact path="/home" component={Home} />
      <Route path="/tripPackage" component={TripPackage} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </switch>

    </Router>



    </div>
  );
}

export default App;
