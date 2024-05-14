import React from "react";
import home from './img/home.jpg'

const Home = () => {
    return (
        <>
        <p>
            <h1>
                ThIS IS HOmePage
            </h1>
        </p>
            <div>
                <img src={home} alt="Home" 
                    className="img-fluid rounded shadow"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
            </div>
        </>
    );
};

export default Home;
