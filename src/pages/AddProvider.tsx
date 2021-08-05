import React, { useState } from "react";

export function AddProvider() {
  const [input, setInput] = useState({
    providerName: "",
    speciality: "",
    location: "",
    languages: "",
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
    <div className="AddProvider">
      <label>Provider Name</label>
      <input
        type="text"
        placeholder="Provider Name"
        className="AddProvider-input"
        value={input.providerName}
        onChange={handleChange}
        name="providerName"
      />
      {/* look for type that is add tags for speciality/location/languages?*/}
      <label>Speciality</label>
      <input
        type="text"
        placeholder="Specialty"
        className="AddProvider-input"
        value={input.speciality}
        onChange={handleChange}
        name="specialty"
      />
      <label>Location</label>
      <input
        type="text"
        placeholder="Location"
        className="AddProvider-input"
        value={input.location}
        onChange={handleChange}
        name="location"
      />
      <label>Languages</label>
      <input
        type="text"
        placeholder="Languages"
        className="AddProvider-input"
        value={input.languages}
        onChange={handleChange}
        name="languages"
      />
      <button className="AddProvider-btn" onClick={handleClick}>
        Add Provider
      </button>
    </div>
  );
}
