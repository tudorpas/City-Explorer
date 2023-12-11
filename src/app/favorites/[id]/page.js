// [id] folder with page.js
"use client"
import Navbar from "../../components/navbar";

import { useEffect, useState } from "react";


export default function Page({ params }) {


  const [cityData, setCityData] = useState();
  const [weatherData, setWeatherData] = useState();
  
  

  const weatherAPI = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = await fetchSearchResults(params.id);
        setCityData(city);
        const weather = await fetchWeather(city.latitude, city.longitude)
        setWeatherData(weather)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const fetchSearchResults = async (id) => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/get?id=${id}`);
      const city = await response.json();
      console.log(city);
      return city;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${latitude},${longitude}&aqi=no`);
      const weather = await response.json();
      console.log(weather);
      return weather;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };


  return (
    <>
      <Navbar />
      
      <div className="id-container">
       {weatherData &&(
                <div className="weather-container">
                  <div className="condition-container">
                    <h2>Condition:</h2>
                    <p className="sub-title">{weatherData.current.condition.text}</p>
                    <img src={weatherData.current.condition.icon}/>
                    <p className="precipitation">{weatherData.current.precip_mm} mm</p>
                  </div>
                  <div className="condition-container">
                    <h2>Temperature:</h2>
                    <p className="sub-title">{weatherData.current.temp_c}&deg;C</p>
                    <img className="temperature-icon" src='../../temperature-half-solid.svg'/>
                    <p className="feelslike">Feels like: {weatherData.current.feelslike_c}&deg;C</p>
                  </div>
                  <div className="condition-container">
                    <h2>Wind:</h2>
                    <p className="sub-title">{weatherData.current.wind_kph} Km/H</p>
                    <img className="wind-icon" src='../../wind-solid.svg'/>
                    <p className="wind-direction">Wind direction: {weatherData.current.wind_dir}</p>
                  </div>
                </div>
      )}
      {cityData && weatherData && (  
        <div className="city-container">
          <div className="city-info-container">
            <h1>City Name: {cityData.name}</h1>
            <h2>Country: {cityData.country}</h2>
            <p>Latitude: {cityData.latitude}</p>
            <p>Longitude: {cityData.longitude}</p>
            <p>Local Date & Time: {weatherData.location.localtime}</p>
          </div>
        </div>
      )}
      </div>
    </>
  );
}