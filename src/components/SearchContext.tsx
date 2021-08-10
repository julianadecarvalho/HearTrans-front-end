import React, { createContext, useState } from "react";

// edit to take shape of api request data
export interface Info {
  name: string;
  avgReview: string;
  specialty: string;
  id: number;
}
// query is the state
// SearchHandler is a function for changing the state.
// export const SearchContext = React.createContext({
//     query: "",
//     searchHandler: () => {},
// });
export type SearchContextType = {
  searchResults: Info[];
  performSearch: (searchTerm: string) => Promise<void>;
};

export const SearchContext = createContext({} as SearchContextType);
// searchResults: [],
// setSearchResults: () => {},

// Defining a simple HOC component
export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = useState<Info[]>([]);

  const performSearch = async (searchTerm: string) => {
    // do the api call in here
    const results = [
      {
        name: "Dr. Drew",
        avgReview: "5",
        specialty: "psychiatry",
        id: 1,
      },
      {
        name: "Dr. Hannah",
        avgReview: "5",
        specialty: "gastrointerology",
        id: 2,
      },
      {
        name: "Baker's Clinic",
        avgReview: "5",
        specialty: "vet",
        id: 3,
      },
    ];
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
        setSearchResults(results); // this the important line
        resolve();
      }, 500);
    });
    return promise;
  };

  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
