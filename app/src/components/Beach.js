import React from 'react';
// Components
import Weather from './BeachComponents/Weather';

const Beach = ({beach}) => {
    //console.log('Beach props:', props)
    return (
        <div>
            <div>
                <h2>{beach.name}</h2>
                <p>{beach.island}</p>
            </div>
            <p>{beach.shore}</p>
            <Weather 
                weather={beach.weather}
                temp={beach.temp}
            />
            <div>
                <p>Wind: {beach.wind}</p>
                <p>Surf: {beach.surf}</p>
            </div>
            <div>
                <p>{beach.nearshore}</p>
                <p>{beach.offshore}</p>
            </div>
            <a href={beach.link} target="_blank" rel="noopener noreferrer" >See More</a>
        </div>
    )
}

export default Beach;