import React, { useState } from "react";
import { TagsInput } from "../components/TagsInput";
import styles from "./AddProvider.module.css";

export interface Provider {
  fullName: string;
  otherNames: string[];
  titles: string[];
  specialties: string[];
  languages: string[];
  services: string[];
  remoteVisits: boolean | null;
  slidingScalePay: boolean | null;
}
export function AddProvider(this: any) {
  const [input, setInput] = useState<Provider>({
    fullName: "",
    otherNames: [],
    titles: [],
    specialties: [],
    languages: [],
    services: [],
    remoteVisits: null,
    slidingScalePay: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  // handling tags input for props?
  const selectedTags = (tags: any, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(tags);
    console.log(e);
    setInput({
      ...input,
      [e.target.name]: tags,
    });
  };
  // handling remote visits
  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
    setInput({
      ...input,
      remoteVisits: e.target.checked,
    });
    console.log(input);
    console.log(isCheckedA);
  };
  // Handling sliding scale pay
  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
    setInput({
      ...input,
      slidingScalePay: e.target.checked,
    });
    console.log(isCheckedB);
  };

  // needs to add to database when click add location
  const handleClick = (): void => {};
  return (
    <div className={styles["add-provider"]}>
      <div className="field">
        <label className="label is-large">Provider Full Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Provider Full Name"
            value={input.fullName}
            onChange={handleChange}
            name="fullName"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Other Names</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.otherNames}
            name="otherNames"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-large">Titles</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.titles}
            name="titles"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-large">Specialties</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.specialties}
            name="specialties"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-large">Languages</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.languages}
            name="languages"
          />
        </div>
      </div>

      <div className="field">
        <label className="label is-large">Services</label>
        <div className="control">
          <TagsInput
            selectedTags={selectedTags}
            tags={input.services}
            name="services"
          />
        </div>
      </div>

      <div className="field">
        <label className="checkbox">Remote Visits</label>
        <input
          type="checkbox"
          name="remoteVisits"
          checked={isCheckedA}
          onChange={handleChangeA}
          value="remoteVisits"
        />
      </div>

      <div className="field">
        <label className="checkbox">Sliding Scale Pay</label>
        <input
          type="checkbox"
          name="slidingScalePay"
          checked={isCheckedB}
          onChange={handleChangeB}
          value="slidingScalePay"
        />
      </div>

      <button className="button" onClick={handleClick}>
        Add Provider
      </button>
    </div>
  );
}
