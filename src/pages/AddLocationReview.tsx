import React, { useState } from "react";
import styles from "./PaddingForForms.module.css";

export function AddLocationReview() {
  const [input, setInput] = useState({
    contentWarning: "",
    date: "",
    provider: "",
    location: "",
    accessible: "",
    useCorrectPronouns: "",
    useCorrectName: "",
    rating: "",
    review: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {};
  return (
    <div className="container is-primary">
      <div className={`field ${styles["field-padding"]}`}>
        <label className="label is-large">Content Warning</label>
        <div className="control">
          <input
            type="text"
            placeholder="Content Warning"
            className="input"
            value={input.contentWarning}
            onChange={handleChange}
            name="contentWarning"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Date</label>
        <div className="control">
          <input
            type="text"
            placeholder="Date"
            className="input"
            value={input.date}
            onChange={handleChange}
            name="date"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="label is-large">Provider</label>
          <input
            type="text"
            placeholder="Provider"
            className="input"
            value={input.review}
            onChange={handleChange}
            name="review"
          />
        </div>
      </div>
      <label className="label is-large">Location</label>
      <input
        type="text"
        placeholder="Location"
        className="input"
        value={input.location}
        onChange={handleChange}
        name="location"
      />
      <div className="field">
        <label className="label is-large">Accesible</label>
        <div className="control">
          <input
            type="text"
            placeholder="Accessible"
            className="input"
            value={input.accessible}
            onChange={handleChange}
            name="accessible"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Did they use correct pronouns?</label>
        <div className="control">
          <input
            type="text"
            placeholder="y/n"
            className="input"
            value={input.useCorrectPronouns}
            onChange={handleChange}
            name="correctPronouns"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">
          Did they use your correct name?
        </label>
        <div className="control">
          <input
            type="text"
            placeholder="y/n"
            className="input"
            value={input.useCorrectName}
            onChange={handleChange}
            name="correctName"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Rating</label>
        <div className="control">
          <input
            type="text"
            placeholder="x out of 5 stars"
            className="input"
            value={input.rating}
            onChange={handleChange}
            name="rating"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Review</label>
        <div className="control">
          <input
            type="textarea"
            placeholder="My experience with..."
            className="input"
            value={input.review}
            onChange={handleChange}
            name="review"
          />
        </div>
      </div>
      <button className="button is-primary is-light" onClick={handleClick}>
        Add Review
      </button>
    </div>
  );
}
