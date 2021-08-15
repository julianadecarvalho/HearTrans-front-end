import axios from "axios";
import React, { useState } from "react";
import styles from "./AddLocation.module.css";
const BACKEND_URL = "http://heartrans-back.herokuapp.com";

export function AddLocation() {
  const [input, setInput] = useState({
    locationName: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // needs to add to database when click add location
  const handleClick = () => {
    return axios
    .post(`${BACKEND_URL}/addlocation`, {input})
    .then(async (response) => {
    console.log(response);
    })
    .catch((error) => {
      console.log("Error:", error);
      alert("Did you fill out the form completely?")
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
      <div className="field">
        <label className="label is-large">Phone</label>
        <div className="control">
          <input
            type="text"
            placeholder="Phone"
            className="input"
            value={input.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}
