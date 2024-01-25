import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">

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
      </ul>

    </div>

  </div>

</nav>

  )
}

export default Header;
