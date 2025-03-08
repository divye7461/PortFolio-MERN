import React, { useState } from "react";
import { useAuth } from "../context/auth";
import './Contact.css'
const defaultContactForm={
    username:"",
    email:"",
    message:"",
}

const ContactPage=()=>{
    const [contact,setContact]=useState(defaultContactForm)
    const {user}=useAuth();

    const [userData,setUserData]=useState(true);

    
    if(userData && user){

        setContact({
            username:user.username,
            email:user.email,
            message:"",
        })

        setUserData(false);
    }


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setContact({
            ...contact,
            [name]:value
        })
    }
  
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response=await fetch(
                "http://localhost:5000/api/form/contact",{
                    method:"POST",
                    headers:{
                      'Content-Type':"application/json"
                    },
                    body:JSON.stringify(contact)
                }
            )

            if(response.ok){
                setContact(defaultContactForm);
                alert("Your Request Has Been Recorded");
            }
        } catch (error) {
            console.log("Error From Contact Data Sending...");
        }
    }


    return (
        <>
        <div className="heading">
            Contact Us
        </div>
        <div className="contact-page">
            {/* Contact Image */}
            <div className="contact-image">
                <img 
                src="" 
                alt="Contact For Services"
                width="400"
                height="500" />
            </div>
            {/* Contact Form */}
            <div className="contact-form">
                <form>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text"
                        name="username"
                        onChange={handleInput}
                        value={contact.username} 
                        placeholder="Enter Username" 
                        required
                        autoComplete="off"
                         />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email"
                        onChange={handleInput}
                        value={contact.email}
                        placeholder="Enter Email" 
                        required
                        autoComplete="off"
                        />
                    </div>
                    <div className="message-box">
                        <label htmlFor="message">Message</label>
                        <input 
                        type="text"
                        name="message"
                        onChange={handleInput}
                        value={contact.message} 
                        placeholder="Send A Message" 
                        required 
                        autoComplete="off"
                        />
                    </div>
                </form>
                <br />
                <button type="submit" onClick={handleSubmit}>
                    Send Data
                </button>
            </div>
        </div>

        <section>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.959360313757!2d77.21431027422285!3d28.630980084153443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0bc1cdc5ab%3A0xf3abaa7d39f2daeb!2sThe%20Belgian%20Waffle%20Co!5e0!3m2!1sen!2sin!4v1737204606947!5m2!1sen!2sin" width="100%" height="454" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">     
        </iframe>
        </section>
        </>
    )
}

export default ContactPage;