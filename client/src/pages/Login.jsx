import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { toast,Bounce } from "react-toastify"
const LoginPage=()=>{
     
    const navigate=useNavigate();
    const authContext=useAuth();

    const [user,setUser]=useState({
        email:"",
        password:"",
    });
    
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
            const response=await fetch(`http://localhost:5000/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            })

            //Navigating to home page
            
            const res_data=await response.json();

            console.log("Response From Server",res_data); // msg,token etc.. aayega iss response mei

            if(response.ok){
                toast('Login Successful')
                //Store the token in local storage
                
               const storeValue=authContext.storeTokenInLocalStorage(res_data.token);

                setUser({
                    email:"",
                    password:""
                })
                navigate('/');
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message,{
                    position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
                });
            }
            console.log(response);
        }
        catch(error){
            console.log(error);
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
                            alt="Login kro" 
                            width="500" 
                            height="500"/>
                        </div>

                        {/* Registration form */}

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>

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
                                    Login Now
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

export default LoginPage;