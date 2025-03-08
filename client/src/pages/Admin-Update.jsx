import React, { useEffect,useState } from "react";
import { useAuth } from "../context/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const defaultState=({
    username:"",
    email:"",
    phone:"",
});

const AdminUpdate=()=>{
    const [updateData,setUpdateData]=useState(defaultState);
    const params=useParams();
    const id=params.id;
    const {authToken}=useAuth();
    const getUserDataById=async ()=>{
        const response=await fetch(`http://localhost:5000/admin/users/${id}`,{
            method:"GET",
            headers:{
                Authorization:authToken
            }
        });
        if(response.ok){
        const userData=response.json();
        setUpdateData({
            username:userData.username,
            email:userData.email,
            phone:userData.phone,
        });
    }
    else{
        console.log("User Data Not fetched");
    }
    }

    useEffect(()=>{
        getUserDataById();
    },[])

    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUpdateData({
            ...updateData,
            [name]:value
        })
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await fetch(`http://localhost:5000/admin/users/update/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateData),
        });

        if(response.ok){
            toast.success("User Updated Successfully")
        }
        else{
            toast.error("Not updated");
        }
    }
    catch(error){
        console.log(error);
    }
    }
    return (
        <>
            <form>
                <label htmlFor="">Username</label>
                <input type="text"
                       name="username"
                       onChange={handleChange}
                       value={updateData.username} 
                       required
                       autoComplete="off"/>

                <label htmlFor="">Email</label>
                <input type="text"
                       name="email"
                       onChange={handleChange}
                       value={updateData.email}
                       required
                       autoComplete="off" />       


                <label htmlFor="">Mobile</label>
                <input type="text"
                       name="phone"
                       onChange={handleChange}
                       value={updateData.phone}
                       required
                       autoComplete="off"/>                          
                
                <button onClick={handleSubmit}>Update</button>
            
            </form>
        </>
    )
}

export default AdminUpdate;