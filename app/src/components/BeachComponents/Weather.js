import React from 'react';
// Weather Icons
import Sunny from '../../assets/sunny.svg'
import FewClouds from '../../assets/fewClouds.svg';
import MostlyCloudy from '../../assets/mostlyCloudy.svg';
import OverCast from '../../assets/overcast.svg';
import PartlyCloudy from '../../assets/partlyCloudy.svg';
import LightRain from '../../assets/lightRain.svg';
import Thunderstorm from '../../assets/thunderstorm.svg';

const Weather = props => {
    //console.log('weather props:', props)

    function getWeatherImg() {
        if (props.weather === 'A Few Clouds') {
            return FewClouds
        } else if (props.weather === 'Mostly Cloudy') {
            return MostlyCloudy
        } else if (props.weather === 'Overcast') {
            return OverCast
        } else if (props.weather === 'Partly Cloudy') {
            return PartlyCloudy
        } else if (props.weather === 'Light Rain and Breezy' || props.weather === 'Light Rain') {
            return LightRain
        } else if (props.weather === 'Thunderstorm Heavy Rain' || props.weather === 'Thunderstorm Rain') {
            return Thunderstorm
        } else {
            return Sunny;
        }
    }

    return (
        <div className="beach-weather">
            <img src={getWeatherImg()} alt="weather illustration" className="weather-icon" />
            <p>Currently {props.temp}&deg; F and {props.weather}</p>
        </div>
    )
}

export default Weather;