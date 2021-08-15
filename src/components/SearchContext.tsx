import React, { createContext, useState } from "react";
import axios from "axios";
import ProviderResponse from "../models/provider-response";

// searchResults is the state
// performSearch is a function for changing the state.
const BACKEND_URL = "http://heartrans-back.herokuapp.com";

export type SearchContextType = {
  searchResults: ProviderResponse[];
  performSearch: (searchTerm: string) => Promise<ProviderResponse[]>;
};

export const SearchContext = createContext({} as SearchContextType);

// Defining a simple HOC component
export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ProviderResponse[]>([]);

  const performSearch = async (searchTerm: string) => {
    // do the api call in
    return axios
      .get(`${BACKEND_URL}/providers`)
      .then(async (response) => {
        const data: ProviderResponse[] = await response.data.providersResponses;
        setSearchResults(data);
        return data;
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("ooopsie Daisy, couldn't get locations on our map!! 😖 ");
        return [];
      });
  };

  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
