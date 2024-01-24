// Projects.tsx

interface ProjectProps {
  videoSrcPath: string;
  imageSrcPath5: string;
  imageSrcPath6: string;
  imageSrcPath7: string;
}

function Projects({
  videoSrcPath,
  imageSrcPath5,
  imageSrcPath6,
  imageSrcPath7,
}: ProjectProps) {
  return (
    <div id="Projects">
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* Video Embed (Replace the source with your video URL) */}
              <iframe
                width="100%"
                height="315"
                src={videoSrcPath}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-6">
              {/* Project Text */}
              <h2 className="section-heading text-uppercase mb-4">
                LifeBridge Application
              </h2>
              <p className="text-muted">
                Data entry workflow application using Power Apps to capture the
                hospital’s acquired conditions (HAC). This application is
                currently used within the Quality division for reporting
                purposes of the revenue impact and mortality scores within the
                hospital.
              </p>
              <p className="text-muted">
                Created multiple notification flows using Power Automate which
                helped automate workflow processes for high patient risk cases
                in the hospital, maximizing productivity in decision-making
                within the Quality Improvement Division.
              </p>
            </div>
          </div>

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
                  src={imageSrcPath5}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <h2>Pallative Team Metrics Dashboard</h2>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Coming soon!</li>
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
                  <li className="list-group-item">AWS S3 Bucket</li>
                  <li className="list-group-item">AWS Route 53</li>
                  <li className="list-group-item">AWS CloudFront</li>
                </ul>
              </div>
            </div>

            {/* Third Card */}
            <div className="col mb-4">
              <div className="card">
                <img
                  src={imageSrcPath7}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <h2>Palliative Services Line Metrics</h2>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Coming soon!</li>
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
