import React from "react";
import "./AboutMe.css";
import HTML from "../../img/HTML.png";
import CSS from "../../img/css.png";
import react from "../../img/react.png";
import nodejs from "../../img/nodejs.png";
import ts from "../../img/ts.png";
import sql from "../../img/MySQL.png";
import mongo from "../../img/mongodb.png";
import git from "../../img/git.png";
import vue from "../../img/Vue.png";
import figma from "../../img/Figma.png";
import js from "../../img/JS.png";
import next from "../../img/next.png";
import purple from "../../img/purple.png";

export default function Skills() {
  return (
    <div id="skill">
      <div className="content-title">
        <h1> Skills</h1>
      </div>

      <img
        src={purple}
        alt="HTML"
        style={{
          zIndex: "-1",
          position: `absolute`,
          left: `-170px`,
          bottom: "-1500px",
          height: "300px",
        }}
      />

      <div className="content-wrapper ">
        <div className="skills-container">
          <div className="skills-detail">
            <div className="icons">
              <div>
                <img src={HTML} alt="HTML" />
                <p>HTML</p>
              </div>
              <div>
                <img src={CSS} alt="CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img src={js} alt="Javascript" />
                <p>Javascript</p>
              </div>
              <div>
                <img src={react} alt="React" />
                <p>React</p>
              </div>
              <div>
                <img src={next} alt="VueJs" />
                <p>Nextjs</p>
              </div>
              <div>
                <img src={vue} alt="VueJs" />
                <p>VueJs</p>
              </div>
              <div>
                <img src={nodejs} alt="NodeJS" />
                <p>NodeJS</p>
              </div>
              <div>
                <img src={ts} alt="Typescript" />
                <p>Typescript</p>
              </div>
              <div>
                <img src={sql} alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div>
                <img src={mongo} alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div>
                <img src={git} alt="git" />
                <p>Git</p>
              </div>
              <div>
                <img src={figma} alt="figma" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
