"use client"
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Favorites() {
  const [savedCities, setSavedCities] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("savedCities"));
    setSavedCities(localStorageData || []);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="favorite-title-container">
        <h1 className="favorite-title">Favorite Cities</h1>
      </div>
      <div className="favorites-page-container">
        <div className="favorites-container">
          {savedCities?.slice().reverse().map((city) => (
            <div className="result" key={city.id}>
              <div className="city-country">
                <p>{city.country}</p>
              </div>
              <div className="city-info center-column">
                <h2>{city.name}</h2>
                <div className="city-info">
                  <p>Latitude: {city.latitude}</p>
                  <p>Longitude: {city.longitude}</p>
                  <p>Time Zone: {city.timezone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}