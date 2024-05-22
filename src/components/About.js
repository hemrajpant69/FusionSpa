import React from "react";
import about from './img/IMG_20240515_182408.jpg';
import khemRaj from './img/khem.png'; 
import gyaneshwar from './img/gyanu.png';
import hemraj from './img/hemraj.jpg';

const About = () => {
    return (
        <>
            <div>
                <img 
                    src={about} 
                    alt="About" 
                    className="img-fluid rounded shadow"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
            </div>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-primary mb-4">Welcome to FusionSpa!</h2>
                        <p className="lead">Dive into a world of tranquility and indulgence at FusionSpa, where relaxation meets luxury. Nestled in the heart of serenity, our spa is a haven for those seeking a break from the hustle and bustle of daily life.</p>
                        <p className="lead">Step into our sanctuary and let your senses come alive. Feel the tension melt away as you're enveloped in the soothing ambiance of our serene surroundings.</p>
                        <p className="lead">Whether you're here for a quick escape or a full day of pampering, our expert therapists are dedicated to ensuring your experience is nothing short of extraordinary.</p>
                        <p className="lead">Indulge in our signature treatments, meticulously crafted to rejuvenate both body and soul. From our blissful Ayurvedic Massage to our invigorating Dry Massage, each session is tailored to your unique needs, leaving you feeling refreshed, revitalized, and utterly relaxed.</p>
                    </div>
                    <div className="col-md-6">
                        <p className="lead">But FusionSpa is more than just a place to unwind—it's a destination for holistic wellness. We believe in nurturing not only your body but also your mind and spirit. That's why we offer a range of wellness programs and holistic therapies designed to restore balance and harmony to your life.</p>
                        <p className="lead">And the best part? Our services are accessible to everyone, with prices starting at just <strong>1000 rupees</strong>. Because we believe that self-care should be a priority, not a luxury.</p>
                        <p className="lead">So why wait? Treat yourself to the ultimate spa experience at FusionSpa and embark on a journey to total relaxation and rejuvenation. Your blissful escape awaits.</p>
                        <p className="lead">Experience the FusionSpa difference today. Book your appointment now and let us pamper you like never before! 🌿💆‍♀️🌸</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2 className="text-primary mb-4">Board of Directors</h2>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img 
                            src={khemRaj} 
                            alt="Khem Raj Joshi" 
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <h5>Khem Raj Joshi (Founder)</h5>
                        <p>Contact Number: +977-9804661942</p>
                        <div className="mt-2">
                            <a href="https://www.facebook.com/khem.joshi.7758" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fab fa-facebook-f mr-2"></i> Get Connected
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img 
                            src={gyaneshwar} 
                            alt="Gyaneshwar Joshi" 
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <h5>Gyaneshwar Joshi (Advisor)</h5>
                        <div className="mt-2">
                            <a href="https://www.facebook.com/gyanupd.joshi" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fab fa-facebook-f mr-2"></i> Get Connected
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img 
                            src={hemraj} 
                            alt="Hemraj Pant" 
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <h5>Hemraj Pant (IT Manager)</h5>
                        <div className="mt-2">
                            <a href="https://www.facebook.com/imhemraj69" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fab fa-facebook-f mr-2"></i> Get Connected
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
