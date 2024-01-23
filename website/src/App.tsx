import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import imagePath from "./assets/Slide-2.jpg";

import About from "./pages/About";

import imagePath2 from "./assets/Yessica.png";
import imagePath3 from "./assets/Luis.png";
import imagePath4 from "./assets/Tony.png";

import Projects from "./pages/Projects";

import videoPath from "./assets/LifeBridgeAppPresentation.mp4";

function App() {
  return (
    <div>
      <NavBar />
      <Home imageSrcPath={imagePath} />
      <About
        imageSrcPath2={imagePath2}
        imageSrcPath3={imagePath3}
        imageSrcPath4={imagePath4}
      />
      <Projects videoSrcPath={videoPath} />
    </div>
  );
}

export default App;
