"use client"
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Favorites() {
  const [savedCities, setSavedCities] = useState([]);
  const [className, setClassName] = useState("hidden");

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("savedCities"));
    setSavedCities(localStorageData || []);
  }, []);

  const handleDelete = async (cityId) => {
    const updatedCities = savedCities.filter((city) => city.id !== cityId);
    setSavedCities(updatedCities);
    localStorage.setItem("savedCities", JSON.stringify(updatedCities));
    setClassName("showed")
    setTimeout(() => setClassName("hidden"), 3000);
  }

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
                <button onClick={() => handleDelete(city.id)} className="delete-button">
                  <img src='../trash-can-solid.svg'></img>
                </button>
              </div>
              <div className="city-info center-column">
                <h2>{city.name}</h2>
                <div className="city-info">
                  <p>Latitude: {city.latitude}</p>
                  <p>Longitude: {city.longitude}</p>
                  <p>Time Zone: {city.timezone}</p>
                </div>
                <div>
                  <a className="more-button" href={`/favorites/${city.id}`}>More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`messagedel ${className}`}>
                  <p>Removed from Favorites</p>
            </div>
      </div>
    </div>
  );
}