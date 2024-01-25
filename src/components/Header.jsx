import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark shadow-5-strong">

  <div className="container-fluid">

    {/* Brand on the left */}
    <a className="navbar-brand" href="#">Ahmad Ullah Mukhlis</a>

    {/* Toggler button for small screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* Navbar links */}
    <div className="collapse navbar-collapse justify-content-end" id="navbar">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active"  href="https://www.linkedin.com/in/ahmad-ullah-mukhlis-3a6962272/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='xl'  color='gold'/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="https://www.facebook.com/nasarimukhlis/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-facebook"  size='xl' color='gold' />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="https://github.com/ahmadullahmukhlis" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-github"  size='xl' color='gold' />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="https://www.youtube.com/channel/UCtO4W3H2vjA1Q9z8T5Yd4rQ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-youtube"  size='xl' color='gold' />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="mailto:ahmadullahmukhlis2019@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" size='xl' color='gold' />
          </a>
        </li>
      </ul>

    </div>

  </div>

</nav>

  )
}

export default Header;
