import React, { useState } from "react";

export function AddLocation() {
  const [input, setInput] = useState({
    locationName: "",
    address: "",
    phone: "",
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
    <div className="AddLocation">
      <label>Location Name</label>
      <input
        type="text"
        placeholder="Location Name"
        className="AddLocation-input"
        value={input.locationName}
        onChange={handleChange}
        name="locationName"
      />
      <label>Address</label>
      <input
        type="text"
        placeholder="Address"
        className="AddLocation-input"
        value={input.address}
        onChange={handleChange}
        name="address"
      />
      <label>Phone</label>
      <input
        type="text"
        placeholder="Phone"
        className="AddLocation-input"
        value={input.phone}
        onChange={handleChange}
        name="phone"
      />
      <button className="AddLocation-btn" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}
