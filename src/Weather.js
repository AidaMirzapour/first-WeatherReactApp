import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [detail, setDetail] = useState("");

  function getTemperature(response) {
    setLoad(true);
    setDetail({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleForm(event) {
    event.preventDefault();
    if (city !== "") {
      let apiKey = "97bed167ec49bff56e6c1b63daef9c86";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(getTemperature);
    } else {
      setDetail("");
    }
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form onSubmit={handleForm}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={getCity}
      ></input>
      <input type="submit" value={"Search"}></input>
    </form>
  );

  if (load === true) {
    return (
      <div className="Weather">
        {searchForm}
        <ul>
          <li>Temperature: {detail.temperature}°C</li>
          <li>Description: {detail.description}</li>
          <li>Humidity: {detail.humidity}%</li>
          <li>Wind: {detail.wind}km/h</li>
          <li>
            <img src={detail.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {searchForm}
      </div>
    );
  }
}
