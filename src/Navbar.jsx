import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">ZSDECODE</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link"  to="/" exact activeClassName={"menu-active"} aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/service" exact activeClassName="menu-active">Service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about" exact activeClassName="menu-active">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" exact activeClassName="menu-active" >Contact</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>                                    
                </div>         
            </div>
        </div>
        </>
    );
};

export default Navbar;