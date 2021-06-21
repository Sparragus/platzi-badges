import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from "../images/logo.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to ="/" className="Navbar__brand text-decoration-none text-light"  >
                        <img src={logo} alt="logo" className="Navbar__brand-logo" /> 
                        <span className="fw-light me-1">Conference</span>
                        <span className="fw-bold">badges</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar