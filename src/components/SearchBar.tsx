import React, { useState, useContext, useEffect } from "react";
import styles from "./SearchBar.module.css";
// import LocationAutocomplete from "../components/LocationAutocomplete";
import { SearchContext } from "./SearchContext";
import { Link } from "react-router-dom";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

// save search term in useState

//copied from search results
const onSearch = (searchTerm: string) => {
  // api request with the seachterm
  // setResults(/*result of the api request*/)
};

export function SearchBar(props: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState({ lat: 0, lng: 0 });
  const viewData = (...data: any[]) => {
    geocodeByAddress(data[0].label)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.setNewCoords(latLng);
        setLocationQuery(latLng);
      });
  };
  //new handlers for the search results
  const { performSearch } = useContext(SearchContext);

  //  testing out the location autocomplete
  // const [value, setValue] = useState(null);
  // const searchResultsHandler = () => {
  //   //onClick (searchresults) for api call for get request
  //   performSearch(searchQuery)
  // };

  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className={"button is-static is-medium"}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium is-desktop ${styles["input-control"]}`}
            type="text"
            placeholder="doctors, clinics, specialities..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </p>
        <p className="control">
          <div className="button is-static is-medium">Near</div>
        </p>
        {/* <LocationAutocomplete /> */}
        <p
          className={`${styles["css-yk16xz-control"]} ${styles["input-control"]} control`}
        >
          <GooglePlacesAutocomplete
            apiKey={`${process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}`}
            autocompletionRequest={{
              types: ["geocode"],
            }}
            selectProps={{
              locationQuery,
              onChange: viewData,
            }}
          />
        </p>
        <button className={`button is-medium ${styles["search-button"]}`}>
          <Link
            to="/search"
            onClick={() => performSearch(searchQuery, locationQuery)}
          >
            <span className="icon is-small">
              <i className="fas fa-search-location"></i>
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
