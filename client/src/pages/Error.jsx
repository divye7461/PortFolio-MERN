import React from "react";
import {NavLink} from "react-router-dom"

const ErrorPage=()=>{
    
    return (
        <>
         <section id="error-page">
            <div className="container-content">
                <h2 className="header"></h2>
                <h4>
                    Sorry! Page Not Found
                </h4>
                <p>
                    An issue is being reported
                </p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
            </div>
         </section>
        </>
    )
}

export default ErrorPage;