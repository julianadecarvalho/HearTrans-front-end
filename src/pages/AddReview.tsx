import React, { useState } from "react";
// maybe prompt user if want to add review for location or provider then take to separate forms?
// if separate forms then can link in the profile page to add review for provider or location
export function AddReview() {
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

  // needs to add to database when click add location
  const handleClick = (): void => {};
  return (
    <div className="AddReview">
      <label>Content Warning</label>
      <input
        type="text"
        placeholder="Content Warning"
        className="AddReview-input"
        value={input.contentWarning}
        onChange={handleChange}
        name="contentWarning"
      />
      <label>Date</label>
      {/* type date input? */}
      <input
        type="text"
        placeholder="Date"
        className="AddReview-input"
        value={input.date}
        onChange={handleChange}
        name="date"
      />
      {/* make optional? */}
      <label>Provider</label>
      <input
        type="text"
        placeholder="Provider"
        className="AddReview-input"
        value={input.review}
        onChange={handleChange}
        name="review"
      />
      {/* Make optional? */}
      <label>Location</label>
      <input
        type="text"
        placeholder="Location"
        className="AddReview-input"
        value={input.location}
        onChange={handleChange}
        name="location"
      />
      <label>Accesible</label>
      <input
        type="text"
        placeholder="Accessible"
        className="AddReview-input"
        value={input.accessible}
        onChange={handleChange}
        name="accessible"
      />
      {/* type boolean? */}
      <label>Did they use correct pronouns?</label>
      <input
        type="text"
        placeholder="y/n"
        className="AddReview-input"
        value={input.useCorrectPronouns}
        onChange={handleChange}
        name="correctPronouns"
      />
      {/* type boolean */}
      <label>Did they use your correct name?</label>
      <input
        type="text"
        placeholder="y/n"
        className="AddReview-input"
        value={input.useCorrectName}
        onChange={handleChange}
        name="correctName"
      />
      {/* type rating?? */}
      <label>Rating</label>
      <input
        type="text"
        placeholder="x out of 5 stars"
        className="AddReview-input"
        value={input.rating}
        onChange={handleChange}
        name="rating"
      />
      <label>Review</label>
      <input
        type="textarea"
        placeholder="My experience with..."
        className="AddReview-input"
        value={input.review}
        onChange={handleChange}
        name="review"
      />
      <button className="AddReview-btn" onClick={handleClick}>
        Add Review
      </button>
    </div>
  );
}
