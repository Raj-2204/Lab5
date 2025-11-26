import { useEffect, useState } from "react";
import profileImg from "../assets/photo.JPG";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadWeather() {
      try {
        const res = await fetch("https://lab5-5hxb.onrender.com/weather");
        if (!res.ok){
          throw new Error("Failed to fetch weather");
        } 
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("weather not available");
        console.log(err);
      }
    }
    loadWeather();
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold mb-3">Welcome to My Portfolio</h1>
          {error && (
            <div className="alert alert-danger shadow-sm">{error}</div>
          )}
          {weather && (
            <div className="alert alert-info shadow-sm">
              <strong>Weather in {weather.city}:</strong><br />
              Temperature: {weather.temperature}°C<br />
              Humidity: {weather.humidity}%
            </div>
          )}
          <p className="lead">
            Hi, I'm <strong>Rajveer Singh</strong>, a Computer Science student at Dalhousie University.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img 
            src={profileImg} 
            alt="Rajveer"
            className="img-fluid rounded-circle shadow-sm home-profile-img"
          />
        </div>

      </div>
    </div>
  );
}
