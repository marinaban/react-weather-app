import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
  rootElement
);
