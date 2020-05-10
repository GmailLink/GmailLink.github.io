import React from "react";
import { Jumbotron } from "reactstrap";
import "./index.css";
import { isMobile } from "../index";

export default class AdComponent extends React.Component {
  render() {
    const isMobileStatus = isMobile();

    return (
      <div className={`adGen ${isMobileStatus ? "adGen-mob" : ""}`}>
        {/* <Jumbotron> */}
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8510549292628710"
          data-ad-slot="8485434580"
          data-ad-format="auto"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        {/* </Jumbotron> */}
      </div>
    );
  }
}
