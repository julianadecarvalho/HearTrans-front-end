import React, { useState } from "react";
import styles from "./AddProvider.module.css";

export function AddProvider() {
  const [input, setInput] = useState({
    providerName: "",
    specialty: "",
    location: "",
    languages: "",
    services: "",
    remoteVisits: "",
    slidingScalePay: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // needs to add to database when click add location
  const handleClick = (): void => {};
  return (
    <div className={styles["add-provider"]}>
      <div className="field">
        <label className="label is-large">Provider Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Provider Name"
            value={input.providerName}
            onChange={handleChange}
            name="providerName"
          />
        </div>
      </div>

      {/* look for type that is add tags for speciality/location/languages?*/}
      <div className="field">
        <label className="label is-large">Specialty</label>
        <div className="control">
          <input
            type="text"
            placeholder="Specialty"
            className="input"
            value={input.specialty}
            onChange={handleChange}
            name="specialty"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Location</label>
        <div className="control">
          <input
            type="text"
            placeholder="Location"
            className="input"
            value={input.location}
            onChange={handleChange}
            name="location"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Languages</label>
        <div className="control">
          <input
            type="text"
            placeholder="Languages"
            className="input"
            value={input.languages}
            onChange={handleChange}
            name="languages"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Services</label>
        <div className="control">
          <input
            type="text"
            placeholder="Services"
            className="input"
            value={input.services}
            onChange={handleChange}
            name="services"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Remote Visits</label>
        <div className="control">
          <input
            type="text"
            placeholder="Remote Visits"
            className="input"
            value={input.remoteVisits}
            onChange={handleChange}
            name="remoteVisits"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Sliding Scale Pay?</label>
        <div className="control">
          <input
            type="text"
            placeholder="Do they offer sliding scale pay?"
            className="input"
            value={input.slidingScalePay}
            onChange={handleChange}
            name="slidingScalePay"
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Add Provider
      </button>
    </div>
  );
}
