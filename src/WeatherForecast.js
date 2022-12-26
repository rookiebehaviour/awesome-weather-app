import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "f10daba5t5ce3fc3ed35o46ebd038a42";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&units=imperial&key=${apiKey}`;

  axios.get(url).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
              alt="Scattered clouds"
              className="WeatherForecast-icons"
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">16°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
