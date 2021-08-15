import React, { useState } from "react";
import { TagsInput } from "../components/TagsInput";
import styles from "./AddReview.module.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const BACKEND_URL = "http://heartrans-back.herokuapp.com";
// maybe prompt user if want to add review for location or provider then take to separate forms?
// if separate forms then can link in the profile page to add review for provider or location
export interface Review {
  contentWarnings: string[];
  rating: number;
  review: string;
}
export function AddProviderReview() {
  const [input, setInput] = useState<Review>({
    contentWarnings: [],
    rating: 0,
    review: "",
  });

  // handling tags input for content warnings
  const selectedTags = (tags: any, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(tags);
    console.log(e);
    setInput({
      ...input,
      [e.target.name]: tags,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // state for rating
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // needs to add to database when click add location
  const handleClick = () => {
    return axios
    .post(`${BACKEND_URL}/addprovider`, {input})
    .then(async (response) => {
    console.log(response);
    })
    .catch((error) => {
      console.log("Error:", error);
      alert("Did you fill out the form completely?")
    });
  };
  return (
    <div className={styles["add-review"]}>
      <div className="field">
        <label className="label is-large">Content Warnings</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.contentWarnings}
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
                onChange={handleChange}
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
