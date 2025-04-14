import React from "react";
import launcher from "../../images/launcher.png";
import "./Launcher.css";
import { useNavigate } from "react-router-dom";

const Launcher = () => {
  const navigate = useNavigate();
  return (
    <div className="launcher_container">
      <h1 className="launcher_head">Launcher</h1>
      <div className="launcher_image-container">
        <img src={launcher} alt="launcher" className="launcher_image" />
      </div>
      <h2 className="launcher_title">Launcher Coming Soon</h2>
      <p className="launcher_text">Until then Explore our Games</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="launcher_button"
      >
        Home
      </button>
    </div>
  );
};

export default Launcher;
