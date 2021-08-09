import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchResultsList } from "../components/SearchResultsList";

export interface Info {
  name: string;
  avgReview: string;
  specialty: string;
  id: number;
}

// export interface IState {
//   resultsInfo: {
//     name: string;
//     avgReview: string;
//     specialty: string;
//     id: number;
//   }[];
// }

export function SearchResults() {
  const [results, setResults] = useState<Info[]>([]);
  //   {
  //     name: "Dr. Drew",
  //     avgReview: "5",
  //     specialty: "psychiatry",
  //     id: 1,
  //   },
  //   {
  //     name: "Dr. Hannah",
  //     avgReview: "5",
  //     specialty: "gastrointerology",
  //     id: 2,
  //   },
  //   {
  //     name: "Baker's Clinic",
  //     avgReview: "5",
  //     specialty: "vet",
  //     id: 3,
  //   },
  // ]);

  // const onSearch = (searchTerm: string) => {
  //   // api request with the seachterm
  //   // setResults(/*result of the api request*/)
  // };

  return (
    <div>
      {/* <NavBar /> */}
      {/* add search summary results component */}
      {/* cards component list */}
      {/* commented line below, uncomment when done with css */}
      {/* <SearchResultsList results={results} /> */}
      <SearchResultsList />
      {/* map component */}
    </div>
  );
}
