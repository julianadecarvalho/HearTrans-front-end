<<<<<<< HEAD
import React from "react";
import NavBar from "../components/NavBar";
=======
import React, { useContext, useState } from "react";
import { SearchContext } from "../components/SearchContext";
>>>>>>> ff632609f1dd10126c80f107760226ba957fc3e3
import { SearchResultsList } from "../components/SearchResultsList";
import SimpleMap from "../components/Map";

// export interface Info {
//   name: string;
//   avgReview: string;
//   specialty: string;
//   id: number;
// }

// export interface IState {
//   resultsInfo: {
//     name: string;
//     avgReview: string;
//     specialty: string;
//     id: number;
//   }[];
// }

export function SearchResults() {
  // const [results, setResults] = useState<Info[]>([]);
  // {
  //   name: "Dr. Drew",
  //   avgReview: "5",
  //   specialty: "psychiatry",
  //   id: 1,
  // },
  // {
  //   name: "Dr. Hannah",
  //   avgReview: "5",
  //   specialty: "gastrointerology",
  //   id: 2,
  // },
  // {
  //   name: "Baker's Clinic",
  //   avgReview: "5",
  //   specialty: "vet",
  //   id: 3,
  // },
  // ]);

  // const onSearch = (searchTerm: string) => {
  //   // api request with the seachterm
  //   // setResults(/*result of the api request*/)
  // };

  return (
<<<<<<< HEAD
    <div style={{ height: '100%', width: '100%' }}>
      <NavBar />
=======
    <div>
      {/* <NavBar /> */}
>>>>>>> ff632609f1dd10126c80f107760226ba957fc3e3
      {/* add search summary results component */}
      {/* cards component list */}
      <SearchResultsList />
      <SimpleMap/>
    </div>
  );
}
