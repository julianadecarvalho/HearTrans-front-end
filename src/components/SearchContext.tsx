import React, { createContext, useState } from "react";
import axios from "axios";
import ProviderResponse from "../models/provider-response";

// edit to take shape of api request data
// export interface Info {
//   fullName: string;
//   otherNames: string[];
//   pronouns: string;
//   titles: string[];
//   specialties: string[];
//   languages: string[];
//   services: string[];
//   remoteVisits: boolean;
//   slidingScalePay: boolean;
//   reviews: unknown[];
//   locations: unknown[];
//   avgReview: number;
//   id: number;
// }

// searchResults is the state
// performSearch is a function for changing the state.

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
      .get(`${process.env.BACKEND_URL}/providers`)
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
