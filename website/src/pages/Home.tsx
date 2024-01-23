interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrcPath})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Parallax effect
    height: "400px", // Adjust the height as needed
  };

  return (
    <div id="Home">
      <div
        className="bg-image d-flex align-items-center justify-content-center"
        style={backgroundImageStyle}
      >
        {/* Landing Section */}
        <div className="container text-center text-white">
          <h1 className="display-4">Welcome to Our Passionate Start-up</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
