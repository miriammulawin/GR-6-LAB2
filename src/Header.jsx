import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

function Header() {
  return (
    <div className="nav navbar fixed-top py-2 px-5">

      <img src={logo} alt="PNC Logo" />

    
      <div className="nav-links">
        <NavLink className="navbar-brand" to="/">
          HOME
        </NavLink>
        <NavLink className="navbar-brand" to="/mission-vision">
          MISSION & VISION
        </NavLink>
        <NavLink className="navbar-brand" to="/gallery">
          GALLERY
        </NavLink>
        <NavLink className="navbar-brand" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="navbar-brand" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
