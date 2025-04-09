import React from "react";
import "../Footer/Footer.css";
import discord from "../../images/Discord.png";
import x from "../../images/x-logo-white.png";
import yt from "../../images/youtube_social_icon_red.png";

const Footer = () => {
  return (
    <footer className="footer_container">
      <p className="footer_text">
        © 2025, PK Games, Inc. All rights reserved. All trademarks are property
        of their respective owners in the US and other countries. Our websites
        may contain links to other sites and resources provided by third
        parties. These links are provided for your convenience only. PK Games
        has no control over the contents of those sites or resources, and
        accepts no responsibility for them or for any loss or damage that may
        arise from your use of them.
      </p>
      <div className="footer_links">
        <a href="https://discord.com/">
          <img src={discord} alt="Discord" className="footer_image" />
        </a>
        <a href="https://x.com/?lang=en">
          <img src={x} alt="X" className="footer_image footer_image-2" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={yt} alt="YouTube" className="footer_image" />
        </a>
      </div>
      <button className="footer_button">Back To Top</button>
    </footer>
  );
};

export default Footer;
