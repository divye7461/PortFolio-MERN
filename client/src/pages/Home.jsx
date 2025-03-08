import React from "react";
import './Home.css'
const HomePage=()=>{
   return (
      <>
       <main>
         <section className="section-hero">
             <div className="container grid grid-two-cols">
               <div className="hero-content">
                  <p>Hi I am Divye maloo</p>
                  <h1>Welcome to my Website</h1>
                  <p>
                     I am a skilled and enthusiastic programmer
                  </p>
                  <div className="btn btn-group">
                     <a href="/contact">
                     <button className="btn">Connect Now</button>
                     </a>
                     <a href="/services">
                     <button className="btn">Learn More</button>
                     </a>
                  </div>
               </div>

               {/* Images Part */}

               <div className="hero-image">
                  <img 
                  src="" 
                  alt="Coding Together"
                  width="400"
                  height="500" 
                  />
               </div>
             </div>
         </section>
       </main>
      </>
   )
}

export default HomePage;