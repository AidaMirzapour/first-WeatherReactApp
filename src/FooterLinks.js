import React from "react";
import "./FooterLinks.css";

export default function FooterLinks() {
  return (
    <div className="FooterLinks">
      <a
        href="https://github.com/AidaMirzapour/Weather-app-React"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      , by{" "}
      <a
        href="https://github.com/AidaMirzapour"
        target="_blank"
        rel="noreferrer"
      >
        Aida Mirzapour
      </a>{" "}
      from{" "}
      <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
        She Codes
      </a>
      .
    </div>
  );
}
