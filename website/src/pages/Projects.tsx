// Projects.tsx

interface ProjectProps {
  imageSrcPath5: string;
  imageSrcPath6: string;
  imageSrcPath7: string;
}

function Projects({
  imageSrcPath5,
  imageSrcPath6,
  imageSrcPath7,
}: ProjectProps) {
  return (
    <div id="Projects">
      <section className="bg-light py-5">
        <div className="container">
          {/* Projects Header */}
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase mb-4">Projects</h2>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* First Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath7}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <h2>Pallative Team Metrics Dashboard</h2>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Focuses on the volume and case load distributed among each
                    health care worker. The quantifiable data provides insight
                    on the resources needed to allocate in the appropriate areas
                    for program support.{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath6}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <h2>C2 Analytic Solutions Website</h2>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Designed and developed a fully responsive website using
                    React Typescript. Our team maintained a Git workflow, using
                    branches for new features. Successfully deployed our website
                    to AWS S3 bucket. Used AWS Route 53 to set up our domain
                    from google. Implemented AWS CloudFront to improve
                    performance and security of the website. Our team is
                    providing ongoing support to the website, adding new
                    features, and maintaining the software.{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath5}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <h2>Palliative Services Line Metrics</h2>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    The service line dashboard was designed to provide
                    visualizations for key performance indicators(KPIs) of the
                    hospital system’s palliative program. The KPIs provides
                    insight that showcases how the program’s intervention
                    improves the overall hospital length of stay in the
                    palliative population that are seen in the hospital.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
