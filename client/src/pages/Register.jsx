import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import './Register.css';
const RegisterPage=()=>{
    
    const navigate=useNavigate();
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    console.log(user);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        //dynamic daalna pdega name ko
        setUser({
            ...user,
            [name]:value,
        })
    }


    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        const response=await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })

        const res_data=await response.json();

        //console.log("Response From Server",res_data.extraDetails); // msg,token etc.. aayega iss response mei
            //Store the token in local storage
        
            if(response.ok){
            
            //storeTokenInLocalStorage(res_data.token);

            localStorage.setItem("token",res_data.token);

            setUser({
                username:"",
                email:"",
                phone:"",
                password:"",
            });

            navigate('/login');
        }
        else{
            toast(res_data.extraDetails
                ? res_data.extraDetails
                : res_data.message 
            );
        }
        console.log(response);
    }
    catch(error){
        console.log("Register",error);
    }
    }
    
    return (
        <>
          <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="" 
                            alt="Register kro" 
                            width="500" 
                            height="500"/>
                        </div>

                        {/* Registration form */}

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter Your Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput} 
                                    />

                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter Your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}  
                                    />

                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Enter Your phone"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}  
                                    />


                                <label htmlFor="password">Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter Your password"
                                    id="password"
                                    required
                                    autoComplete="off" 
                                    value={user.password}
                                    onChange={handleInput} 
                                    />
                                </div>

                                <br />

                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
          </section>
        </>
    )
}

export default RegisterPage;