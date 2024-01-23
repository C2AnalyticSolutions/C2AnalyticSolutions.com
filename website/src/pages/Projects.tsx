interface ProjectProps {
  videoSrcPath: string;
}

// Projects.tsx

function Projects({ videoSrcPath }: ProjectProps) {
  return (
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
              currently used withing the Quality division for reporting purposes
              of the revenue impact and mortality scores within the hospital.
            </p>
            <p className="text-muted">
              Created multiple notification flows using Power Automate which
              helped automate workflow processes for high patient risk cases in
              the hospital which maximized productivity in decision making
              within the Quality Improvement Division.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
