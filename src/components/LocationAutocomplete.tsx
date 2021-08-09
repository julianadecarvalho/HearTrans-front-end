import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const LocationAutocomplete = () => {
  // const [value, setValue] = useState(null);
  return (
      <div className="field has-addons">
        <p className="control"> 
        <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE} />
  </p>
  </div>
  
)};

export default LocationAutocomplete;

