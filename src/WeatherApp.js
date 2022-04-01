import "./Body.css";
import Footer from "./Footer";
import Body from "./Body";
import Form from "./Form";

import BackgroundImg from "./img/world.jpg";

export default function WeatherApp() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: `url("${BackgroundImg}")`, height: "635px" }}
    >
      <div className="container w-50">
        <div className="row">
          <div
            className="col mt-5 p-4"
            style={{ backgroundColor: "rgba(255, 228, 196, 0.1)" }}
          >
            <Form />
            <Body />
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
