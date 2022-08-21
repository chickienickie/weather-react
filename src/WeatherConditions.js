import React from "react";
import "./WeatherConditions.css";

export default function WeatherConditions() {
  return (
    <div className="WeatherConditions">
      <div class="row" id="weather-condition">
        <div class="col-md-2">
          <p>CONDITION</p>
          <h6>
            <i class="wi wi-cloud"></i>
          </h6>
          <p id="description2">Sunny</p>
        </div>
        <div class="col-md-2">
          <p>HIGH</p>
          <h6>
            <i class="wi wi-cloud-up"></i>
          </h6>
          <p id="high">88°F</p>
        </div>
        <div class="col-md-2">
          <p>LOW</p>
          <h6>
            <i class="wi wi-cloud-down"></i>
          </h6>
          <p id="low">50°F</p>
        </div>
        <div class="col-md-2">
          <p>HUMIDITY</p>
          <h6>
            <i class="wi wi-humidity"></i>
          </h6>
          <p id="humidity">10%</p>
        </div>
        <div class="col-md-2">
          <p>WIND SPEED</p>
          <h6>
            <i class="wi wi-strong-wind"></i>
          </h6>
          <p id="wind">windy 20 NE</p>
        </div>
        <div class="col-md-2">
          <p>REAL FEEL</p>
          <h6>
            <i class="wi wi-thermometer"></i>
          </h6>
          <p id="feelslike">80°F</p>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
