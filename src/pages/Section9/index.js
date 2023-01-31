import React from "react";

import img from "../../images/muqeem-width.svg";
import img_mbl from "../../images/muqeem-width-mbl.svg";
import "./style.css";

const Section3 = () => {
  return (
    <div className="image-section7">
      <img src={img} className="sec7img-size"/>
      <img src={img_mbl} className="sec7img-size-mbl"/>

    </div>
  );
};

export default Section3;
