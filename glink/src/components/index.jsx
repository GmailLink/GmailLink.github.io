import React from "react";
import EmailComponent from "./Email";
import AdComponent from "./Ads";
import "./index.css";

export const isMobile = () => {
  if (window.innerWidth <= 760) {
    return true;
  }
  return false;
};

export default class MailComponent extends React.Component {
  render() {
    return (
      <div className="twoComponents">
        <EmailComponent />
        <AdComponent />
      </div>
    );
  }
}
