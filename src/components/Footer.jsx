import React from "react";
import fbIcon from ".././images/Facebook-Icon.png";
import gitIcon from ".././images/GitHub-Icon.png";
import instagramIcon from ".././images/Instagram-Icon.png";
import twitterIcon from ".././images/Twitter-Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="">
            <img src={fbIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={gitIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagramIcon} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitterIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
}
