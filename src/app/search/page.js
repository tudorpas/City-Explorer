"use client";

import Navbar from "../components/navbar";
import Result from "../components/results";

import React, { UseEffect, useEffect, useState } from "react";
import { useRouter } from "next/router";

import "../css/globals.css";
import "../css/search.css";

export default function Search() {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const inputResults = await fetchCity(input);
      setCities(inputResults);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCity = async (input) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`
    );
    const data = await response.json();
    return data.results;
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-search center-column">
        <h1 className="h1">Search a city</h1>
        <div className="center-row">
          <form onSubmit={handleSubmit} className="center-row">
            <input
              required
              onChange={(event) => setInput(event.target.value)}
              value={input}
              type="text"
              placeholder="Search"
              name="city"
              className="text-input"
            ></input>
            <button type="submit" className="search-button">
              <img src="search-icon.svg"></img>
            </button>
          </form>
        </div>
        <Result props={cities} />
      </div>
    </>
  );
}
