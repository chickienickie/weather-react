import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1 id="city">New York</h1>
      <h2 id="temperature">73°F</h2>
      <p id="description">Sunny</p>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear-icon"
        id="icon"
        class="float-right"
      />
      <br />
      <hr />
    </div>
  );
}
