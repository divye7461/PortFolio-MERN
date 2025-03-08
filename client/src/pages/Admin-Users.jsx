import React,{useEffect,useState} from "react";
import { useAuth } from "../context/auth";
import {Link} from "react-router-dom"
import './Admin-Users.css'
const AdminUsers=()=>{
    const {authToken}=useAuth();
    const [users,setUsers]=useState([])
    const getAllUsersData=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            }
            )
            const data=await response.json();
            console.log(`users  ${data}`);
            setUsers(data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getAllUsersData();
    },[])

    //deleting the user

    const deleteUser=async (id)=>{
          const response=await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,
            {
                method:"DELETE",
                headers:{
                    Authorization:authToken,
                }
            }
          )

          const data=response.json();
          console.log(`users ${data}`);

          if(response.ok){
            getAllUsersData();
          }
    }

    return (
        <>
          {
            users.map((user,index)=>{
                return (
                <>
                <h2 key={index}>{user.username}</h2>
                <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                <button onClick={()=>deleteUser(user._id)}>Delete</button>
                </>
                )
            })
          }
        </>
    )
}
export default AdminUsers;