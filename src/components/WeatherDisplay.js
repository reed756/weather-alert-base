import React from 'react'

function WeatherDisplay(props) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.direction}</p>
            <p>{props.speed}</p>
            <p>{props.gust}</p>
        </>
    )
}

export default WeatherDisplay
