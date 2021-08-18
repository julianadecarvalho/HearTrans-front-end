import React, { createContext, useState } from "react";
import axios from "axios";
import ProviderResponse from "../models/provider-response";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export type SearchContextType = {
  searchResults: ProviderResponse[];
  performSearch: (
    searchQuery: string,
    locationTerm: string,
    locationQuery: any
    value: any
  ) => Promise<ProviderResponse[]>;
};

export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ProviderResponse[]>([]);
  const performSearch = async (
    searchQuery: string,
    locationQuery: any,
    locationTerm: string
  ) => {
    return (
      axios
        // uncomment this when the search location route is ready
        // .get(
        //   `${REACT_APP_BACKEND_URL}/providers/query/${encodeURI(
        //     searchQuery
        //   )}/${encodeURI(locationQuery)}`
        // )
        .get(
          `${REACT_APP_BACKEND_URL}/providers/query/${encodeURI(
            searchQuery + " " + locationTerm
          )}}`
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

  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
