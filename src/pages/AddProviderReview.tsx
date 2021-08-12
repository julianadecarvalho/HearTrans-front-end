import React, { useState } from "react";
import styles from "./AddReview.module.css";

// maybe prompt user if want to add review for location or provider then take to separate forms?
// if separate forms then can link in the profile page to add review for provider or location
export function AddProviderReview() {
  const [input, setInput] = useState({
    contentWarnings: "",
    rating: "",
    review: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // needs to add to database when click add location
  const handleClick = (): void => {};
  return (
    <div className={styles["add-review"]}>
      <div className="field">
        <label className="label is-large">Content Warnings</label>
        <div className="control">
          <input
            type="text"
            placeholder="Content Warnings"
            className="input"
            value={input.contentWarnings}
            onChange={handleChange}
            name="contentWarnings"
          />
        </div>
      </div>
      {/* type rating?? */}
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
          <textarea
            className="textarea"
            placeholder="My experience with..."
            value={input.review}
            onChange={handleChange}
            name="review"
          ></textarea>
        </div>
      </div>

      <button className="button" onClick={handleClick}>
        Add Review
      </button>
    </div>
  );
}
