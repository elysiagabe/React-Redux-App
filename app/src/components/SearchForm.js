import React, { useState } from 'react';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChanges = e => {
        setSearchTerm(e.target.value)
    }

    console.log('I am search term:', searchTerm);

    return (
        <form>
            <input 
                type="text"
                name="searchTerm"
                placeholder="Find your favorite beach..."
                value={searchTerm}
                onChange={handleChanges}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;