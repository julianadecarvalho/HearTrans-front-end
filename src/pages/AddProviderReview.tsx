import React, { useState } from "react";
import styles from "./AddReview.module.css";
import { FaStar } from "react-icons/fa";
// maybe prompt user if want to add review for location or provider then take to separate forms?
// if separate forms then can link in the profile page to add review for provider or location
export function AddProviderReview() {
  const [input, setInput] = useState({
    contentWarnings: "",
    rating: "",
    review: "",
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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

      <div className="field">
        <label className="label is-large">Rating</label>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                size={30}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
        <p>rating input is called with this variable {rating}</p>
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
