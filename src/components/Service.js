import React from "react";
import service1 from './img/service1.jpg'
import service2 from './img/service2.jpg'
import service3 from './img/service3.jpg'
import service4 from './img/service4.jpg'



const Service = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <img
              src={service1}
              className="card-img-top"
              alt="Ayurvedic Massage"
            />
            <div className="card-body">
              <h5 className="card-title">🌿 Ayurvedic Massage 🌿</h5>
              <p className="card-text">
              Relax with our Ayurvedic Massage, a traditional healing treatment that helps calm your body and mind. Our skilled therapists use special techniques and natural oils to ease tension and promote overall well-being. Enjoy an hour of bliss for just 1500 rupees.


              </p>
              <a href="https://wa.me/+9779804661942" className="btn btn-primary" target="alt">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <img
              src={service2}
              className="card-img-top"
              alt="Dry Massage"
            />
            <div className="card-body">
              <h5 className="card-title">💆‍♀️ Dry Massage 💆‍♂️</h5>
              <p className="card-text">
              Recharge with our Dry Massage. It's a great way to loosen up and feel good. Our massage therapists will work on your muscles to help you feel refreshed in just 45 minutes. Only 1000 rupees!

</p>
              <a href="https://wa.me/+9779804661942" className="btn btn-primary" target="alt">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <img
              src={service3}
              className="card-img-top"
              alt="Oil Massage"
            />
            <div className="card-body">
              <h5 className="card-title">🌸 Oil Massage 🌸

</h5>
              <p className="card-text">
              Pamper yourself with our Oil Massage. It's super relaxing and smells amazing. Our therapists use gentle strokes and fragrant oils to help you feel calm and renewed. Just 1200 rupees for a whole hour!

</p>
              <a href="https://wa.me/+9779804661942" className="btn btn-primary" target="alt">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <img
              src={service4}
              className="card-img-top"
              alt="Moisturizer Massage"
            />
            <div className="card-body">
              <h5 className="card-title">🌊 Moisturizer Massage 🌊

</h5>
              <p className="card-text">
              Treat your skin to our Moisturizer Massage. It's like a big drink of water for your skin, leaving it soft and smooth. Our therapists will massage in moisturizing lotion to help you feel refreshed and hydrated. Only 1200 rupees!

</p>
              <a href="https://wa.me/+9779804661942" className="btn btn-primary" target="alt">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
