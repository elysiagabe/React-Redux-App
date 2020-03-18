import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
// import SearchForm from './SearchForm';
import Beach from './Beach';

const Beaches = props => {
    console.log("Beaches props:", props.beaches.data)

    useEffect(() => {props.getData()}, []);

    return (
        <div>
            {props.isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>These are beaches:</h3>
                    {(!props.beaches.data) ? <p>Loading...</p> : 
                        props.beaches.data.map(beach => {
                            return (
                                <Beach 
                                    key={beach.beach_id}
                                    name={beach.beach}
                                    island={beach.island}
                                    shore={beach.shore}
                                    weather={beach.weather}
                                    temp={beach.temp}
                                    wind={beach.wind}
                                    surf={beach.surf}
                                    nearshore={beach.nearshore}
                                    offshore={beach.offshore}
                                    urlSrc={beach.link}
                                />
                            )
                        })
                    }
                    
                </div>
            )}
            
        </div>
    )
}

const mapStateToProps = state => {
    return { beaches: state.beaches };
}

export default connect(mapStateToProps, { getData })(Beaches);