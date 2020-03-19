import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
// Components
import Beach from './Beach';

const islands = [
    {name: 'Oahu'},
    {name: 'Maui'},
    {name: 'Kauai'},
    {name: 'Big Island'}
]

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
        const searchResults = props.beaches.data.filter(beach => beach.beach.toLowerCase().includes(searchTerm.toLowerCase()) || beach.island.toLowerCase().includes(searchTerm.toLowerCase()))
        setBeaches(searchResults);
        setSearchTerm('');
    }

    const filterByIsland = islandName => {
        const filteredResults = props.beaches.data.filter(beach => beach.island.toLowerCase().includes(islandName.toLowerCase()));
        setBeaches(filteredResults);
    }

    //console.log({searchTerm});
    //console.log({beaches});

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    name="searchTerm"
                    placeholder="Find your beach..."
                    value={searchTerm}
                    onChange={handleChanges}
                />
                <button type="submit">Search</button>
            </form>
            <div className="filter">
                <p>Or filter by island:</p>
                <div className="islands">
                    {islands.map(island => {
                        return (
                            <div className="island-filter" onClick={() => filterByIsland(island.name)}>{island.name}</div>
                        )
                    })}
                </div>
            </div>
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