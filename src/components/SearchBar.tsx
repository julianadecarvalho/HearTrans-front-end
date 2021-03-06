import { useState, useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "./SearchContext";
import { Link } from "react-router-dom";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

export function SearchBar(props: any) {
  const { performSearch } = useContext(SearchContext);
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

  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <div className="button is-static is-medium is-info is-light">
            Search
          </div>
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
          <div className="button is-static is-medium is-info is-light">
            Near
          </div>
        </p>
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
