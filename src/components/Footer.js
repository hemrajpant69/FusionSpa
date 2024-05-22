import React from 'react';

const Footer = () => {
 
  return (
    <>
      <div className="container my-5">
        <footer className={`text-center text-lg-start `}>
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-4 `}>Fusion Spa</h5>
                <p>
                  
Nestled in a serene corner of the city, FusionSpa is a haven of relaxation and rejuvenation. Our spa is renowned for seamlessly blending ancient healing traditions with contemporary wellness practices. With a commitment to holistic wellness,
 FusionSpa offers a range of services designed to restore balance and harmony to the mind, body, and spirit.
                </p>
                <p >
                From the soothing Whole Body Massage to the therapeutic Ayurvedic Oil Massage, each treatment is crafted to provide a transformative experience. Located in the heart of Itahari, 
                FusionSpa invites you to embark on a journey of self-discovery and renewal in a tranquil oasis amidst the bustle of the city.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <ul className={`fa-ul`} style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="ms-2">Itahari 06 panchamukhi chowk</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope" />
                    </span>
                    <span className="ms-2">spafusionspa2055@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone" />
                    </span>
                    <span className="ms-2">9804661942</span>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={`text-uppercase mb-4 `}>Opening hours</h5>
                <table className={`table text-center `}>
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>7 days in a week:</td>
                      <td>9am - 9pm</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className={`text-center p-3 `}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright :  
            <a  href="https://www.facebook.com/hptech69">
              HpTech
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};
//hii

export default Footer;