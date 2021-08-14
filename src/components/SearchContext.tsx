import React, { createContext, useState } from "react";
import axios from "axios";

// edit to take shape of api request data
export interface Info {
  fullName: string;
  otherNames: string[];
  pronouns: string;
  titles: string[];
  specialties: string[];
  languages: string[];
  services: string[];
  remoteVisits: boolean;
  slidingScalePay: boolean;
  reviews: unknown[];
  locations: unknown[];
  avgReview: number;
  id: number;
}
// searchResults is the state
// performSearch is a function for changing the state.

export type SearchContextType = {
  searchResults: Info[];
  performSearch: (searchTerm: string) => Promise<LocationResponse[]>;
};

export const SearchContext = createContext({} as SearchContextType);
// searchResults: [],
// setSearchResults: () => {},

// Defining a simple HOC component
export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = useState<Info[]>([]);

  const performSearch = async (searchTerm: string) => {
    // do the api call in here
    axios
      .get(`${process.env.BACKEND_URL}/providers`)
      .then((response) => {
        setSearchResults(response.data.locations.providers);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("ooopsie Daisy, couldn't get locations on our map!! 😖 ");
      });

    // const results = [
    //   {
    //     fullName: "dr. drew",
    //     otherNames: ["drew", "hannah"],
    //     pronouns: "she/her",
    //     titles: ["MD", "NP"],
    //     specialties: ["Primary Care", "Family Health"],
    //     languages: ["english", "spanish"],
    //     services: ["STI", "XRAY"],
    //     remoteVisits: true,
    //     slidingScalePay: true,
    //     reviews: ["hello"],
    //     // what shape are the lat/lon coordinates in object? array?
    //     locations: [{ latitude: 47.6097, longitude: -122.3422 }],
    //     avgReview: 4,
    //     id: 1,
    //   },
    //   {
    //     fullName: "dr. drew",
    //     otherNames: ["drew", "hannah"],
    //     pronouns: "she/her",
    //     titles: ["MD", "NP"],
    //     specialties: ["Primary Care", "Family Health"],
    //     languages: ["english", "spanish"],
    //     services: ["STI", "XRAY"],
    //     remoteVisits: true,
    //     slidingScalePay: true,
    //     reviews: ["hello"],
    //     // what shape are the lat/lon coordinates in object? array?
    //     locations: [{ latitude: "59.95", longitude: "30.33" }],
    //     avgReview: 3.5,
    //     id: 2,
    //   },
    //   {
    //     fullName: "dr. drew",
    //     otherNames: ["drew", "hannah"],
    //     pronouns: "she/her",
    //     titles: ["MD", "NP"],
    //     specialties: ["Primary Care", "Family Health"],
    //     languages: ["english", "spanish"],
    //     services: ["STI", "XRAY"],
    //     remoteVisits: true,
    //     slidingScalePay: true,
    //     reviews: ["hello"],
    //     // what shape are the lat/lon coordinates in object? array?
    //     locations: [{ latitude: "59.95", longitude: "30.33" }],
    //     avgReview: 5,
    //     id: 3,
    //   },
    //   {
    //     fullName: "dr. drew",
    //     otherNames: ["drew", "hannah"],
    //     pronouns: "she/her",
    //     titles: ["MD", "NP"],
    //     specialties: ["Primary Care", "Family Health"],
    //     languages: ["english", "spanish"],
    //     services: ["STI", "XRAY"],
    //     remoteVisits: true,
    //     slidingScalePay: true,
    //     reviews: ["hello"],
    //     // what shape are the lat/lon coordinates in object? array?
    //     locations: [{ latitude: "59.95", longitude: "30.33" }],
    //     avgReview: 5,
    //     id: 4,
    //   },
    // ];
    // const promise = new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     setSearchResults(results); // this the important line
    //     resolve();
    //   }, 500);
    // });
    // return Promise;
  };

  return (
    <SearchContext.Provider value={{ searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
