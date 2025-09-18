import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Categories from './pages/Categories';
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className='nav-right'>
          <Link to="/">Home</Link>|{" "}
          <Link to='/explore'>Explore</Link> |{" "}
          <Link to="/Categories">Categories</Link> |{" "}
        </div>

        <div className='nav-Left'>
          <Link to="/About" >About</Link>|{" "}
           <img src="/admin.png" alt="Login" className="login-icon" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Categories" element={<Categories />} />
     
      </Routes>
    </BrowserRouter>
  );
}
