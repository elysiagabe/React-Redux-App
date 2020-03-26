import React from 'react';
// Icons 
import Wind from '../../assets/wind.svg';
import Surf from '../../assets/surf.svg';

// Condition Messages
const lowHazard = "Approach the ocean with caution. Be vigilant of changing conditions, espeically at beaches known for strong shore breaks. Weak swimmers should not venture offshore.";
const highHazard = "Swimmers are advised to stay out of the ocean. Currents and surge on the beach are quite strong and shore break can cause injury."
const extremeHazard = "Conditions are extremely dangerous and may lead to injury. Swimmers, kayakers and users of other unpowered craft are advised to stay out of the ocean."
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
                {props.nearshore === 'low' && `Caution: ${lowHazard}`}
                {props.nearshore === 'high' && `High Hazard: ${highHazard}`}
                {props.nearshore === 'na' && `${notAvailable}`}
                {props.nearshore === 'extreme' && `Extreme Hazard: ${extremeHazard}`}
                </p>
            </div>
            {/* OFFSHORE */}
            <div>
                <h3>Offshore Conditions</h3>
                <p>
                {props.offshore === 'low' && `Caution: ${lowHazard}`}
                {props.offshore === 'high' && `High Hazard: ${highHazard}`}
                {props.offshore === 'extreme' && `Extreme Hazard: ${extremeHazard}`}
                {props.offshore === 'na' && `${notAvailable}`}
                </p>
            </div>

        </div>
    )
}

export default Forecast;