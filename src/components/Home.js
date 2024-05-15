import React from "react";
import home from './img/home.jpg';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-container">
                            <h1 className="display-4 text-primary mb-4">Welcome to FusionSpa</h1>
                            <p className="lead">Escape to a world of relaxation and rejuvenation at FusionSpa. Our serene ambiance and expert therapists are here to help you unwind and refresh.</p>
                            <p className="lead">Indulge in our luxurious spa treatments and experience pure bliss. From soothing massages to rejuvenating facials, we have everything you need to pamper yourself.</p>
                            <p className="lead">Book your appointment today and embark on a journey to total well-being. Your oasis of calm awaits.</p>
                            <button type="button" className="btn btn-primary btn-lg mt-4">Book Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={home} alt="Home" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
