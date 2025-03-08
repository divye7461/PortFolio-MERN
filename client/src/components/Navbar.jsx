import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from "../context/auth";
const MyNav=()=>{

    const { token }=useAuth();

    return (
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">Test Project</NavLink>
                </div>

                <nav>
                    <ul>
                       <li><NavLink to="/">Home</NavLink></li>
                       <li><NavLink to="/about">About</NavLink></li>
                       <li><NavLink to="/contact">Contact</NavLink></li>
                       <li><NavLink to="/service">Services</NavLink></li>
                       <li><NavLink to="/register">Register</NavLink></li>
                       {
                        (token==="") ? (
                        <li><NavLink to="/login">Login</NavLink></li>
                        )
                        :(
                        <li><NavLink to="/logout">Logout</NavLink></li>  
                        )
                       }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MyNav;