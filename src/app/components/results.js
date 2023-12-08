import '../css/search.css'
import { useState, useEffect } from "react"



export default function Result( {props} ){
        const [className, setClassName] = useState("hidden");
        const [savedCities, setSavedCities] = useState([]);

        useEffect(() => {
            const localStorageData = JSON.parse(localStorage.getItem('savedCities'));
            setSavedCities(localStorageData || []);
          }, []);

        const handleSubmit = async (city) =>{
            const updatedCities = [...savedCities, city];

            // Update state and local storage
            setSavedCities(updatedCities);
            localStorage.setItem("savedCities", JSON.stringify(updatedCities));
    
            // Show the message
            setClassName("showed");
            setTimeout(() => setClassName('hidden'), 3000);
            
    }

    return(
        <div className="results-page-container">
            <div className="results-container">

                        {  
                            props?.map(city => (
                                <div className="result" key={city.id}>
                                    <div className="city-country">
                                        <button onClick={() => handleSubmit(city)}>
                                            <img src="star-regular.svg" />
                                        </button>
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
                            ))
                        }   
                    </div>
            <div className={`message ${className}`}>
                    <p>Added to Favorites</p>
            </div>
        </div>
    )
}