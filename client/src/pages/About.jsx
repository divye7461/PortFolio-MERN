import React,{useState} from "react";
import { useAuth } from "../context/auth";
import './About.css'
const AboutPage=()=>{

    const {user}=useAuth();

    return (
        <div className="about-container">
        <h1>Welcome, {user ? `${user.username} To My Website` : `To My Website`}</h1>

        <p>Information About Me:</p>
        <p>
            <li>I am an <span className="highlight">Avid Competitive Programmer</span> and love to solve real life problems</li>
            <li><span className="highlight">Technology Enthusiast</span> and love to research and learn about various new and upcoming technologies</li>
            <li>Expertise in Solving <span className="highlight">Complex Problems</span> By Forming Optimal Solutions</li>
        </p>

        <p>Achievements:</p>
        <p>
            <li>Pupil At CodeForces with a Highest Rating Of 1395</li>
            <li>3 Star Coder At CodeChef with a Highest Rating Of 1628</li>
            <li>Solved more than 400+ Problems on LeetCode and Highest Rating is 1701</li>
            <li>Solved more than 190+ Problems on GeeksForGeeks</li>
        </p>
    </div>
    )
}

export default AboutPage;