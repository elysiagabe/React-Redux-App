import React from 'react';

const Beach = props => {
    console.log('Beach props:', props)
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.island}</p>
            </div>
            <p>{props.shore}</p>
            <div>
                Current Weather: {props.weather} and {props.temp}
            </div>
            <div>
                <p>Wind: {props.wind}</p>
                <p>Surf: {props.surf}</p>
            </div>
            <div>
                <p>{props.nearshore}</p>
                <p>{props.offshore}</p>
            </div>
            <a href={props.urlSrc} target="_blank">See More</a>
        </div>
    )
}

export default Beach;