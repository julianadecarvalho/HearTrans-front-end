import React from "react";
import styles from "./SearchBar.module.css";
import LocationAutocomplete  from "../components/LocationAutocomplete"

export function SearchBar() {
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
            placeholder="doctors, clinics, specialties..."
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <LocationAutocomplete />
        <button className={`button is-medium ${styles["search-button"]}`}>
          <span className="icon is-small">
            <i className="fas fa-search-location"></i>
          </span>
        </button>
      </div>
    </div>
  );
}