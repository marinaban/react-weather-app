import React from "react";

import Wind from "./img/wind.png";
import Humidity from "./img/humidity.png";
import Temperature from "./img/thermometer.png";

export default function Body() {
  return (
    <div>
      <h1>City</h1>
      <div className="row">
        <div className="col-6 pl-5">
          <div id="date">Date</div>
          <span id="temperature" className="current-temperature-number">
            0
          </span>

          <span className="degree">
            <a href="/" id="celsius" className="active">
              ° C
            </a>{" "}
            |
            <a href="/" id="fahrenheit">
              °F
            </a>
            <img
              src={Temperature}
              alt="temperature"
              width="20"
              className="termometer-icon"
            />
          </span>
          <ul className="current-details">
            <li>
              <img src={Humidity} alt="humidity" width="15" />
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              <img src={Wind} alt="windy" width="15" /> Wind:
              <span id="wind"></span>km/h
            </li>
          </ul>
        </div>
        <div className="col-6 icon">
          <img src="" alt="" width="150" id="icon" />
          <p className="weather-description" id="description"></p>
        </div>
      </div>
    </div>
  );
}
