import React from "react";
import {data} from "../../Data/Section12";

import "./style.css";

const Section12 = () => {
  return (
    <div className="heartbeat">
        <p className="title-heartbeat" >{data?.title}</p>
        <p className="descrypt-heartbeat" >{data?.description}</p>
    </div>
  );
};

export default Section12;
