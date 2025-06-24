import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/" className="navbar_logo">
                Router
            </a>
            <ul>
               
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contact</NavLink>
                </li>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar
