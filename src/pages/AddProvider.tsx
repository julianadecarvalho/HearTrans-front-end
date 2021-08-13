import React, { useState } from "react";
import styles from "./AddProvider.module.css";

export class Props extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      information: {
        remoteVisits: false,
        slidingScalePay: false,
      },
    };
  }
}
export interface Provider {
  fullName: string;
  otherNames: string;
  titles: string;
  specialties: string;
  languages: string;
  services: string;
  remoteVisits: boolean | null;
  slidingScalePay: boolean | null;
}
export function AddProvider(this: any) {
  const [input, setInput] = useState<Provider>({
    fullName: "",
    otherNames: "",
    titles: "",
    specialties: "",
    languages: "",
    services: "",
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

  // const handleCheckbox = (e: { target: { value: string | number; checked: any; }; }) => {
  //   let state = this.state;
  //   state.information[e.target.value] = e.target.checked;
  //   this.setState(state);
  //   console.log(this.state.information)
  // }

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
          <input
            className="input"
            type="text"
            placeholder="Other Names"
            value={input.otherNames}
            onChange={handleChange}
            name="otherNames"
          />
        </div>
      </div>
      <div className="field">
        <label className="label is-large">Titles</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Titles"
            value={input.titles}
            onChange={handleChange}
            name="titles"
          />
        </div>
      </div>

      {/* look for type that is add tags for speciality/location/languages?*/}
      <div className="field">
        <label className="label is-large">Specialties</label>
        <div className="control">
          <input
            type="text"
            placeholder="Specialties"
            className="input"
            value={input.specialties}
            onChange={handleChange}
            name="specialties"
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
      {/* <div className="field">
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
      </div> */}
      {/* <div className="field">
        <label className="checkbox">
          Remote Visits? <input onChange={handleCheckbox} type="checkbox"
          name="information" 
          value="remoteVisits" 
          checked={this.state.information.remoteVisits} />

          
          Sliding Scale Pay? <input onChange={handleCheckbox} type="checkbox" 
          name="information" 
          value="slidingScalePay" 
          checked={this.state.information.slidingScalePay} />
        </label>
      </div> */}
      {/* <div className="field">
      <div>
        <Checkbox
          handleChange={handleChangeA}
          isChecked={isCheckedA}
          label="A"
        />
      </div>
      <div>
        <Checkbox
          handleChange={handleChangeB}
          isChecked={isCheckedB}
          label="B"
        />
      </div> */}

      <div>
        <label>Remote Visits?</label>
        <input
          type="checkbox"
          name="remoteVisits"
          checked={isCheckedA}
          onChange={handleChangeA}
          // value={input.remoteVisits}
          value="remoteVisits"
        />
      </div>
      <div>
        <label>Sliding Scale Pay?</label>
        <input
          type="checkbox"
          name="slidingScalePay"
          checked={isCheckedB}
          onChange={handleChangeB}
          // value={input.slidingScalePay}
          value="slidingScalePay"
        />
      </div>
      <button className="button" onClick={handleClick}>
        Add Provider
      </button>
    </div>
  );
}
