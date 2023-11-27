"use client";

import Navbar from "../components/navbar"
import React, {UseEffect ,useEffect,useState} from 'react';
import '../css/globals.css'
import '../css/search.css'



export default function Search(){

    const [cities, setCities] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit ran');
        console.log('city 👉️', input);
        fetchCity(input)
    }


    const fetchCity = async (input) => {
        const inputResults = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`)
      .then(response => {
        return  response.json()
        })
      .then(data => {  
        return data
        })
      .then(citiesarr =>{
        return citiesarr.results          
      }).catch(error => {console.error(error)});

        const updateCities = async () => {
            const citiesRes = await inputResults;
            setCities(citiesRes);
        }   
        updateCities();
    }



    
    return(
        <>
            <Navbar></Navbar>
            <div className="container-search center-column">
                <h1 className="h1">Search City</h1>
                <div className="center-row">
                    <form onSubmit={handleSubmit} className="center-row">
                        <input required onChange={event => setInput(event.target.value)} value={input} type="text" placeholder="Search" name="city" className="text-input"></input>
                        <button type="submit" className="search-button">
                            <img src="search-icon.svg"></img>
                        </button>
                    
                              <div>
                                <ul className="result">
                                    {
                                    cities?.map(city => (
                                        <li key={city.id}>{city.name}</li>
                                    ))}
                                </ul>
                            </div>     
                    </form>
                </div>
            </div>
        </>

    )
}