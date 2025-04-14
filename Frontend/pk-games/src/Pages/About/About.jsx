import React from "react";
import "../../Pages/About/About.css";
import logo from "../../images/PK-Games-Logo-no-bg.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about_container">
      <div className="about_head">
        <p className="about_title">Welcome to PK Games</p>
        <p className="about_title-sub">Where Passion Meets Play</p>
      </div>
      <div className="about_section">
        <img src={logo} alt="" className="about_section-image" />
        <p className="about_section-text">
          At PK Games, we’re dedicated to creating a universe where gamers of
          all levels can discover, connect, and play. Whether you’re a casual
          player or a competitive pro, our platform offers curated games,
          seamless downloads, and a community that celebrates gaming culture.
        </p>
      </div>
      <div className="about_wraper">
        <div className="about_content">
          <h1 className="about_content-head">Our Story</h1>
          <h2 className="about_content-title">The Story Behind PK Games</h2>
          <h3 className="about_content-tagline">From Gamers, For Gamers</h3>
          <p className="about_content-text">
            PK Games was born out of a shared love for gaming. Founded in 2025,
            our team set out to build a platform that simplifies finding great
            games while fostering a vibrant community. Today, we’re proud to
            serve millions of players worldwide, offering everything from indie
            gems to AAA titles.
          </p>
        </div>
        <div className="about_content">
          <h1 className="about_content-head">Our Mission</h1>
          <h2 className="about_content-title">Powering Your Play</h2>
          <h3 className="about_content-tagline">More Than Just Games</h3>
          <p className="about_content-text">
            We’re on a mission to redefine gaming experiences. PK Games combines
            cutting-edge technology with player-first design to deliver a
            platform that’s fast, secure, and endlessly fun. We prioritize
            accessibility, affordability, and inclusivity to ensure everyone can
            join the adventure.
          </p>
        </div>
        <div className="about_content">
          <h1 className="about_content-head">Why PK Games?</h1>
          <h2 className="about_content-title">The PK Difference</h2>
          <h3 className="about_content-tagline">Play Smarter, Not Harder</h3>
          <h4 className="about_content-text">
            <ul>
              <li>
                Curated Library: Discover handpicked games tailored to your
                tastes.
              </li>
              <li>
                Instant Downloads: Get your games faster with our optimized
                launcher.
              </li>
              <li>
                Exclusive Rewards: Earn PK Points for discounts, merch, and
                in-game perks.
              </li>
              <li>
                24/7 Support: Our team is always here to help you game
                uninterrupted.
              </li>
            </ul>
          </h4>
        </div>
        <div className="about_content">
          <h1 className="about_content-head">Meet the Team</h1>
          <h2 className="about_content-title">The Brains Behind the Games</h2>
          <h3 className="about_content-tagline"> Geeks, Gamers, Innovators</h3>
          <p className="about_content-text">
            Behind PK Games is a diverse team of developers, designers, and
            lifelong gamers. We’re united by a single goal: to create a platform
            that inspires joy, competition, and creativity.
          </p>
        </div>
        <div className="about_content">
          <h1 className="about_content-head">Community & Values</h1>
          <h2 className="about_content-title">Join the PK Family</h2>
          <h3 className="about_content-tagline">Gaming Without Boundaries</h3>
          <h4 className="about_content-text">
            We believe gaming is for everyone. That’s why we:
            <br />
            <ul>
              <li>Partner with charities to support gaming accessibility.</li>
              <li>Host tournaments and events for players worldwide.</li>
              <li>
                Promote fair play and positive interactions in our community.
              </li>
            </ul>
          </h4>
        </div>
        <div className="about_content">
          <h1 className="about_content-head">Get in Touch</h1>
          <h2 className="about_content-title">Let’s Level Up Together</h2>
          <h3 className="about_content-tagline">
            Your Feedback Fuels Our Future
          </h3>
          <p className="about_content-text">
            Have ideas or questions? We’d love to hear from you! Reach out at
            <span> prasannakumar76600@gmail.com</span> or join our Discord
            community. Follow us for updates, giveaways, and game news!
          </p>
        </div>
      </div>
      <div className="about_CTA">
        <h1 className="about_CTA-title">Ready to Play ?</h1>
        <p className="about_CTA-text">Download the Launcher Now</p>
        <button
          onClick={() => {
            navigate("/launcher");
          }}
          className="about_CTA-button"
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default About;
