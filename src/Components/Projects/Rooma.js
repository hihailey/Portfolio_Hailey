import React from "react";
import { Card } from "antd";
// import rooma from "./rooma.png";
import HTML from "../../img/HTML.png";
import CSS from "../../img/css.png";
import react from "../../img/react.png";
import ts from "../../img/ts.png";
import js from "../../img/JS.png";
import rooma from "./rooma_desktop.png";

export default function Rooma() {
  return (
    <>
      <div class="card-container">
        <img src={rooma} alt="rooma" />
        <div class="middle">
          <div class="github"><a href="http://rooma.ca">Website</a></div>
        </div>
      </div>
      <div>
        <h1 id="title">Rooma</h1>
        <p>
          Are you living with roommates?
          <br />
          Roomma is a scheduling app which can use with your roommates. <br />
          You can share calendar, to-do list and monthly schedule with Rooma!
        </p>
        <div className="made-detail">
          {/* <p>MADE WITH</p> */}
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={js} alt="Javascript" />
          <img src={react} alt="React" />
          <img src={ts} alt="Typescript" />
        </div>
      </div>
    </>
  );
}
