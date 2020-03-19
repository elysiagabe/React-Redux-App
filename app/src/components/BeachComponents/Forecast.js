import React from 'react';
// Icons 
import Wind from '../../assets/wind.svg';
import Surf from '../../assets/surf.svg';

// Condition Messages
const lowHazard = "Approach the ocean with caution. Be vigilant of changing conditions, espeically at beachs known for strong shore breaks. Weak swimmers should not venture offshore.";
const highHazard = "Swimmers are advised to stay out of the ocean. Currents and surge on the beach are quite strong and shore break can cause injury."
const notAvailable = "Conditions do not apply to this location."

const Forecast = props => {

    return (
        <div className="forecast">
            {/* WIND */}
            <div>
                <div className="forecast-title">
                    <img src={Wind} alt="wind illustration"/>
                    <h3>Wind Forecast</h3>
                </div>
                <p>{props.wind}</p>
            </div>
            {/* SURF */}
            <div>
                <div className="forecast-title">
                    <img src={Surf} alt="surf illustration"/>
                    <h3>Surf Forecast</h3>
                </div>
                <p>{props.surf}</p>
            </div>
            {/* NEARSHORE */}
            <div>
                <h3>Nearshore Conditions</h3>
                <p>
                {props.nearshore === 'low' ? `${lowHazard}` : null}
                {props.nearshore === 'high' ? `${highHazard}` : null}
                {props.nearshore === 'na' ? `${notAvailable}` : null}
                </p>
            </div>
            {/* OFFSHORE */}
            <div>
                <h3>Offshore Conditions</h3>
                <p>
                {props.offshore === 'low' ? `${lowHazard}` : null}
                {props.offshore === 'high' ? `${highHazard}` : null}
                {props.offshore === 'na' ? `${notAvailable}` : null}
                </p>
            </div>

        </div>
    )
}

export default Forecast;