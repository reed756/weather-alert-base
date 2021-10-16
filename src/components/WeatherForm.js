import React from 'react'

function WeatherForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                onChange={props.handleChange}
            ></input>
        </form>
    )
}

export default WeatherForm
