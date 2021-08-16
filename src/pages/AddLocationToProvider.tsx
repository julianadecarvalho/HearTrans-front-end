import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./AddLocation.module.css";
const BACKEND_URL = "http://heartrans-back.herokuapp.com";

export function AddLocationToProvider() {
  const [input, setInput] = useState({
    locationId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // needs to add to database when click add location
  const { id } = useParams<{ id: string }>();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    axios
      // either work for params, when dont do replaceAll it separates by  %20
      // .post(`${BACKEND_URL}/locations/new/${params.replaceAll(" ", "+")}`)
      .patch(`${BACKEND_URL}/providers/${id}/${input.locationId}`)
      .then(async (response) => {
        alert("Location successfully added to provider. Thank you!");
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
        <label className="label is-large">Location ID</label>
        <div className="control">
          <input
            type="text"
            placeholder="Location ID"
            className="input"
            value={input.locationId}
            onChange={handleChange}
            name="locationId"
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Add Location to Provider
      </button>
    </div>
  );
}
