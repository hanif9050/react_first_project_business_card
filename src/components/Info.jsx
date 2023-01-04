import React from "react";
import profileImg from ".././images/hanif_portfolio.png";
import mailImg from ".././images/Mail.png";
import linkedinImg from ".././images/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info-container">
        <img src={profileImg} alt="profile-pic" />
      </div>
      <div className="info-text">
        <h1 className="info-text_title">Mohammed Hanif</h1>
        <p className="info-text_career">Frontend Developer</p>
        <p className="info-text_site">hanifPorfolio.website</p>
        <div className="info-link">
          <a href="mailto:hanif.ctg9050@gmail.com" className="info-link-mail">
            <img src={mailImg} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-hanif-129b3491/"
            className="info-link-linkedin"
            target="_blank"
          >
            <img src={linkedinImg} />
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
