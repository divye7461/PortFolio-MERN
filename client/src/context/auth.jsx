import React,{createContext, useContext,useEffect,useState} from "react";

export const AuthContext=createContext(null);

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("UseAuth not used properly");
    }
    return authContextValue;
}

export const AuthProvider=(props)=>{
    
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [user,setUser]=useState("");
    const authToken=`Bearer ${token}`;

    const storeTokenInLocalStorage=(serverToken)=>{
      setToken(serverToken);
      return localStorage.setItem('token',serverToken);
    }
    
    //Logout Functionality
   
    const LogoutUser=()=>{
          setToken("");
          return localStorage.removeItem('token');
    }

    //JWT AUTHENTICATION:- to get currently logged in user data
    
    const userAuthentication=async ()=>{
        try {
          
          const response=await fetch(
            "http://localhost:5000/api/auth/user",{
              method:"GET",
              headers:{
                Authorization:authToken,
              }
            }
          )

          if(response.ok){
            const data=await response.json();
            console.log("Logged In User Data ->",data.userData);
            setUser(data.userData);
          }
        } catch (error) {
          console.log("Error Fetching user data");
        }
    }

    useEffect(()=>{
      userAuthentication();
    },[])

    return(
      <AuthContext.Provider value={{
        storeTokenInLocalStorage,
        LogoutUser,
        token,
        user,
        authToken
      }}>
        {props.children}
      </AuthContext.Provider>
    )
}