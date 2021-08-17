import axios from "axios";
import React, { useState } from "react";
import styles from "./PaddingForForms.module.css"


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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    const params = "".concat(...Object.values(input));
    axios
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
    <div className="container is-primary">
      <div className={`field ${styles["field-padding"]}`}>
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
      <div className={`field ${styles["field-padding"]}`}>
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
      <button className="button is-primary is-light" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}
