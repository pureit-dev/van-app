import { Link } from "react-router-dom";
import './Navbar.style.css'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link className="navbar-home-link" to="/">#VANLIFE</Link>
            <div>
                <Link className="navbar-links" to="/about">About</Link>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  