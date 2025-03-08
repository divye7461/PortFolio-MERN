import React, { useEffect } from "react";
import {Navigate} from "react-router-dom"
import { useAuth } from "../context/auth";


const LogOutPage=()=>{
    
    const {LogoutUser}=useAuth();

    useEffect(()=>{
        LogoutUser();
        console.log(localStorage.getItem('token'));
    },[LogoutUser])

    return (
       <Navigate to="/login" />
    )
}

export default LogOutPage;