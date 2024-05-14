import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a3b726a0-962d-4ada-aaee-caba9c6ca08a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Custom CSS for the contact form */
            body {
              background-color: #f8f9fa;
              font-family: Arial, sans-serif;
            }
            .contact-form {
              background-color: #ffffff;
              border-radius: 10px;
              padding: 30px;
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            }
            .contact-form h2 {
              margin-bottom: 30px;
              text-align: center;
            }
            .contact-form label {
              font-weight: bold;
            }
            .contact-form textarea {
              resize: none;
            }
            /* Adjust map size */
            #map-container {
              height: 400px;
              border-radius: 10px;
              overflow: hidden;
            }
            /* WhatsApp and Facebook buttons */
            .contact-btn {
              display: inline-block;
              margin-right: 10px;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              color: #ffffff;
              text-decoration: none;
              transition: all 0.3s ease;
            }
            .contact-btn i {
              margin-right: 5px;
            }
            .whatsapp-btn {
              background-color: #25d366;
            }
            .whatsapp-btn:hover {
              opacity: 0.8;
            }
            .facebook-btn {
              background-color: #1877f2;
            }
            .facebook-btn:hover {
              opacity: 0.8;
            }
            .send-btn {
              background-color: #007bff;
            }
            .send-btn:hover {
              opacity: 0.8;
            }
            .call-btn {
              background-color: #28a745;
            }
            .call-btn:hover {
              opacity: 0.8;
            }
            @media (max-width: 768px) {
              .contact-form {
                padding: 20px;
              }
              .contact-btn {
                margin-top: 10px;
                display: block;
                width: 100%;
                text-align: center;
              }
              .navbar-toggler {
                z-index: 9999; /* Ensure the navbar toggle button appears above other elements */
              }
            }
            /* Navbar styles */
            .navbar-nav > li > a:hover {
              color: #007bff !important;
            }
          `,
        }}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            {/* Google Map */}
            <div id="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.528697553981!2d87.26097397493888!3d26.66356857075399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d001e8eca5b%3A0xe4fd30533fae8762!2sFusion%20SPA!5e0!3m2!1sen!2snp!4v1715698086531!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-md-6">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Which service do you want ..."
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2" target="alt">
                  Send
                </button>
                <a href="tel:+9779804661942" className="contact-btn call-btn mr-2">
                  <i className="fas fa-phone-alt" /> Call Now
                </a>
                <a href="https://wa.me/+9779804661942" className="contact-btn whatsapp-btn mr-2" target="alt">
                  <i className="fab fa-whatsapp" /> WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558616213240" className="contact-btn facebook-btn mr-2" target="alt"
                >
                  <i className="fab fa-facebook" /> Facebook
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
