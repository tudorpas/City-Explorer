"use client";

import Navbar from "../components/navbar"
import Result from "../components/results"
import React, { UseEffect, useEffect, useState } from 'react';
import '../css/globals.css'
import '../css/search.css'




export default function Search() {

    // const [image, setImage] = useState("");
    const [cities, setCities] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit ran');
        console.log('city 👉️', input);
        fetchCity(input)
        // fetchCityImage(input)
        // console.log(image)
    }

    // const fetchCityImage = async (input) => {
    //     const inputImageResults = await fetch(`https://api.teleport.org/api/urban_areas/slug:${input}/images/`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             return data.photos
    //         })
    //         .then(image =>{
    //             console.log(image)
    //         })
    //                     .then(image =>{
    //             console.log(image)
    //         })
    //         const updateImages = async () => {
    //             const imageRes = await inputImageResults;
    //             setImage(imageRes);
    //         }
    //         updateImages();
    // }


    const fetchCity = async (input) => {
        const inputResults = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                return data
            })
            .then(citiesarr => {
                return citiesarr.results
            }).catch(error => { console.error(error) });

        const updateCities = async () => {
            const citiesRes = await inputResults;
            setCities(citiesRes);
        }
        updateCities();
    }




    return (
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
                    </form>
                </div>
                <Result props={...cities}/>
            </div>

        </>

    )
}