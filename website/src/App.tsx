import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import imagePath from "./assets/Slide-2.jpg";

import About from "./pages/About";

function App() {
  return (
    <div>
      <NavBar />
      <Home imageSrcPath={imagePath} />
      <About />
    </div>
  );
}

export default App;
