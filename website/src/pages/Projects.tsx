// Projects.tsx

interface ProjectProps {
  videoSrcPath: string;
}

function Projects({ videoSrcPath }: ProjectProps) {
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

          {/* Projects Grid */}
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4 mb-4">
              {/* Project Card */}
              <div className="card shadow-sm">
                <img
                  src="https://placehold.it/300x200" // Replace with actual project image URL
                  className="card-img-top"
                  alt="Project 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">
                    Project description goes here. You can provide more details
                    about the project in this section.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src="https://placehold.it/300x200" // Replace with actual project image URL
                  className="card-img-top"
                  alt="Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">
                    Project description goes here. You can provide more details
                    about the project in this section.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src="https://placehold.it/300x200" // Replace with actual project image URL
                  className="card-img-top"
                  alt="Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">
                    Project description goes here. You can provide more details
                    about the project in this section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
