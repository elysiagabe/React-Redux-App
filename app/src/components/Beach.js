import React from 'react';
// Components
import Weather from './BeachComponents/Weather';
import Forecast from './BeachComponents/Forecast';

const Beach = ({beach}) => {
    //console.log('Beach props:', props)
    return (
        <div className="beach-card">
            <div className="beach-header">
                <h2>{beach.beach}</h2>    
                <p className="island-label">{beach.island}</p>
            </div>
            <div className="beach-info">
                <Weather 
                    weather={beach.weather}
                    temp={beach.temp}
                />
                <Forecast 
                    wind={beach.wind}
                    surf={beach.surf}
                    nearshore={beach.nearshore}
                    offshore={beach.offshore}
                />
                
                <a href={beach.link} target="_blank" rel="noopener noreferrer" className="beach-link">Learn More &rarr;</a>
            </div>
        </div>
    )
}

export default Beach;