import React, { useState } from "react";
import { TagsInput } from "../components/TagsInput";
import styles from "./AddReview.module.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export interface Review {
  contentWarnings: string[];
  rating: number;
  reviewBody: string;
}
export function AddProviderReview() {
  const [input, setInput] = useState<Review>({
    contentWarnings: [],
    rating: 0,
    reviewBody: "",
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

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { id } = useParams<{ id: string }>();
  // needs to add to database when click add location
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    axios
      .post(`${REACT_APP_BACKEND_URL}/provider/reviews/${id}`, input)
      .then(async (response) => {
        console.log(response);
        alert("Provider Review successfully added. Thank you for your input!");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Did you fill out the form completely");
      });
  };
  return (
    <div className="container is-primary">
      <div className={`field ${styles["field-padding"]}`}>
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
                size={43}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>

      <div className={`field ${styles["field-padding"]}`}>
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
        <label className="label is-large">Review</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="My experience with..."
            value={input.reviewBody}
            onChange={handleChange}
            name="reviewBody"
          ></textarea>
        </div>
      </div>

      <button className="button is-primary is-light" onClick={handleClick}>
        Add Review
      </button>
    </div>
  );
}
