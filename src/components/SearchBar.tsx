import React, { useState, useContext, useEffect } from "react";
import styles from "./SearchBar.module.css";
<<<<<<< HEAD
import LocationAutocomplete  from "../components/LocationAutocomplete"
=======
import { SearchContext } from "./SearchContext";
import { Link } from "react-router-dom";
// save search term in useState

//copied from search results
const onSearch = (searchTerm: string) => {
  // api request with the seachterm
  // setResults(/*result of the api request*/)
};
>>>>>>> ff632609f1dd10126c80f107760226ba957fc3e3

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  //new handlers for the search results
  const { performSearch } = useContext(SearchContext);

  // const searchResultsHandler = () => {
  //   //onClick (searchresults) for api call for get request
  //   performSearch(searchQuery)
  // };

  console.log({ searchQuery });
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className={"button is-static is-medium"}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
<<<<<<< HEAD
            placeholder="doctors, clinics, specialties..."
=======
            placeholder="doctors, clinics, specialities..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
>>>>>>> ff632609f1dd10126c80f107760226ba957fc3e3
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <LocationAutocomplete />
        <button className={`button is-medium ${styles["search-button"]}`}>
          <Link to="/search" onClick={() => performSearch(searchQuery)}>
            <span className="icon is-small">
              <i className="fas fa-search-location"></i>
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}