import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import Beach from './Beach';

const Beaches = props => {
    console.log("Beaches props:", props)

    return (
        <div>
            <SearchForm />
            <h3>These are beaches: </h3>
            <Beach />
        </div>
    )
}

const mapStateToProps = state => {
    return { beaches: state.beaches };
}

export default connect(mapStateToProps, {})(Beaches);