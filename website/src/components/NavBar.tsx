//Icons
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function NavBar() {
  return (
    <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          C2 Analytic Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Home">
                <IoIosHome />
                {"    "}Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#About">
                <FaUser />
                {"    "}About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Projects">
                <FaTools />
                {"    "}Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Contact">
                <CiMail />
                {"    "}Contact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaLink />
                {"    "}Links
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.linkedin.com/in/c2-analytic-solutions-160bb9291/"
                  >
                    <FaLinkedin />
                    {"    "}LinkedIn
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaDownload />
                    {"    "}Resume
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <MdEmail />
                    {"    "}Email
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
