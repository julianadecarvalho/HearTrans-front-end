
// dont forget to import css style
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const LocationAutocomplete = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}
    />
  </div>
);

export default LocationAutocomplete;

