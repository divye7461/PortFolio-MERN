import React, { useEffect, useState } from "react";
import './Service.css'
const ServicePage = () => {
    const [services, setServices] = useState("");

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/data/service", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setServices(data.msg); 
                }
            } catch (error) {
                console.log("Error in getting services data", error);
            }
        };
        fetchServices();
    }, []);

    return (
        <ul>
            {services.map((service, index) => (
                <li key={index}>
                    <h4>{service}</h4>
                </li>
            ))}
        </ul>
    );
};

export default ServicePage;
