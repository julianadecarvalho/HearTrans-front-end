import React, { useState } from "react";
import styles from "./SearchBar.module.css";
// save search term in useState

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log({ searchTerm });
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
            placeholder="doctors, clinics, specialities..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="location"
          />
        </p>
        <button className={`button is-medium ${styles["search-button"]}`}>
          <span className="icon is-small">
            <i className="fas fa-search-location"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
