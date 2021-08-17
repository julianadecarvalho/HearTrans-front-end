import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export function AddProviderToLocation() {
  const [input, setInput] = useState({
    providerId: "",
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
      .patch(`${REACT_APP_BACKEND_URL}/locations/${id}/${input.providerId}`)
      .then(async (response) => {
        alert("Provider successfully added to location. Thank you!");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Did you fill out the form completely?");
      });
  };

  return (
    <div className="conatiner is-primary">
      <div className="field">
        <label className="label is-large">Location ID</label>
        <div className="control">
          <input
            type="text"
            placeholder="Provider ID"
            className="input"
            value={input.providerId}
            onChange={handleChange}
            name="providerId"
          />
        </div>
      </div>
      <button className="button is-primary is-light" onClick={handleClick}>
        Add Provider to Location
      </button>
    </div>
  );
}
