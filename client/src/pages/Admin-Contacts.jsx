import React, { useEffect } from "react";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import { getAllContacts } from "../../../server/controllers/admin-controller";
const AdminContacts=()=>{
    const {authToken}=useAuth();
    const [contacts,setContacts]=useState([])
    const getContactMsgs=async ()=>{
        try {
            const response=await fetch('http://localhost:5000/api/admin/contacts',{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            });
 
            if(response.ok){
               const contactData=response.json();
               setContacts(contactData);
            }
            else{
                console.log("Contact Msgs Not fetched Properly");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getContactMsgs();
    },[])

    const deleteContact=async (id)=>{
          try {
            const response=await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authToken
                }
            })
            const data=response.json();
            console.log(data);
            if(response.ok){
                toast.success("Contact Deleted Successfully");
                getAllContacts();
            }
            else{
                toast.error("Contact Not Deleted");
            }
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <>
          {
            contacts.map((contact,index)=>{
                const {username,email,message,_id}=contact;
                return (
                    <nav>
                        <h4>{username}</h4>
                        <h4>{email}</h4>
                        <h4>{message}</h4>
                        <button onClick={()=>deleteContact(_id)}>Delete</button>
                    </nav>
                )
            })
          }
        </>
    )
}
export default AdminContacts;