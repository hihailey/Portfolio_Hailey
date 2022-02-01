import React from "react";
import { Card } from "antd";
import Chubbyimg from "./Chubby.png";
import HTML from "../../img/HTML.png";
import CSS from "../../img/css.png";
import js from "../../img/JS.png";

export default function Chubby() {
  return (
    <>
      <div class="card-container">
        <img src={Chubbyimg} alt="rooma" />
        <div class="middle">
          <div class="github">
            <a href="https://github.com/hihailey/ChubbyMacaron">Github Link</a>
          </div>
        </div>
      </div>
      <div>
        <h1 id="title">Chubby Macaron</h1>
        <p>
          Do you need something sweet?
          <br />
          Chubby Macaron is a premium macaron bakery in Vancouver
          <br />
          You can order online and customize cake!
        </p>
        <div className="made-detail">
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={js} alt="Javascript" />
        </div>
      </div>
    </>
  );
}
