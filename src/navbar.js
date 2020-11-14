import { FaAngrycreative } from "react-icons/fa";
import './styles/navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="App">
            <nav>
                <div className="logo-container" ><FaAngrycreative className="logo" /></div>
                <ul>
                    <Link to="/" className="nav-links"><li>Home</li></Link>
                    <Link to="/about" className="nav-links"><li>About</li></Link>
                    <Link to="/resume" className="nav-links"><li>Resume</li></Link>
                    <Link to="/contact" className="nav-links"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
