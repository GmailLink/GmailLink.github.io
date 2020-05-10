import React from "react";
import "./EmailInstructions.css";
import { isMobile } from "..";

export default class EmailInstructions extends React.Component {
  render() {
    const isMobVal = isMobile();

    return (
      <div className={`responseNotes ${isMobVal ? "responseNotes-mob" : ""}`}>
        <span>
          1. It works only for Gmail Free/Premium Users. &nbsp 2. Gmail Sharable
          Link work only if another person there in Mail thread. &nbsp 3. This
          page will not store any of your data. &nbsp
        </span>
        <img
          className={`${isMobVal ? "svg-mob" : "svgImg"}`}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/empty.svg"
          width={`${isMobVal ? "100%" : "auto"}`}
          height="100%"
          alt=""
        />
      </div>
    );
  }
}
