import React from "react";

import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { signOut } = useGoogleLogout({});
  const history = useHistory();

  function handleClick() {
    signOut();
    history.push("/");
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              role="button"
              onClick={() => handleClick()}
            >
              <i className="fa fa-power-off" />
              &nbsp;SAIR
            </a>
          </li>
          {/* Messages Dropdown Menu */}

          {/* Notifications Dropdown Menu */}

          <li className="nav-item"></li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
};

export default Header;
