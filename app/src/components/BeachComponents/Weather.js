import React from 'react';

const Weather = props => {
    console.log('weather props:', props)
    return (
        <div>




            <h4>Current Weather</h4>
            <p>{props.temp}&deg; and {props.weather}</p>
        </div>
    )
}

export default Weather;