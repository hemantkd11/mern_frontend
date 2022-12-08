import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Image  from '../image/college.jpg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                
                <a className="navbar-brand" href="#">
                    {/* <img src={Image} alt="Image"/> */} Navbar
                    </a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
               
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nLinkv-link" to="/">Home </Link>
                        </li>
                        <li className="nLinkv-item">
                            <Link className="nLinkv-link" to="/about">About</Link>
                        </li>
                        <li className="nLinkv-item">
                            <Link className="nLinkv-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nLinkv-item">
                            <Link className="nLinkv-link" to="/login">Login</Link>
                        </li>
                        <li className="nLinkv-item">
                            <Link className="nLinkv-link" to="/signup">Registration</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          
        </>
    )
}
export default Navbar