import React from "react";
import { Link } from "react-router-dom";
import "./intro-page.css";
import drew from "../../images/drew-pic.png"
import nick from "../../images/nick-pic.png";
import jr from "../../images/jr-pic.png"
import rav from "../../images/rav-pic.png"

class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className="user-home-container">
        <div className="left-user-home-container">
          <Link to="/home" className="user-home-internal-title">
            BREAD
          </Link>
        </div>
        <div className="right-user-home-container-intros">
          <div className="internal-nav-bar-container">
            <Link to="/home" className="internal-nav-user-home-button">
              Home
            </Link>
            <Link to="/newevent" className="internal-nav-user-create-button">
              Create Event
            </Link>
            <Link to="/intros" className="internal-nav-user-intros-button">
              Intros
            </Link>
            <button
              onClick={this.logoutUser}
              className="user-home-logout-button"
            >
              Log out
            </button>
          </div>
          <div className="intro-page-container">
            <div className="drew-information-container">
              <img src={drew} className="intro-head-shot-pic-drew" />
              <div className="intro-text-information">
                <a href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}>
                  Drew Shroyer
                  <span class="intro-bio">
                    a software engineer with a design eye and a business
                    mindset. Drew graduated from the STern school of business at
                    NYU and has experience in creative direction and marketing
                    for companies like Equinox, Ceros, and Microsoft.{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="nick-information-container">
              <img src={nick} className="intro-head-shot-pic" />
              <div className="intro-text-information">
                <a href={"https://www.linkedin.com/in/nicholas-draper/"}>
                  Nick Draper
                  <span class="intro-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris condimentum porta maximus. Vivamus lacus nunc,
                    vestibulum vel elementum ac, suscipit in lorem.
                  </span>
                </a>
              </div>
            </div>
            <div className="JR-information-container">
              <img src={jr} className="intro-head-shot-pic" />{" "}
              <div className="intro-text-information">
                <a
                  className="nav-bar-link"
                  id="nav-bar-dash"
                  href={"https://www.linkedin.com/in/jrmcc/"}
                >
                  JR McCann
                  <span class="intro-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris condimentum porta maximus. Vivamus lacus nunc,
                    vestibulum vel elementum ac, suscipit in lorem.
                  </span>
                </a>
              </div>
            </div>
            <div className="Rav-information-container">
              <img src={rav} className="intro-head-shot-pic" />{" "}
              <div className="intro-text-information">
                <a
                  className="nav-bar-link"
                  id="nav-bar-dash"
                  href={"https://www.linkedin.com/in/ravneet-singh-20b978a4/"}
                >
                  Rav Singh
                  <span class="intro-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris condimentum porta maximus. Vivamus lacus nunc,
                    vestibulum vel elementum ac, suscipit in lorem.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroPage;