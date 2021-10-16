import React, { useState } from 'react'
import WeatherDisplay from './WeatherDisplay';
import WeatherForm from './WeatherForm';

function WeatherFinder() {

    const [weatherLocation, setWeatherLocation] = useState('');
    const [windDirection, setWindDirection] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [windGust, setWindGust] = useState('');

    const getWeatherData = async(value) => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2d5ed2f42a6650224e2a6f20047d7b76`, {mode: 'cors'});
            let weatherData = await response.json();
            console.log(weatherData);
            setWindDirection(weatherData.wind.deg);
            setWindSpeed(weatherData.wind.speed);
            setWindGust(weatherData.wind.gust);
        } catch(err) {
            alert("Please enter a real location!");
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherData(weatherLocation)
    }

    const handleChange = (e) => {
        setWeatherLocation(e.target.value);
    }

    return (
        <>
            <WeatherForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <WeatherDisplay
                name={weatherLocation}
                direction={windDirection}
                speed={windSpeed}
                gust={windGust}
            />
        </>
    )
}

export default WeatherFinder
