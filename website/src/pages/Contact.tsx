// Contact.tsx

import "./Contact.css"; // Import the custom CSS file
import logo from "../assets/C2A_LOGO.png"; // Replace 'your-logo.png' with the path to your logo image

function Contact() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase mb-4">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <img src={logo} alt="Logo" className="logo mr-3" />
              <form className="custom-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Your Message"
                        rows={6}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-xl text-uppercase"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
