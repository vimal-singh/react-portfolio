import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web deveoper with experience in creating
        visually appealing and user-friendly websites.
        <br /> I have a strong understading of design and a keen eye for detail.
        I am proficient in HTML,CSS, Javascript & ReactJs. as well as Nodejs and
        Expressjs.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UIDesign} alt="ui-design" className="skillbarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is the demo text, you can add your own.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesign} alt="web-design" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is the demo text, you can add your own.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={AppDesign} alt="app-design" className="skillbarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is the demo text, you can add your own.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
