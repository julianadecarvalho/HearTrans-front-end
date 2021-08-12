import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import styles from "./SearchBar.module.css";


const LocationAutocomplete = (props: any) => {
  const [value, setValue] = useState(null);
  // props.setCenter

  // const setTheCenter = (val: any) => {
  //   console.log(val)
  //   setValue({
  //     ...value,
  //     ...val
  //   })
  // }
  return (
    // Added the custom style references 
    <p className={`${styles["css-yk16xz-control"]} ${styles["input-control"]} control`}> 
        <GooglePlacesAutocomplete
          apiKey={`${process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}`}
          selectProps={{
            value,
            onChange: setValue,
          }}
        />
  </p>

  
)};

export default LocationAutocomplete;