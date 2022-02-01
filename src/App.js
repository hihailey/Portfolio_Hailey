import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Home/Profile";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/AboutMe/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Home/Contacts/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router>
          {/* <Routes>
            <Route path="/" exact component={Profile} />
            <Route path="/about" exact component={AboutMe} />
            <Route path="/" exact component={Profile} />
            <Route path="/" exact component={Profile} />
          </Routes> */}
        </Router>
        <div className="all-content-wrapper">
          <Profile />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </header>
    </div>
  );
}

export default App;
