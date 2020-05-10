import React from "react";
import "./EmailInstructions.css";
import { isMobile } from "..";

export default class EmailInstructions extends React.Component {
  getEmojie = (emojie = "👉") => {
    return (
      <span role="img" aria-label="arrow" className="padding-right-2">
        {emojie}
      </span>
    );
  };

  render() {
    const isMobVal = isMobile();

    return (
      <div
        className={`${isMobVal ? "instruction-img-mob" : "instruction-img"}`}
      >
        <div
          className={`${
            isMobVal ? "background-image-mob" : "background-image"
          }`}
          style={{
            backgroundImage: `url("https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/empty.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50%",
            backgroundSize: `${isMobVal ? "290px" : "317px"}`,
            WebkitBackgroundSize: `${isMobVal ? "290px" : "317px"}`,
            MozBackgroundSize: `${isMobVal ? "290px" : "317px"}`,
            OBackgroundSize: `${isMobVal ? "290px" : "317px"}`,
            textAlign: "center",
            position: "relative",
            height: `${isMobVal ? "200px" : ""}`,
          }}
        >
          <div
            className={`text-in-circle ${!isMobVal ? "margin-left-120" : ""}`}
            style={{
              height: `${isMobVal ? "110px" : "130px"}`,
              width: "202px",
              position: "absolute",
              left: `${isMobVal ? "78px" : "52px"}`,
              top: "29px",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="padding-bottom-10 font-style-monospace board-header-style">
                Instructions
              </li>
              <li className="text-color-cadetblue font-style-lobster">
                {this.getEmojie()} It works only for Gmail Users (Free /
                Premium).
              </li>
              <li className="padding-top-5 text-color-beige font-style-lobster">
                {this.getEmojie()} Gmail Sharable Link works only if another
                person there in Mail thread.
              </li>
              <li className="padding-top-5 text-color-goldenrod font-style-lobster">
                {this.getEmojie()}
                This page will not store any of your data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
