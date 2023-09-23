import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vimal</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I'm a skilled web developer with experience in creating
          <br /> visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile-img" className="bg" />
    </section>
  );
};

export default Intro;
