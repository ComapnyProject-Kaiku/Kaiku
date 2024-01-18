import React from "react";
import "./Generalobservation.css";
import camicn from "../../images/camera-icon.svg";
import eclipse from "../../images/ellipse-2.svg";
import media from "../../images/media.svg";
import gps from "../../images/gps-icon.svg";

function Generalobservation() {
  return (
    <div className="app">
      <div className="boxone">
        <h3>General Observation </h3>
        <div className="boxtwo">
          <div className="camicn">
            <img src={camicn} width={32} height={32} />
            <img src={eclipse} alt="" width={50} height={52} />
            <figcaption>Take Photos From Camera</figcaption>
            <p>or Add from Phone</p>
          </div>
        </div>
      </div>

      <div className="boxthree">
        <h2>Add to Your Sighting</h2>
        <div className="icns">
          <img src={media} alt="" width={32} height={32} />

          <img src={camicn} alt="" width={32} height={32} />
          <img src={gps} alt="" width={32} height={32} />
        </div>
      </div>
      <div className="boxfour">
        <p>Street Address</p>
        <input type="text" placeholder="enter manually" />
        <img src={gps} alt="" width={32} height={32} />
      </div>
    </div>
  );
}
export default Generalobservation;
