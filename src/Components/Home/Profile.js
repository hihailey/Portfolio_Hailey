import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import cloud from "../../img/cloud.png";
import yellow from "../../img/yellow.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Profile() {
  return (
    <div id="home" className="content-wrapper ">
      <img
        src={cloud}
        alt="HTML"
        style={{
          position: `absolute`,
          left: `-50px`,
        }}
      />
      <div className="profile-container">
        <div className="profile-detail">
          <div className="profile-Name">
            <span>
              <span className="highlighted-text">Hailey Kim</span>
            </span>
          </div>

          <div className="profile-role">
            <h1>
              <Typical
                className="gradient_text"
                loop={Infinity}
                steps={["Enthusiastic Dev", 2000, "Full Stack Dev", 2000, ""]}
              />
            </h1>
          </div>

          <div id="profile-span">
            <p>
              Passionate Full Stack Developer In Vancouver <br />
              I believe coding can change the world for the better <br />
              Do you want to talk more with me? <br />
              Do not hesitate to contact me!
            </p>
          </div>

          <div>
            {" "}
            <button className="btn">
              <Link to="contact">
                <p>Contact Me &nbsp; &nbsp; ➔</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-image"></div>
        </div>
      </div>
      <img
        src={yellow}
        alt="HTML"
        style={{
          zIndex: "-1",
          position: `absolute`,
          right: `-50px`,
          bottom: "30px",
        }}
      />
    </div>
  );
}
