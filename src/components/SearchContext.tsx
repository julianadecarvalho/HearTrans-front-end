import React, { createContext, useState } from "react";
import axios from "axios";
import ProviderResponse from "../models/provider-response";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export type SearchContextType = {
  searchResults: ProviderResponse[];
  performSearch: (
    searchQuery: string,
    value: any
  ) => Promise<ProviderResponse[]>;
};

export const SearchContext = createContext({} as SearchContextType);

// Defining a simple HOC component
export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ProviderResponse[]>([]);
  // pass in locationQuery here as parameter
  const performSearch = async (searchQuery: string, locationQuery: any) => {
    // do the api call in
    console.log("helo");
    console.log(REACT_APP_BACKEND_URL);
    return (
      axios
        // uncomment this when the search location route is ready
        // .get(
        //   `${REACT_APP_BACKEND_URL}/providers/query/${encodeURI(
        //     searchQuery
        //   )}/${encodeURI(locationQuery)}`
        // )
        .get(
          `${REACT_APP_BACKEND_URL}/providers/query/${encodeURI(searchQuery)}}`
        )
        .then(async (response) => {
          const data: ProviderResponse[] = await response.data
            .providersResponses;
          setSearchResults(data);
          return data;
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("ooopsie Daisy, couldn't get locations on our map!! 😖 ");
          return [];
        })
    );
  };
  // comment
  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
