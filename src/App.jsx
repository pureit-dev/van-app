
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './routes/Home/Home.route';
import About from './routes/About/About.route';
import Navbar from './components/Navbar/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
