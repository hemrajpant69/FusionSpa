import React from "react";
import home from './img/home.jpg'
const About=()=>{
    return(
        <>
        <div>
            <p>This is AboutUS</p>
                <img src={home} alt="Home" 
                    className="img-fluid rounded shadow"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
            </div>
        
        
        
        
        </>


    )


}
export default About;