import React, { useState } from 'react';
import "./AboutMe.css";
import green from "../../img/Green.png";
import kookmin from "../../img/Kookmin.png"
import BCIT from "../../img/BCIT.png"

export default function Profile() {
  const [toggle, setToggle] = useState(false)

  const clickEducation = () =>{
    console.log("hi")
    setToggle(true);
    console.log(toggle)
  }
  const clickBio = () =>{
    setToggle(false);
  }
  return (
    <div id="about">
      <div className="content-title">
        <h1> About Me </h1>
      </div>

      <div className="content-wrapper ">
        <div className="aboutMe-container">
          <div className="profile-picture">
            <div className="aboutMe-image"></div>
          </div>

          <div className ="profile-main">        
          <div className="profile-button" >            
              <button onClick={clickBio}><b>About Me</b></button>
              <button onClick={clickEducation}><b>Education</b></button>
          </div>   

          <div className="profile-detail"style={{
                height: "300px",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "center",
              }}>
          {!toggle ? (
              <div id="profile-span"  >
              <p>
                Hello, World! <br />
                This is Hailey who is an enthusiastic full-stack developer based on Vancouver, Canada.
                <br /> I studied Mechanical Engineering at Kookmin University in
                Korea, but I found more interest in coding which brings me here now.
                <br /> I always enjoy learning something new,
                so I like coding which is developed at every moment.
                <br /> I like doing work out and swimming which makes me feel
                alive.
              </p>
            </div>
            ) : (            
            <div className="education" id="profile-span">
              <div className="school-wrapper">
                <img src={BCIT}/>
                <p>
                  <span style={{
                "font-weight": "300",}}>British Columbia Institute Of Technology</span>
                
                <br/>Full Stack Web Development</p>
                
              </div>
              <div className="school-wrapper">
                <img src={kookmin}/>
                <p>
               <span style={{
              "font-weight": "300",}}>Kookmin University In Korea</span>
              <br />Bachelor of Science in Mechanical Engineering</p>
              </div>
            </div>
            )}
            </div> 
          </div>
        </div>
        <img
          src={green}
          alt="HTML"
          style={{
            zIndex: "-1",
            position: `absolute`,
            right: `-170px`,
            bottom: "-1200px",
            height: "300px",
          }}
        />
      </div>
    </div>
  );
}
