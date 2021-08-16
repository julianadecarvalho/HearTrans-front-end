import axios from "axios";
import React, { useState } from "react";
import styles from "./AddLocation.module.css";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export function AddLocation() {
  const [input, setInput] = useState({
    locationName: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // needs to add to database when click add location
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    const params = "".concat(...Object.values(input));
    axios
      // either work for params, when dont do replaceAll it separates by  %20
      // .post(`${REACT_APP_BACKEND_URL}/locations/new/${params.replaceAll(" ", "+")}`)
      .post(`${REACT_APP_BACKEND_URL}/locations/new/${params}`)
      .then(async (response) => {
        alert("Location successfully added. Thank you!");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Did you fill out the form completely?");
      });
  };

  return (
    <div className={styles["add-location"]}>
      <div className="field">
        <label className="label is-large">Location Name</label>
        <div className="control">
          <input
            type="text"
            placeholder="Location Name"
            className="input"
            value={input.locationName}
            onChange={handleChange}
            name="locationName"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Address</label>
        <div className="control">
          <input
            type="text"
            placeholder="Address"
            className="input"
            value={input.address}
            onChange={handleChange}
            name="address"
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}
