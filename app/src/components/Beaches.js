import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
// Components
// import SearchForm from './SearchForm';
import Beach from './Beach';

const Beaches = props => {
    //console.log("Beaches props:", props.beaches.data)
    const [beaches, setBeaches] = useState(props.beaches.data)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        props.getData()
    }, []);

    useEffect(() => {
        setBeaches(props.beaches.data)
    }, [props.beaches])

    const handleChanges = e => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        const searchResults = props.beaches.data.filter(beach => beach.beach.toLowerCase().includes(searchTerm.toLowerCase()))
        setBeaches(searchResults);
        setSearchTerm('');
    }

    //console.log({searchTerm});
    //console.log({beaches});

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    name="searchTerm"
                    placeholder="Find your favorite beach..."
                    value={searchTerm}
                    onChange={handleChanges}
                />
                <button type="submit">Search</button>
            </form>
            {props.isFetchingData ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {(!beaches) ? <p>Loading...</p> : 
                        beaches.map(beach => {
                            return (
                                <Beach 
                                    key={beach.beach_id}
                                    beach={beach} 
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