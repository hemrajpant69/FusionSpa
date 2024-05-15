import React from "react";
import about from './img/IMG_20240515_182408.jpg';

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
            </div>
        </>
    );
};

export default About;
