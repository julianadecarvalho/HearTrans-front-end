import React, { useState } from "react";


// query is the state
// SearchHandler is a function for changing the state.
export const SearchContext = React.createContext({
    query: "",
    searchHandler: () => {},
});

// Defining a simple HOC component
const SearchContextProvider = (props) => {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchContext.Provider
        value={{ searchResults: searchResults, setSearchResults: setSearchResults }}
        >
        {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;