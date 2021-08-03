import React from "react";

export function SearchBar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static">Search</button>
        </p>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder="doctors, pharmacies, therapists"
          />
        </p>
        <p className="control">
          <button className="button is-static">NEAR</button>
        </p>
        <p className="control">
          <input className="input" type="text" placeholder="Where" />
        </p>
      </div>
    </div>
  );
}
