import React, { createContext, useState } from "react";

// query is the state
// SearchHandler is a function for changing the state.
// export const SearchContext = React.createContext({
//     query: "",
//     searchHandler: () => {},
// });
export type SearchContextType = {
  searchResults: [];
  setSearchResults: () => void;
};

export const SearchContext = createContext<SearchContextType>({
  searchResults: [],
  setSearchResults: () => {},
});

// Defining a simple HOC component
export const SearchContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{ searchResults: [], setSearchResults: () => {} }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
