import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/actions';

import SearchForm from './SearchForm';
import Beach from './Beach';

const Beaches = props => {
    console.log("Beaches props:", props.beaches.data)

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };


    return (
        <div>
            {props.isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <button onClick={handleGetData}>Get Beach Conditions</button>
                    <h3>Beaches:</h3>
                    <Beach />
                </div>
            )}
            
        </div>
    )
}

const mapStateToProps = state => {
    return { beaches: state.beaches };
}

export default connect(mapStateToProps, { getData })(Beaches);