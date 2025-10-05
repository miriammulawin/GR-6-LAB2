import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="nav navbar navbar-expand-lg fixed-top justify-content-center px-5 py-4">
      <NavLink className="navbar-brand mx-5" to="/home">
        HOME
      </NavLink>

      <NavLink className="navbar-brand mx-5" to="/mission-vision">
        MISSION & VISION
      </NavLink>

      <NavLink className="navbar-brand mx-5" to="/gallery">
        GALLERY
      </NavLink>

      <NavLink className="navbar-brand mx-5" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="navbar-brand mx-5" to="/contact">
        CONTACT
      </NavLink>
    </div>
  );
}

export default Header;
