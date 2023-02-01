import React from "react";
import img from "../../images/feature5-zero.svg";
import img_mbl from "../../images/feature5-zero-mbl.svg";

import "./style.css";

const Section4 = () => {
  return (
    <div className="image-section4">
      <img src={img} className="sec4img-size"/>
      <img src={img_mbl} className="sec4img-size-mbl" />

    </div>
  );
};

export default Section4;
