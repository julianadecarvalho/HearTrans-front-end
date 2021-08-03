import React from "react";
import styles from "./SearchBar.module.css";

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
            placeholder="doctors, clinics, specialities..."
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
      </div>
    </div>
  );
}
