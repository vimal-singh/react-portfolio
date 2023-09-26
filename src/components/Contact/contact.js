import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import mircosoft from "../../assets/microsoft.png";
import facebookIcon from "../../assets/facebook-icon.png";
import InstaIcon from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          <br />
          Some of the notable companies I have work with includes.
        </p>
        <div className="clientsImgs">
          <img src={adobe} alt="Adobe" className="clientImg" />
          <img src={walmart} alt="Walmart" className="clientImg" />
          <img src={facebook} alt="Facebook" className="clientImg" />
          <img src={mircosoft} alt="MicroSoft" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss the opportunity.
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={InstaIcon} alt="Instagram" className="link" />
            <img src={facebookIcon} alt="Facebook" className="link" />
            <img src={Twitter} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
