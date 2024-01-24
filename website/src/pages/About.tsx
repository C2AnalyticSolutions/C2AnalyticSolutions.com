import "./About.css";
interface AboutProps {
  imageSrcPath2: string;
  imageSrcPath3: string;
  imageSrcPath4: string;
}

function About({ imageSrcPath2, imageSrcPath3, imageSrcPath4 }: AboutProps) {
  return (
    <div id="About">
      <div>
        {/* About Us Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase mb-4">
                  About Us
                </h2>
                <p className="text-muted">
                  At <strong>C2 Analytic Solutions</strong>, we are passionate
                  about leveraging data analytics and software engineering to
                  transform businesses and drive innovation. We believe data
                  holds the key to valuable insights and informed decisions.
                </p>
                <p className="text-muted">
                  Our skilled team provides cutting-edge, tailored solutions,
                  pushing the boundaries of what's possible in data analytics
                  and software engineering.
                </p>
                <p className="text-muted">
                  Collaboration is central to our approach, partnering closely
                  with clients to co-create solutions aligned with their vision.
                  We're committed to exceptional customer service and ready to
                  guide you through optimizing data analytics, enhancing
                  software engineering, or embarking on a digital transformation
                  journey.
                </p>
                <p className="text-muted">
                  Let's unlock the power of data and propel your business into a
                  future of endless possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Cards Section */}
        <section className="bg-dark text-white py-5">
          <div className="container">
            <h2 className="section-heading text-uppercase text-center text-white mb-4">
              Our Team
            </h2>
            <div className="row">
              {/* Profile Card 1 */}
              <div className="col-md-4">
                <div className="card mb-4 hover-effect">
                  <img
                    src={imageSrcPath2}
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Yessica</h5>
                    <p className="card-text"> Lead Informatics Analyst</p>
                  </div>
                </div>
              </div>

              {/* Profile Card 2 */}
              <div className="col-md-4">
                <div className="card mb-4 hover-effect">
                  <img
                    src={imageSrcPath3}
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Luis </h5>
                    <p className="card-text">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Profile Card 3 */}
              <div className="col-md-4">
                <div className="card mb-4 hover-effect">
                  <img
                    src={imageSrcPath4}
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Anthony</h5>
                    <p className="card-text">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Add more profile cards as needed */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
