import React from "react";

import img from "../../images/four.svg";
import img_mbl from "../../images/four-mbl.svg";

import "./style.css";

const Section8 = () => {
  return (
    <div>
      <div className="image-section5">
        <img src={img} className="sec5img-size" />
        <img src={img_mbl} className="sec5img-size-mbl" />
      </div>
    </div>
  );
};

export default Section8;
