import React from "react";

import "./main.css";
import { Link } from "react-router-dom";
import beach from "../../images/main-splash-image.jpeg";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="login-signup-temp-nav-bar">
          <div className="login-signup-bread-title-logo">BREAD</div>
          <div className="login-signup-bread-nav-buttons">
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
        <div className="main-page-containter">
          <div className="bread-splash-subtitle">
            revolutionize the way you split shared expenses with friends. social
            financial awkwardness is now a thing of the past.
          </div>
          <div className="splash-sign-up-button">
            <Link to="/signup">Sign Up</Link>
          </div>
          <img className="beach-pic-background" src={beach} alt="" />
        </div>
      </div>
    );
  }
}

export default MainPage;
