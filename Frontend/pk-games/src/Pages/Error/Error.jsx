import React from "react";
import error from "../../images/error.jpg";
import "./Error.css";

const Error = () => {
  return (
    <div className="error_container">
      <img src={error} alt="" className="error_image" />
    </div>
  );
};

export default Error;
