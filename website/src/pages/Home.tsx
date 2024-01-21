// Define the Home component
interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrcPath})`,
    backgroundSize: "cover", // Ensure the image covers the entire container
  };

  return (
    <div className="bg-image" style={backgroundImageStyle}>
      <div className="container text-center text-white">
        <h1 className="display-1">Welcome to Our Landing Page</h1>
        <p className="lead">Your content goes here...</p>
      </div>
    </div>
  );
}

export default Home;
