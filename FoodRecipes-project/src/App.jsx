import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Categories from './pages/Categories';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="/About">About</Link>|{" "}
        <Link to="/Categories">Categories</Link> |{" "}
    
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Categories" element={<Categories />} />
     
      </Routes>
    </BrowserRouter>
  );
}
