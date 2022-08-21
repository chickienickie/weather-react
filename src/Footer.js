import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Last updated: <span id="date">Monday, July 25, 2022 at 02:00pm</span>
      </footer>
      <small>
        <a href="https://github.com/chickienickie/chic-weather-app">
          Open Source Code <i class=" fa-brands fa-github"></i>
        </a>
        by Nickie Potter
      </small>
    </div>
  );
}
