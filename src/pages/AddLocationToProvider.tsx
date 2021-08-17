import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PaddingForForms.module.css"


require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
      // .post(`${REACT_APP_BACKEND_URL}/locations/new/${params.replaceAll(" ", "+")}`)
      .patch(`${REACT_APP_BACKEND_URL}/providers/${id}/${input.locationId}`)
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
    <div className="container is-primary">
      <div className={`field ${styles["field-padding"]}`}>
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
      <button className="button is-primary is-light" onClick={handleClick}>
        Add Location to Provider
      </button>
    </div>
  );
}
