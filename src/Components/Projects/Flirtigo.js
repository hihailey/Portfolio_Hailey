import React from "react";
import { Card } from "antd";
import Flirtigoimg from "./Flirtigo_Thumbnail.png";
import HTML from "../../img/HTML.png";
import CSS from "../../img/css.png";
import nodejs from "../../img/nodejs.png";
import mongo from "../../img/mongodb.png";
import js from "../../img/JS.png";

export default function Flirtigo() {
  return (
    <>
      <div>
        <h1 id="title">Flirtigo</h1>
        <p>
          Do you want to try a new dating app?
          <br />
          Flirtigo is a dating app based on a horoscope. <br />
          You can check your horoscope and find your love! <br />
          Our app provides daily question to find your daily match.
        </p>
        <div className="made-detail">
          {/* <p>MADE WITH</p> */}
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={js} alt="Javascript" />
          <img src={nodejs} alt="nodejs" />
          <img
            src={mongo}
            style={{
              width: `30px`,
            }}
            alt="MongoDB"
          />
        </div>
      </div>
      <div class="card-container">
        <img src={Flirtigoimg} alt="rooma" />
        <div class="middle">
          <div class="github">
            <a href="https://github.com/hihailey/Flirtigo">Github Link</a>
          </div>
        </div>
      </div>
    </>
  );
}
